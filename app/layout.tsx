import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";
import Navbar from "@/components/Navbar";
import SplashCursor from "@/components/SplashCursor";
import Providers from "./providers";

/* ✅ Initialize fonts */
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Allen's Portfolio",
  description: "Modern developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased animated-bg grain bg-grid transition-colors duration-300`}
      >
        <Providers>
        <SplashCursor/>
        <Navbar />
        {children}
        </Providers>
      </body>
    </html>
  );
}
