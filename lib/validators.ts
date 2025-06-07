export function validateUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    const allowedDomains = [
      "youtube.com",
      "youtu.be",
      "instagram.com",
      "pinterest.com",
    ];

    return allowedDomains.some((domain) => urlObj.hostname.includes(domain));
  } catch {
    return false;
  }
}

export function validateFilename(filename: string): boolean {
  // Basic filename validation
  const invalidChars = /[<>:"/\\|?*\x00-\x1F]/g;
  return !invalidChars.test(filename);
}
