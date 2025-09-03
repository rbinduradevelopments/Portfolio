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
  title: "Redeemed Bindura — Portfolio",
  description: "Showcasing my projects in web, game, and software development.",
  icons: {
    icon: "/rbfav.png",            // your file in /public
    apple: "/rbfav.png",           // iOS home screen
    shortcut: "/rbfav.png",        // legacy shortcut
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Force browsers to pick up the new icon (cache-bust with ?v=2) */}
        <link rel="icon" href="/rbfav.png?v=2" />
        <link rel="apple-touch-icon" href="/rbfav.png?v=2" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
