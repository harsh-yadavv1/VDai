"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How to download Instagram reels?",
    answer:
      "Simply paste the Instagram reel URL into our downloader, click the download button, and save your video. No registration or software installation required.",
  },
  {
    question: "Is it free to download Instagram reels?",
    answer:
      "Yes, VDBYai is completely free to use. You can download unlimited Instagram reels without any cost or hidden charges.",
  },
  {
    question: "Do I need to sign in to download reels?",
    answer:
      "No, you don't need to sign in or create an account. Our Instagram reel downloader works instantly without any registration.",
  },
  {
    question: "What quality are the downloaded reels?",
    answer:
      "We download Instagram reels in their original HD quality. The video quality depends on the original upload, but we ensure you get the best available version.",
  },
  {
    question: "Are there watermarks on downloaded reels?",
    answer:
      "No, all videos are downloaded without any watermarks. You get clean, original quality videos ready to use.",
  },
  {
    question: "Is it legal to download Instagram reels?",
    answer:
      "Our tool is for personal use only. Please respect copyright laws and Instagram's terms of service. Only download content you have permission to use.",
  },
  {
    question: "What devices are supported?",
    answer:
      "VDBYai works on all devices - desktop computers, laptops, tablets, and mobile phones. Our website is fully responsive and optimized for all screen sizes.",
  },
  {
    question: "How fast is the download process?",
    answer:
      "Downloads are typically completed within seconds, depending on your internet connection and the video size. We use optimized servers for the fastest possible downloads.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left focus:outline-none focus:ring-2 focus:ring-purple-500"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  <span className="ml-6 flex-shrink-0">
                    <svg
                      className={`h-6 w-6 transform ${
                        openIndex === index ? "rotate-180" : ""
                      } transition-transform duration-200`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </div>
              </button>
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 py-4"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
