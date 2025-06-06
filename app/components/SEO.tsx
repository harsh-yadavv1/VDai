"use client";

import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
  canonical?: string;
}

export default function SEO({
  title = "Download Instagram Reels – Free & Fast | VDBYai",
  description = "Easily download Instagram Reels in HD quality. Free online tool to save Instagram videos with no watermark. No registration required.",
  keywords = [
    "instagram reel downloader",
    "download instagram reels online",
    "free insta reel video downloader",
    "instagram video downloader",
    "reel saver",
    "instagram downloader",
    "reel downloader",
    "save instagram reels",
    "download instagram videos",
    "instagram reel saver",
  ],
  ogImage = "/og-image.png",
  ogType = "website",
  twitterCard = "summary_large_image",
  canonical = "https://vdbyai.vercel.app",
}: SEOProps) {
  const siteTitle = title.includes("VDBYai") ? title : `${title} | VDBYai`;

  return (
    <Head>
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="VDBYai" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
    </Head>
  );
}
