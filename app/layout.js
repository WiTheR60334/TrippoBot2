import { unstable_noStore as noStore } from 'next/cache';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;


import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/footer";
import {Providers} from "./Providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const outfit = localFont({
  src: "./fonts/Outfit-VariableFont_wght.ttf",
  variable: "--outfit",
  weight: "100 900",
});

export const metadata = {
  title: "Trippo.ai",
  description: "Perfect ChatBot for Travel Planning",
};

export default function RootLayout({ children }) {
  noStore();
  return (
    <html lang="en" style={{ height: "100%", margin: "0" }}>
      <head>
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>

      </head>
      {/* <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        </style>
      </head> */}
      <body className={`${geistSans.variable} ${outfit.variable} antialiased`}>
        <Providers>
        <Navbar />
        {children}
        <div style={{paddingTop: '8rem', backgroundColor: 'rgb(243 244 246)'}}> </div>
        <div style={{borderTop: "1px solid #000"}}>
          <Footer />
        </div>
        </Providers>
      </body>
    </html>
  );
}
