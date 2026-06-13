import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Brew & Co — Specialty Coffee in Brooklyn",
  description: "A cosy neighbourhood coffee shop in Brooklyn specialising in specialty coffee, fresh pastries, and light lunches.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--color-cream)" }}>
        <Navigation />
        <main style={{ flex: 1, paddingTop: "var(--nav-height)" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
