export function isValidShortLink(
  shortLink: string
): { code: string; message: string } | boolean {
  const invalidCaracters = /[^a-zA-Z0-9-_]/;
  if (invalidCaracters.test(shortLink)) {
    return {
      code: "SHORT_LINK_INVALID_CHARACTER",
      message:
        "Short Link is invalid, only alphanumeric characters, hyphens and underscores are allowed",
    };
  }

  if (shortLink.length < 1 || shortLink.length > 20) {
    return {
      code: "SHORT_LINK_LENGTH_INVALID",
      message:
        "Short Link length is invalid, must be between 4 and 20 characters",
    };
  }

  return true;
}

export default isValidShortLink;
