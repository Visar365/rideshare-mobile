import "./globals.css";
import type { Metadata } from "next";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "RideShare",
  description: "RideShare me Neon dhe Vercel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq">
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
