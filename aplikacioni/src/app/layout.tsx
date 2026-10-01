import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RideShare",
  description: "Gjej një udhëtim të përshtatshëm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sq">
      <body>{children}</body>
    </html>
  );
}