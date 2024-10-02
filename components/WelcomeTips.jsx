"use client"; // Ensure the component is client-side
import { useState, useEffect } from "react";
import Image from 'next/image';
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import HomePage from "./HomePage";
// import { useRouter } from "next/router"; // Uncomment this if you're using useRouter



const steps = [
  {
    title: "Plan your Trip Perfectly using AI",
    subtitle: "Start your journey today",
    bgImage: `https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg?alt=media&token=078a7ae6-82ac-4568-98c0-b1531fd4554b`,
  },
  {
    title: "Relax by the Beach",
    subtitle: "Sun, sand, and serenity await you",
    bgImage: `https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/vacation.jpg?alt=media&token=e47e6ed8-c079-4bec-bfd0-83e0fc90ad8a`,
  },
  {
    title: "Find the Best Destinations",
    subtitle: "Explore hidden gems across the globe",
    bgImage: `https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/simon-berger-twukN12EN7c-unsplash.jpg?alt=media&token=4c8d289a-1074-4f68-88ab-02461e32997c`,
  },
  {
    title: "Get AI-Driven Recommendations",
    subtitle: "Personalized suggestions just for you",
    bgImage: `https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/andrew-neel-1-29wyvvLJA-unsplash.jpg?alt=media&token=9002cc60-bcc5-41a3-b870-3f25f004cd69`,
  },
  {
    title: "Book Easily and Securely",
    subtitle: "Seamless booking with a few clicks",
    bgImage: `https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/jake-blucker-tMzCrBkM99Y-unsplash.jpg?alt=media&token=0154fe66-3bbb-4148-8768-37650d9ccadc`,
  },
];

export default function WelcomeTips() {
  const [currentStep, setCurrentStep] = useState(0);
  // const router = useRouter(); // Initialize useRouter to control navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToHomePage = () => {
    window.location.href = "/home";
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) =>
      prevStep === 0 ? steps.length - 1 : prevStep - 1
    );
  };

  return (
    <>
      <div className="bg-white max-h-screen pt-9 outfit">
        <div className="h-screen">
        <div
            className={`relative h-[89%] rounded-3xl m-6 overflow-hidden bg-cover transition-opacity duration-700 ease-in-out`}
            style={{ backgroundSize: 'cover',
            backgroundPosition: 'center', }}
          >
        <Image
          src={steps[currentStep].bgImage}
          alt={steps[currentStep].title}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          priority
        />
        {/* </div> */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            <div className="text-white p-[10%] absolute top-0 left-0 right-0 z-10">
              <div>
                <div className="text-6xl font-bold">
                  {steps[currentStep].title}
                </div>
                <div className="text-3xl pt-4 font-medium">
                  {steps[currentStep].subtitle}
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-[10%] flex justify-between items-center z-10">
              <div className="flex">
                <button
                  className="bg-black bg-opacity-20 border-[1px] hover:bg-white hover:text-black backdrop-blur-lg text-white p-4 rounded-full mx-2 transition-all duration-300"
                  onClick={handlePrev}
                >
                  <IoArrowBackOutline />
                </button>

                <button
                  className="bg-black bg-opacity-20 border-[1px] hover:bg-white hover:text-black backdrop-blur-lg text-white p-4 rounded-full mx-2 transition-all duration-300"
                  onClick={handleNext}
                >
                  <IoArrowForwardOutline />
                </button>
              </div>

              <button
                className="bg-black bg-opacity-20 border-[1px] hover:bg-white hover:text-black backdrop-blur-lg text-white px-4 py-2 rounded-full transition-all duration-300"
                onClick={goToHomePage} // Trigger navigation to the Home page
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
      <HomePage />
    </>
  );
}
