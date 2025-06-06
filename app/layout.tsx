import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://vdbyai.vercel.app"),
  title: {
    default: "VDBYai - Download Instagram Reels & Pinterest Pins",
    template: "%s | VDBYai",
  },
  description:
    "Download Instagram reels, posts, stories, and Pinterest pins in high quality with zero watermarks. Fast, free, and secure. No registration required.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  keywords: [
    "instagram downloader",
    "reel downloader",
    "pinterest downloader",
    "video downloader",
    "instagram video download",
    "reel saver",
    "story downloader",
    "igtv downloader",
    "pinterest pin downloader",
    "social media downloader",
  ],
  authors: [{ name: "VDBYai Team" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vdbyai.vercel.app",
    siteName: "VDBYai",
    title: "VDBYai - Download Instagram Reels & Pinterest Pins",
    description:
      "Download Instagram reels, posts, stories, and Pinterest pins in high quality with zero watermarks. Fast, free, and secure.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "VDBYai - Social Media Downloader",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VDBYai - Download Instagram Reels & Pinterest Pins",
    description:
      "Download Instagram reels, posts, stories, and Pinterest pins in high quality with zero watermarks.",
    images: ["/og-image.png"],
    creator: "@vdbyai",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://vdbyai.vercel.app",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <ErrorBoundary>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ErrorBoundary>
        <Script id="schema-markup" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "VDBYai",
              "description": "Download Instagram reels, posts, stories, and Pinterest pins in high quality. Free, fast, and no watermarks.",
              "url": "https://vdbyai.vercel.app",
              "applicationCategory": "UtilitiesApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              },
              "featureList": [
                "Download Instagram Reels",
                "Download Instagram Posts",
                "Download Instagram Stories",
                "Download Pinterest Pins",
                "High Quality Downloads",
                "No Watermarks",
                "Free to Use"
              ]
            }
          `}
        </Script>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
