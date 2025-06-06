"use client";

import { useState, useEffect } from "react";
import {
  Download,
  X,
  Play,
  Search,
  Instagram,
  Image,
  Video,
  User,
  Eye,
  Bookmark,
} from "lucide-react";

const tabs = [
  {
    label: "Videos",
    id: "videos",
    placeholder: "Instagram Video URL",
    heading: "Video Downloader",
    icon: Video,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    label: "Reels",
    id: "reels",
    placeholder: "Instagram Reel URL",
    heading: "Reels Downloader",
    icon: Play,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    label: "Photos",
    id: "photos",
    placeholder: "Instagram Photo URL",
    heading: "Photo Downloader",
    icon: Image,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    label: "DP",
    id: "dp",
    placeholder: "Instagram Username",
    heading: "Profile Picture Downloader",
    icon: User,
    gradient: "from-orange-500 to-red-500",
  },
  {
    label: "Story",
    id: "story",
    placeholder: "Instagram Username",
    heading: "Story Downloader",
    icon: Eye,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    label: "Highlights",
    id: "highlights",
    placeholder: "Instagram Username",
    heading: "Highlights Downloader",
    icon: Bookmark,
    gradient: "from-indigo-500 to-purple-500",
  },
];

export default function Downloader() {
  const [url, setUrl] = useState("");
  const [downloadLink, setDownloadLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("reels");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTab = tabs.find((tab) => tab.id === activeTab);
  const IconComponent = currentTab?.icon || Play;

  // Don't render anything until mounted
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

  const handleDownload = async () => {
    if (!url) return;
    setLoading(true);
    setDownloadLink("");

    try {
      const res = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await res.json();
      if (data.downloadUrl) {
        setDownloadLink(data.downloadUrl);
      } else {
        alert(data.error || "Failed to get download link");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(0,0,0,0.2) 2px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <main className="relative z-10 flex flex-col items-center justify-start min-h-screen ">
        {/* Header */}
        <div className="text-center mb-4 transform hover:scale-105 transition-transform duration-300">
          <p className="text-gray-600 text-2xl md:text-4xl font-medium">
            Next-gen Instagram media downloader
          </p>
        </div>

        {/* Tabs */}
        <div className="w-full max-w-4xl mb-8">
          <div className="flex flex-wrap justify-center gap-3 p-4">
            {tabs.map((tab) => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setUrl("");
                    setDownloadLink("");
                  }}
                  className={`group relative px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.gradient} text-white shadow-lg`
                      : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <TabIcon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full max-w-2xl">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            {/* Heading */}
            <div className="text-center mb-8">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${currentTab?.gradient} mb-4 shadow-lg`}
              >
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {currentTab?.heading}
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto"></div>
            </div>

            {/* Input */}
            <div className="space-y-6">
              <div className="relative group">
                <input
                  type="text"
                  placeholder={currentTab?.placeholder}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="w-full px-6 py-4 pr-12 bg-gray-50 border border-gray-300 rounded-2xl text-gray-800 placeholder-gray-500 placeholder:text-sm sm:placeholder:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
                {url && (
                  <button
                    onClick={() => setUrl("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-red-500 transition-colors duration-200"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>

              {/* Search Button */}
              <button
                onClick={handleDownload}
                disabled={loading || !url}
                className={`w-full py-4 px-6 rounded-2xl font-bold text-white transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none ${
                  loading
                    ? "bg-gradient-to-r from-gray-400 to-gray-500"
                    : `bg-gradient-to-r ${currentTab?.gradient} shadow-lg hover:shadow-xl`
                }`}
              >
                <div className="flex items-center justify-center gap-3">
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-5 h-5" />
                      <span>Search & Extract</span>
                    </>
                  )}
                </div>
              </button>
            </div>

            {/* Download Section */}
            {downloadLink && (
              <div className="mt-8 space-y-6 animate-fadeIn">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

                {/* Preview Section */}
                <div className="flex justify-center">
                  {downloadLink.includes(".mp4") ? (
                    <video
                      controls
                      className="rounded-2xl shadow-lg max-w-sm w-full border border-gray-200"
                      src={downloadLink}
                    />
                  ) : (
                    <div className="relative group">
                      <img
                        src={downloadLink}
                        alt="Preview"
                        className="rounded-2xl shadow-lg max-w-sm w-full border border-gray-200 transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                </div>

                <div className="flex justify-center">
                  <div className="flex justify-center">
                    <button
                      onClick={() => {
                        const form = document.createElement("form");
                        form.method = "POST";
                        form.action = "/api/force-download";
                        form.style.display = "none";

                        const input = document.createElement("input");
                        input.name = "url";
                        input.value = downloadLink;
                        form.appendChild(input);

                        document.body.appendChild(form);
                        form.submit();
                        document.body.removeChild(form);
                      }}
                      className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Download className="w-6 h-6 group-hover:animate-bounce" />
                      <span>Download Now</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center max-w-2xl">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg">
            <p className="text-gray-600 text-sm leading-relaxed">
              🚀 Download Instagram content with style –{" "}
              <span className="font-semibold text-purple-600">
                No login required
              </span>
            </p>
            <div className="flex justify-center gap-4 mt-4">
              {["🎬", "📸", "👤", "📱", "⭐"].map((emoji, i) => (
                <span
                  key={i}
                  className="text-2xl animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </main>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
