import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
  return (
    <html lang="en" style={{ height: "100%", margin: "0" }}>
      {/* <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap');
        </style>
      </head> */}
      <body className={`${geistSans.variable} ${outfit.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
