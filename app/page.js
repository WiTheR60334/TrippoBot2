import ChatbotForm from "@/components/ChatbotForm";
import HomePage from "@/components/HomePage";
import ChatBot from "@/components/ChatBot";
import Navbar from "@/components/Navbar";
import WelcomeTips from "@/components/WelcomeTips";
import Profile from "@/components/Profile";
import Footer from "@/components/footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <HomePage /> */}
      <WelcomeTips />
      <Profile />
      <Footer />
    </>
  );
}
