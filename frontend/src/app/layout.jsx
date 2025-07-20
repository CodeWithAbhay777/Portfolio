import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavbarUsage } from "@/components/NavbarUsage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Abhay Awasthi : Fullstack Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-min-screen relative bg-black w-full">
          <NavbarUsage />
          {children}
        </div>
        
      </body>
    </html>
  );
}
