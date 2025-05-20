FROM node:20.18 AS base

FROM base AS dependencies

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

FROM base AS build

WORKDIR /app

COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN yarn build

FROM cgr.dev/chainguard/node:latest AS deploy

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package.json ./package.json

EXPOSE 3333

USER 1000

CMD ["dist/index.js"]