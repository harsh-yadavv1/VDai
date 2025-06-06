import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const formData = await req.formData();
    const url = formData.get("url");

    if (!url || !url.startsWith("http")) {
      return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
    }

    const response = await fetch(url);
    if (!response.ok) {
      return NextResponse.json(
        { error: "Failed to fetch video" },
        { status: 500 }
      );
    }

    const arrayBuffer = await response.arrayBuffer();
    const videoBuffer = Buffer.from(arrayBuffer);

    const headers = new Headers();
    headers.set("Content-Type", "video/mp4");
    headers.set("Content-Disposition", "attachment; filename=insta_video.mp4");

    return new Response(videoBuffer, {
      status: 200,
      headers,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
