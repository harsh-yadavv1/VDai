import Link from "next/link";
import { Instagram, Youtube, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              VDBYai
            </h3>
            <p className="text-gray-600 text-sm">
              Download Instagram content easily and securely. Free, fast, and no
              watermarks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/instagram"
                  className="text-gray-600 hover:text-purple-600 text-sm"
                >
                  Instagram Downloader
                </Link>
              </li>
              <li>
                <Link
                  href="/pinterest"
                  className="text-gray-600 hover:text-purple-600 text-sm"
                >
                  Pinterest Downloader
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 hover:text-purple-600 text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 hover:text-purple-600 text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-gray-900">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/harsh_yadav.dev?igsh=MXRoZ3I3ZHMwYzV3aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/@harshyadav.codecraft?si=CFoW1Y-f7Xhek9HL"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                <Youtube className="w-6 h-6" strokeWidth={1.55} />
              </a>
              <a
                href="https://x.com/ContactHarsh067?t=PbCeV-StzJeLuFVqxE_kkg&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600" suppressHydrationWarning>
              © {currentYear} VDBYai. All rights reserved.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-sm text-gray-600 flex items-center">
                Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by
                VDBYai
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
