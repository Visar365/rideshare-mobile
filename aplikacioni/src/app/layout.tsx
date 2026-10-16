import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";
import Pwa from "@/components/Pwa";

export const metadata: Metadata = {
  title: "RideShare AAB",
  description: "Udhëtime drejt AAB me listë publike që lexohet edhe offline.",
  manifest: "/manifest.webmanifest",
  appleWebApp: { capable: true, title: "RideShare", statusBarStyle: "default" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq">
      <body><Providers><Pwa />{children}</Providers></body>
    </html>
  );
}
