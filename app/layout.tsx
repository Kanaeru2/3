// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/app/components/Navbar/index.js"; // Pastikan path ini sesuai
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/app/components/Footer/index.js";

import Menus from "@/app/components/Menu/index.js"; // Perbaiki jalur impor (hapus spasi)

export const metadata: Metadata = {
  title: "KanaeruMyAnimeList",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex flex-grow">
            <main className="flex-grow p-4">{children}</main>
            <Menus />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
