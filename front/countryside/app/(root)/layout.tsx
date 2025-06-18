import Header from "@/lib/components/shared/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: '[100% Countryside] Explore the Japanese Countryside – Villages, Nature & Rural Japan',
  description: "Explore the beauty of the Japanese countryside – peaceful villages, lush mountains, and hidden hot springs across Japan. Your complete countryside Japan travel guide starts here.",
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
