import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar copy";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lynk247 | Unlock insights boost productivity",
  description: "Lynk247",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster  position="top-center" />
        <Navbar />

        <div className="min-h-screen py-20    md:py-20 lg:py-30 ">
          {children}

          <ChatBot />
        </div>

        <Footer />
      </body>
    </html>
  );
}
