import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import DesktopIcon from '@/components/DesktopIcon';
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
            <div className="grid grid-cols-3 gap-2 w-2/3 md:grid-cols-1 md:w-18">
              <DesktopIcon
                icon={FaGithub}
                label="GitHub"
                href="https://github.com/tomo-yoshi"
              />
              <DesktopIcon
                icon={FaLinkedin}
                label="LinkedIn"
                href="https://linkedin.com/in/tomohiro/"
              />
              <DesktopIcon
                icon={FaXTwitter}
                label="X"
                href="https://x.com/tomoy_jp"
              />
            </div>

            {children}

            <Taskbar />
          </div>
        </body>
      </html>
    </>
  );
}
