import type { Metadata } from "next";
import "./colors.css";
import "./globals.css";
import { inconsolata } from "./_fonts/fonts";

export const metadata: Metadata = {
  title: "le fog",
  description: "the website for le fog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inconsolata.variable} antialiased`}>{children}</body>
    </html>
  );
}
