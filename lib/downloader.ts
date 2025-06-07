import { exec } from "child_process";
import { promisify } from "util";
import path from "path";
import fs from "fs";
import { validateUrl } from "./validators";

const execAsync = promisify(exec);

const DOWNLOAD_DIR = path.join(process.cwd(), "downloads");
const MAX_FILE_AGE = 24 * 60 * 60 * 1000; // 24 hours

// Ensure download directory exists
if (!fs.existsSync(DOWNLOAD_DIR)) {
  fs.mkdirSync(DOWNLOAD_DIR, { recursive: true });
}

// Cleanup old files
function cleanupOldFiles() {
  const files = fs.readdirSync(DOWNLOAD_DIR);
  const now = Date.now();

  files.forEach((file) => {
    const filePath = path.join(DOWNLOAD_DIR, file);
    const stats = fs.statSync(filePath);
    const fileAge = now - stats.mtimeMs;

    if (fileAge > MAX_FILE_AGE) {
      fs.unlinkSync(filePath);
    }
  });
}

export async function downloadVideo(url: string) {
  if (!validateUrl(url)) {
    throw new Error("Invalid URL");
  }

  // Cleanup old files before new download
  cleanupOldFiles();

  const timestamp = Date.now();
  const outputPath = path.join(DOWNLOAD_DIR, `video_${timestamp}`);

  try {
    // Use yt-dlp with safe options
    const command = `yt-dlp "${url}" -o "${outputPath}.%(ext)s" --no-playlist --max-filesize 100m`;
    await execAsync(command);

    // Get the actual filename
    const files = fs.readdirSync(DOWNLOAD_DIR);
    const downloadedFile = files.find((f) =>
      f.startsWith(`video_${timestamp}`)
    );

    if (!downloadedFile) {
      throw new Error("Download failed");
    }

    return {
      filename: downloadedFile,
      path: path.join(DOWNLOAD_DIR, downloadedFile),
    };
  } catch (error) {
    // Cleanup on error
    const files = fs.readdirSync(DOWNLOAD_DIR);
    files.forEach((file) => {
      if (file.startsWith(`video_${timestamp}`)) {
        fs.unlinkSync(path.join(DOWNLOAD_DIR, file));
      }
    });
    throw error;
  }
}
