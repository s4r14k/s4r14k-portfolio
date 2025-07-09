import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "s4r14k - Portfolio",
  description: "Personal portfolio showcasing my projects and skills",
  authors: [{ name: "s4r14k" }],
  keywords: ["portfolio", "developer", "software engineer", "projects", "skills"],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png' }
    ],
    apple: '/logo.png',
    shortcut: '/logo.png'
  },
};
