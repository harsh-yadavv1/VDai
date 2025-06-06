"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";

// Pinterest SVG icon
function PinterestIcon({ size = 48, color = "#4A5565" }) {
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

export default function Pinterest() {
  return (
    <div className="flex flex-col items-center justify-center p-6">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
          Pinterest Downloader
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Download Pinterest videos, pins, and boards in high quality
        </p>
      </div>

      {/* Coming Soon Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-8 w-full max-w-2xl">
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center">
              <PinterestIcon size={32} color="#E60023" />
            </div>
          </div>

          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Coming Soon! 🚀
          </h2>

          <div className="space-y-4 text-center">
            <p className="text-gray-600">
              We&apos;re working hard to bring you the best Pinterest content
              downloader. Stay tuned for these amazing features:
            </p>

            <ul className="space-y-2 text-left mx-auto max-w-md">
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
                Download Pinterest videos in HD quality
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                Save entire Pinterest boards with one click
              </li>
              <li className="flex items-center text-gray-600">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Download Pinterest pins in original quality
              </li>
            </ul>
          </div>

          {/* Preview Input */}
          <div className="w-full mt-8 space-y-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Paste Pinterest URL here"
                disabled
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 text-gray-400 cursor-not-allowed"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                <AlertCircle className="h-5 w-5 text-gray-400" />
              </div>
            </div>

            <button
              disabled
              className="w-full px-4 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg opacity-50 cursor-not-allowed font-medium"
            >
              Download (Coming Soon)
            </button>
          </div>

          {/* Notification Sign Up */}
          <div className="mt-8 p-4 bg-red-50 rounded-lg text-center">
            <p className="text-gray-600 text-sm">
              Want to be notified when we launch? Follow us on social media or
              join our waitlist!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
