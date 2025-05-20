import { pipeline } from "node:stream/promises";
import { stringify } from "csv-stringify";
import { PassThrough } from "node:stream";
import { S3Client } from "@aws-sdk/client-s3";
import pg from "pg";
import QueryStream from "pg-query-stream";
import { Upload } from "@aws-sdk/lib-storage";
import { env } from "@/env";

export const exportLinksController = async () => {
  const {
    POSTGRES_USER,
    POSTGRES_PASSWORD,
    POSTGRES_DB,
    POSTGRES_HOST,
    POSTGRES_PORT,
  } = env;
  const connection = `postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}`;
  const pgClient = new pg.Client({
    connectionString: connection,
  });

  await pgClient.connect();

  const query = new QueryStream(`
    SELECT id, link, short_link, created_at
    , (SELECT COUNT(*) FROM count_links WHERE count_links.link_id = links.id) AS count_links
    FROM links
  `);

  const dbStream = pgClient.query(query);
  const csvStream = stringify({ header: true });
  const passThrough = new PassThrough();

  const r2 = new S3Client({
    region: "auto",
    endpoint: process.env.CLOUDFLARE_END_POINT,
    credentials: {
      accessKeyId: process.env.CLOUDFLARE_ACCESS_KEY!,
      secretAccessKey: process.env.CLOUDFLARE_SECRET_KEY!,
    },
  });

  const fileName = `exports/links-${Date.now()}.csv`;

  const upload = new Upload({
    client: r2,
    params: {
      Bucket: process.env.CLOUDFLARE_BUCKET,
      Key: fileName,
      Body: passThrough,
      ContentType: "text/csv",
    },
  });

  try {
    await pipeline(dbStream, csvStream, passThrough);
    await upload.done();

    await pgClient.end();
    return {
      status: 200,
      path: fileName,
      url: `${process.env.CLOUDFLARE_PUBLIC_URL}/${fileName}`,
    };
  } catch (err) {
    console.error("Erro ao exportar CSV:", err);
    await pgClient.end();
    return {
      status: 400,
      code: "CSV_EXPORT_ERROR",
      message: "Error exporting CSV",
      debug: err,
    };
  }
};
