/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "0xhardman Blog",
  description: "0xhardman Blog",
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
        <header className="flex items-center px-8 backdrop-blur-xl bg-transparent  justify-between py-6 border-b fixed w-full top-0 bg-white">
          <div className="flex items-center ">
            <img width="54px" className="" src="/logo.png" alt="logo" />
            <h1 className="text-xl font-bold">0xHardman</h1>
          </div>
          <ul className="flex items-center gap-8 text-gray-900 font-semibold">
            <li>Intro</li>
            <li>Experience</li>
            <li>Articles</li>
          </ul>
          <div className="flex items-center gap-4">
            <button>Connect</button>
          </div>
        </header>
        {children}
        <footer className="flex flex-col items-center justify-center w-full py-4 gap-2 text-gray-600 text-sm">
          <div>
            <p>Copyright © 2024 0xhardman</p>
          </div>
          <ul className="flex items-center gap-4">
            <li>
              <Link target="_blank" href="https://github.com/0xhardman">
                <Github className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://www.linkedin.com/in/0xhardman/">
                <Linkedin className="w-4 h-4" />
              </Link>
            </li>
            <li>
              <Link target="_blank" href="https://x.com/0xhardman">
                <Twitter className="w-4 h-4" />
              </Link>
            </li>
          </ul>
        </footer>
      </body>
    </html >
  );
}
