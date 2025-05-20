export function isValidLink(
  link: string
): { code: string; message: string } | boolean {
  if (link.length < 4 || link.length > 200) {
    return { code: "LINK_LENGTH_INVALID", message: "Link length is invalid" };
  }

  if (!link.includes(".")) {
    return { code: "LINK_DOMAIN_INVALID", message: "Link domain is invalid" };
  }
  const domainSplit = link.split(".");
  if (domainSplit[1] === undefined || domainSplit[1].length < 1) {
    return { code: "LINK_DOMAIN_INVALID", message: "Link domain is invalid" };
  }

  if (link.split(".").length < 2) {
    return { code: "LINK_DOMAIN_INVALID", message: "Link domain is invalid" };
  }

  return true;
}

export default isValidLink;
