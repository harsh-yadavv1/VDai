import { Metadata } from "next";
import Pinterest from "../components/Pintrest";

export const metadata: Metadata = {
  title: "Pinterest Downloader - Coming Soon | VDBYai",
  description:
    "Download Pinterest pins and boards in high resolution. Coming soon to VDBYai - your trusted content downloader.",
  openGraph: {
    title: "Pinterest Downloader - Coming Soon | VDBYai",
    description: "Download Pinterest content in high resolution. Coming soon!",
  },
};

export default function PinterestPage() {
  return <Pinterest />;
}
