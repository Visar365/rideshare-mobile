import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RideShare",
  description: "RideShare me Neon dhe Vercel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}
