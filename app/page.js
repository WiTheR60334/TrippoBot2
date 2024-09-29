import ChatbotForm from "@/components/ChatbotForm";
import HomePage from "@/components/HomePage";
import ChatBot from "@/components/ChatBot";
import Navbar from "@/components/Navbar";
import WelcomeTips from "@/components/WelcomeTips";
import Profile from "@/components/Profile";
import Pricing from "@/components/Pricing";
import Footer from "@/components/footer";
import Image from "next/image";
import Feedback from "@/components/feedback"; // Adjust the path based on your structure


export default function Home() {
  return (
    <>
      {/* <HomePage /> */}
      <WelcomeTips />
      {/* <Profile /> */}
      <Pricing />
      <div style={{marginTop: "5rem"}}>
      <Feedback />
      </div>
      <div style={{marginTop: "10rem", borderTop: "1px solid #000"}}>
        <Footer />
      </div>
    </>
  );
}
