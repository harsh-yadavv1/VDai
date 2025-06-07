export function sanitizeFilename(filename: string): string {
  // Remove invalid characters
  let sanitized = filename.replace(/[<>:"/\\|?*\x00-\x1F]/g, "_");

  // Limit length
  if (sanitized.length > 255) {
    const ext = sanitized.split(".").pop();
    sanitized = sanitized.substring(0, 255 - ext!.length - 1) + "." + ext;
  }

  return sanitized;
}

export function generateUniqueFilename(originalName: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 8);
  const ext = originalName.split(".").pop();
  return `${timestamp}_${random}.${ext}`;
}
