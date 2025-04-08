import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WebLayout from "@/layout/Index";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CanoPedia",
  description: "Kredit Air dan Konservasi",
  icons: {
    icon: "/assets/logo/canopedia.png",
    shortcut: "/assets/logo/canopedia.png",
    apple: "/assets/logo/canopedia.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/assets/logo/canopedia.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WebLayout>{children}</WebLayout>
      </body>
    </html>
  );
}
