import ChatbotForm from "@/components/ChatbotForm";
import HomePage from "@/components/HomePage/HomePage";
import ChatBot from "@/components/ChatBot/ChatBot";
import Navbar from "@/components/Navbar/Navbar";
import WelcomeTips from "@/components/WelcomeTips/WelcomeTips";
import Profile from "@/components/Profile/Profile";
import Pricing from "@/components/Pricing/Pricing";
import Footer from "@/components/footer/footer";
import Whychooseus from "@/components/Whychooseus/Whychooseus";
import TripGuideSlider from "@/components/TripGuideSlider/TripGuideSlider";
import Image from "next/image";
import Feedback from "@/components/feedback/feedback";


export default function Home() {
  return (
    <>
      <div style={{marginTop: "2rem"}}>
      <HomePage />
      </div>
      <Whychooseus />
      <TripGuideSlider />
      <div id="pricing">
      <Pricing />
      </div>
      {/* <div style={{marginTop: "15rem"}}>
      <Feedback />
      </div> */}
    </>
  );
}
