import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DesktopIcons from '@/components/DesktopIcons';
import Taskbar from '@/components/Taskbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "tomo-yoshi",
  description: "Tomo Yoshi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="min-h-screen bg-[#008080] p-4">
            {/* Desktop Icons */}
            <DesktopIcons />

            {children}

            <Taskbar />
          </div>
        </body>
      </html>
    </>
  );
}
