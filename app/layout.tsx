import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moto Charm — Custom Stickers, Keyrings & Smart Watches",
  description:
    "Moto Charm crafts premium custom stickers, personalized keyrings, and sells smart watches. Design your own or shop our collection.",
  keywords: ["custom stickers", "custom keyrings", "smart watches", "moto charm", "personalized gifts"],
  openGraph: {
    title: "Moto Charm — Custom Stickers, Keyrings & Smart Watches",
    description: "Premium custom stickers, personalized keyrings, and smart watches.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
