// app/layout.tsx
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import GlobalContextProvider from "@/context/context";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { GlobalLoader } from "@/components/shared/Load";

// ✅ define a clear variable name
const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HomeView Dubai",
  description: "Luxury Homes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.variable} antialiased`}>
      {/* <body> */}
        <GlobalContextProvider>
          <GlobalLoader />
          <Navbar />
          {/* <div className="h-screen"></div> */}
          {children}
          <Footer />
        </GlobalContextProvider>
      </body>
    </html>
  );
}
