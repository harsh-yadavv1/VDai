import { Metadata } from "next";
import HomePageClient from "./components/HomePageClient";
import FAQ from "./components/FAQ";
import SEO from "./components/SEO";

export const metadata: Metadata = {
  title: "VDBYai - Instagram & Pinterest Content Downloader",
  description:
    "Download Instagram reels, posts, stories, and IGTV videos in high quality. Pinterest downloader coming soon. Fast, free, and secure.",
  openGraph: {
    title: "VDBYai - Instagram & Pinterest Content Downloader",
    description:
      "Download social media content in high quality. Fast, free, and secure.",
  },
};

export default function Home() {
  return (
    <>
      <SEO />
      <HomePageClient />
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Download Instagram Reels Online - Free & Fast
          </h1>
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-600 text-center mb-8">
              VDBYai is your trusted Instagram reel downloader, offering a fast
              and free way to save your favorite Instagram reels. Download
              high-quality videos without watermarks in just a few clicks. No
              registration required.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Why Choose VDBYai for Instagram Reel Downloads?
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>✨ Download Instagram reels in HD quality</li>
              <li>🚀 Fast and free downloads</li>
              <li>💯 No watermarks on downloaded videos</li>
              <li>📱 Works on all devices - mobile, tablet, and desktop</li>
              <li>🔒 No registration or sign-in required</li>
              <li>⚡ Instant downloads with optimized servers</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
              How to Download Instagram Reels
            </h2>
            <ol className="space-y-4 text-gray-600">
              <li>Copy the URL of the Instagram reel you want to download</li>
              <li>Paste the URL into our downloader</li>
              <li>Click the download button</li>
              <li>Save your video in high quality</li>
            </ol>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
