/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        <header className="flex items-center px-8 backdrop-blur-xl bg-transparent  justify-between py-2 border-b fixed w-full top-0 bg-white">
          <div className="flex items-center ">
            <img width="36px" src="/logo.png" alt="logo" />
            <h1 className="text-xl font-bold">0xhardman</h1>
          </div>
          <ul className="flex items-center gap-4">
            <li>Intro</li>
            <li>Exp</li>
            <li>Blog</li>
          </ul>
          <div className="flex items-center gap-4">
            <button>Connect</button>
          </div>
        </header>
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html >
  );
}
