import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suganthi S | Full Stack Developer",
  description:
    "Full Stack Developer with 6+ years of experience building web applications using React.js, Next.js, Node.js, WordPress, and AWS.",

  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "WordPress Developer",
    "AWS Developer",
  ],

  authors: [
    {
      name: "Suganthi S",
    },
  ],

  openGraph: {
    title: "Suganthi S | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, WordPress and AWS.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
