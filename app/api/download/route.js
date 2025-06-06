import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function POST(request) {
  try {
    const { url } = await request.json();

    if (!url || !url.includes("instagram.com")) {
      return new Response(JSON.stringify({ error: "Invalid Instagram URL" }), {
        status: 400,
      });
    }

    // yt-dlp fetches video info as JSON
    const { stdout } = await execAsync(
      `yt-dlp --skip-download --print-json "${url}"`
    );

    const json = JSON.parse(stdout);
    const videoUrl = json.url;

    // ✅ Log the direct fetched video URL

    return new Response(JSON.stringify({ downloadUrl: videoUrl }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch video URL" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
