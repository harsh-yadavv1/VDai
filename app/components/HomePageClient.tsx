"use client";

import Link from "next/link";
import {
  Instagram,
  CheckCircle,
  Loader2,
  Sparkles,
  Zap,
  Star,
} from "lucide-react";

// Pinterest SVG icon
function PinterestIcon({
  size = 48,
  color = "#4A5565",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 50 50"
    >
      <circle
        cx="25"
        cy="25"
        r="22"
        fill="none"
        stroke={color}
        strokeWidth="4"
      />
      <path
        fill={color}
        transform="scale(1.1) translate(-2.5 -2.5)"
        d="M18.896484 45.097656C19.75673 43.659418 20.867347 41.60359 21.308594 39.90625C21.570728 38.899887 22.648438 34.794922 22.648438 34.794922C23.348841 36.132057 25.395277 37.263672 27.574219 37.263672C34.058123 37.263672 38.732422 31.300682 38.732422 23.890625C38.732422 16.78653 32.935409 11.472656 25.476562 11.472656C16.196831 11.472656 11.271484 17.700825 11.271484 24.482422C11.271484 27.636307 12.94892 31.562193 15.634766 32.8125C16.041611 33.001865 16.260073 32.919834 16.353516 32.525391C16.425459 32.226044 16.788267 30.766792 16.951172 30.087891C17.003269 29.871239 16.978043 29.68405 16.802734 29.470703C15.913793 28.392399 15.201172 26.4118 15.201172 24.564453C15.201172 19.822048 18.791452 15.232422 24.908203 15.232422C30.18976 15.232422 33.888672 18.832872 33.888672 23.980469C33.888672 29.796219 30.95207 33.826172 27.130859 33.826172C25.020554 33.826172 23.440361 32.080359 23.947266 29.939453C24.555054 27.38426 25.728516 24.626944 25.728516 22.78125C25.728516 21.130713 24.842754 19.753906 23.007812 19.753906C20.850369 19.753906 19.117188 21.984457 19.117188 24.974609C19.117187 26.877359 19.761719 28.166016 19.761719 28.166016C19.761719 28.166016 17.630543 37.176514 17.240234 38.853516C16.849091 40.52931 16.953851 42.786365 17.115234 44.466797C17.663 44.704 18.27036 44.91988 18.896484 45.097656Z"
      />
    </svg>
  );
}

export default function HomePageClient() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-16 relative pt-8">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-60"></div>
        </div>

        <div className="relative mb-8">
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6">
            VDBYai
          </h2>
          <div className="absolute -top-2 right-0 md:right-4">
            <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 animate-pulse" />
          </div>
          <div className="absolute -bottom-2 left-0 md:left-4">
            <Zap className="w-5 h-5 md:w-6 md:h-6 text-purple-500 animate-bounce" />
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 mb-8 font-medium max-w-2xl mx-auto leading-relaxed">
          Download content from your favorite social platforms with
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
            {" "}
            lightning speed
          </span>
        </p>

        <div className="flex justify-center gap-4 mb-8">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-6 h-6 text-yellow-400 fill-current animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
        {/* Instagram Card */}
        <Link href="/instagram" className="block">
          <div className="group relative cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 blur-sm group-hover:blur-none"></div>
            <div className="relative p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="p-6 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-3xl shadow-lg">
                    <Instagram className="text-white" size={40} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Instagram Downloader
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Download Instagram reels, posts, stories, and IGTV videos in
                  ultra-high quality with zero watermarks
                </p>

                <div className="flex flex-wrap gap-3 justify-center mb-6">
                  {[
                    { label: "Reels", color: "from-pink-500 to-rose-500" },
                    { label: "Posts", color: "from-purple-500 to-indigo-500" },
                    { label: "Stories", color: "from-orange-500 to-red-500" },
                    { label: "IGTV", color: "from-blue-500 to-cyan-500" },
                  ].map((item, i) => (
                    <Link
                      key={i}
                      href="/instagram"
                      className={`px-4 py-2 bg-gradient-to-r ${item.color} text-white rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-transform`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <CheckCircle className="w-5 h-5" />
                  <span>100% Free & Fast</span>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Pinterest Card */}
        <div className="group relative opacity-70 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600 rounded-3xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 blur-sm"></div>
          <div className="relative p-8 bg-white rounded-3xl shadow-xl border border-gray-200">
            <div className="flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="p-6 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl shadow-lg">
                  <PinterestIcon size={40} color="white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Loader2 className="w-4 h-4 text-white animate-spin" />
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-4 text-gray-800">
                Pinterest Downloader
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Download Pinterest pins and boards in high resolution (Coming
                Soon)
              </p>

              <div className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full font-medium shadow-lg">
                🚀 Coming Soon
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it Works Section */}
      <div className="mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            How it works
          </h3>
          <p className="text-gray-600 text-lg">Simple, fast, and secure</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              title: "Copy Link",
              description:
                "Copy the link of the Instagram reel you want to download",
              icon: "🔗",
            },
            {
              title: "Paste URL",
              description: "Paste the URL into our downloader",
              icon: "📋",
            },
            {
              title: "Download",
              description: "Click download and save your video in HD quality",
              icon: "⬇️",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
