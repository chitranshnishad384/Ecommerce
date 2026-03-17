import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CartProvider } from "@/context/CartContext";
import BackgroundElements from "@/components/BackgroundElements/BackgroundElements";

export const metadata: Metadata = {
  title: "BROOKUS | Luxury Electronics & Leather Goods",
  description: "Modern, minimal, and luxurious e-commerce for premium electronics and handcrafted leather bags.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CartProvider>
          <div className="bg-pattern" />
          <div className="bg-dots" />
          <div className="bg-noise" />
          <BackgroundElements />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
