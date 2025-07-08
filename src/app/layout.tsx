import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {SpeedInsights} from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "s4r14k - Portfolio",
  description: "Personal portfolio showcasing my projects and skills",
  authors: [{ name: "s4r14k" }],
  keywords: ["portfolio", "developer", "software engineer", "projects", "skills"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="bg-white dark:bg-black text-black dark:text-white">
        {children}
      <SpeedInsights/>
      </body>
    </html>
  );
}
