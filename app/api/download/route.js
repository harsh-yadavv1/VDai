import { exec } from "child_process";
import { promisify } from "util";
import { rateLimit } from "../../../lib/rate-limit";
import { validateUrl } from "../../../lib/validators";
import { downloadVideo } from "../../../lib/downloader";
import { sanitizeFilename } from "../../../lib/utils";
import fs from "fs";
import path from "path";

const execAsync = promisify(exec);

export const runtime = "nodejs";

// Security configurations
const ALLOWED_FILE_TYPES = [".mp4", ".jpg", ".jpeg", ".png"];
const MAX_FILE_SIZE = 100 * 1024 * 1024; // 100MB
const DOWNLOAD_DIR = path.join(process.cwd(), "downloads");

// Rate limiting configuration
const limiter = rateLimit({
    interval: 60 * 1000, // 1 minute
    uniqueTokenPerInterval: 500,
});

// Validate file type
function isValidFileType(filename) {
    const ext = path.extname(filename).toLowerCase();
    return ALLOWED_FILE_TYPES.includes(ext);
}

// Validate file size
function isValidFileSize(size) {
    return size <= MAX_FILE_SIZE;
}

// Validate file path to prevent directory traversal
function isValidFilePath(filePath) {
    const normalizedPath = path.normalize(filePath);
    return normalizedPath.startsWith(DOWNLOAD_DIR);
}

export async function POST(request) {
    try {
        // Apply rate limiting
        await limiter.check(5, "DOWNLOAD_CACHE"); // 5 requests per minute

        // Validate request method
        if (request.method !== "POST") {
            return new Response(JSON.stringify({ error: "Method not allowed" }), {
                status: 405,
                headers: { Allow: "POST" },
            });
        }

        // Validate content type
        const contentType = request.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            return new Response(JSON.stringify({ error: "Invalid content type" }), {
                status: 400,
            });
        }

        const { url } = await request.json();

        // Validate input
        if (!url || !validateUrl(url)) {
            return new Response(JSON.stringify({ error: "Invalid URL provided" }), {
                status: 400,
            });
        }

        // Download video
        const result = await downloadVideo(url);

        // Validate downloaded file
        if (!isValidFileType(result.filename)) {
            fs.unlinkSync(result.path);
            return new Response(JSON.stringify({ error: "Invalid file type" }), {
                status: 400,
            });
        }

        const fileStats = fs.statSync(result.path);

        if (!isValidFileSize(fileStats.size)) {
            fs.unlinkSync(result.path);
            return new Response(JSON.stringify({ error: "File too large" }), {
                status: 400,
            });
        }

        // Sanitize filename
        const sanitizedFilename = sanitizeFilename(result.filename);

        // Create a temporary download URL
        const downloadUrl = `/api/download?filename=${encodeURIComponent(
      sanitizedFilename
    )}`;

        return new Response(
            JSON.stringify({
                success: true,
                filename: sanitizedFilename,
                downloadUrl: downloadUrl,
                message: "Download completed successfully",
            }), {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                    "X-Content-Type-Options": "nosniff",
                    "X-Frame-Options": "DENY",
                    "X-XSS-Protection": "1; mode=block",
                },
            }
        );
    } catch (error) {
        if (error.message.includes("rate limit")) {
            return new Response(
                JSON.stringify({ error: "Too many requests. Please try again later." }), {
                    status: 429,
                    headers: { "Retry-After": "60" },
                }
            );
        }

        return new Response(
            JSON.stringify({
                error: "An error occurred while processing your request",
            }), {
                status: 500,
                headers: {
                    "X-Content-Type-Options": "nosniff",
                    "X-Frame-Options": "DENY",
                    "X-XSS-Protection": "1; mode=block",
                },
            }
        );
    }
}

// Handle file download
export async function GET(request) {
    try {
        // Validate request method
        if (request.method !== "GET") {
            return new Response(JSON.stringify({ error: "Method not allowed" }), {
                status: 405,
                headers: { Allow: "GET" },
            });
        }

        const url = new URL(request.url);
        const filename = url.searchParams.get("filename");

        if (!filename) {
            return new Response(JSON.stringify({ error: "Filename not provided" }), {
                status: 400,
                headers: {
                    "X-Content-Type-Options": "nosniff",
                    "X-Frame-Options": "DENY",
                    "X-XSS-Protection": "1; mode=block",
                },
            });
        }

        // Validate filename
        if (!isValidFileType(filename)) {
            return new Response(JSON.stringify({ error: "Invalid file type" }), {
                status: 400,
                headers: {
                    "X-Content-Type-Options": "nosniff",
                    "X-Frame-Options": "DENY",
                    "X-XSS-Protection": "1; mode=block",
                },
            });
        }

        const filePath = path.join(DOWNLOAD_DIR, filename);

        // Validate file path
        if (!isValidFilePath(filePath)) {
            return new Response(JSON.stringify({ error: "Invalid file path" }), {
                status: 400,
                headers: {
                    "X-Content-Type-Options": "nosniff",
                    "X-Frame-Options": "DENY",
                    "X-XSS-Protection": "1; mode=block",
                },
            });
        }

        if (!fs.existsSync(filePath)) {
            return new Response(JSON.stringify({ error: "File not found" }), {
                status: 404,
                headers: {
                    "X-Content-Type-Options": "nosniff",
                    "X-Frame-Options": "DENY",
                    "X-XSS-Protection": "1; mode=block",
                },
            });
        }

        const fileBuffer = fs.readFileSync(filePath);
        const fileStats = fs.statSync(filePath);

        // Validate file size
        if (!isValidFileSize(fileStats.size)) {
            return new Response(JSON.stringify({ error: "File too large" }), {
                status: 400,
                headers: {
                    "X-Content-Type-Options": "nosniff",
                    "X-Frame-Options": "DENY",
                    "X-XSS-Protection": "1; mode=block",
                },
            });
        }

        // Determine content type based on file extension
        let contentType = "application/octet-stream";
        const ext = path.extname(filename).toLowerCase();
        if (ext === ".mp4") {
            contentType = "video/mp4";
        } else if (ext === ".jpg" || ext === ".jpeg") {
            contentType = "image/jpeg";
        } else if (ext === ".png") {
            contentType = "image/png";
        }

        // Set appropriate headers for video streaming
        const headers = {
            "Content-Type": contentType,
            "Content-Length": fileStats.size,
            "Accept-Ranges": "bytes",
            "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            Pragma: "no-cache",
            Expires: "0",
            "X-Content-Type-Options": "nosniff",
            "X-Frame-Options": "DENY",
            "X-XSS-Protection": "1; mode=block",
            "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
        };

        // If it's a video, set content disposition to inline for preview
        if (contentType.startsWith("video/")) {
            headers["Content-Disposition"] = `inline; filename="${filename}"`;
        } else {
            headers["Content-Disposition"] = `attachment; filename="${filename}"`;
        }

        return new Response(fileBuffer, { headers });
    } catch (error) {
        return new Response(
            JSON.stringify({
                error: "An error occurred while downloading the file",
            }), {
                status: 500,
                headers: {
                    "X-Content-Type-Options": "nosniff",
                    "X-Frame-Options": "DENY",
                    "X-XSS-Protection": "1; mode=block",
                },
            }
        );
    }
}