import { Metadata } from "next";
import Downloader from "../components/download";

export const metadata: Metadata = {
  title: "Instagram Downloader - Download Reels, Stories & Videos | VDBYai",
  description:
    "Download Instagram reels, stories, and videos in HD quality. No watermark, instant download. Best Instagram content downloader for 2024.",
  openGraph: {
    title: "Instagram Downloader - VDBYai",
    description:
      "Download Instagram content in HD quality. Free, fast & no watermark!",
  },
};

export default function InstagramPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
        Instagram Downloader
      </h1>
      <div className="max-w-3xl mx-auto">
        <Downloader />
      </div>
    </div>
  );
}
