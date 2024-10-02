"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";

export default function HomePage() {
  const startChat = () => {
    window.location.href = "/chat";
  };

  return (
    <>
      <div className="bg-white outfit py-8">
        <div className="p-8 mesh-home md:p-16 col-span-3 flex flex-col md:flex-row items-center relative">
          <div className="md:justify-left">
            <h5 className="text-2xl md:text-3xl tracking-tight text-[var(--g)] font-medium">
              Discover Trippo
            </h5>
            <h3 className="text-5xl md:text-7xl bg-gradient-to-r from-[var(--lb)] via-[var(--b)] to-[var(--lb)] w-[90%] md:w-[60%] bg-clip-text text-transparent mb-5 font-semibold tracking-tighter">
              Smartest way to travel
            </h3>
            <hr className="my-2" />
            <h4 className="mt-4 text-lg md:text-xl text-gray-600 md:leading-6 leading-5 md:max-w-[70%]">
            TrippoBot is an AI-powered travel assistant that helps users plan trips effortlessly. From destination info to booking suggestions, TrippoBot makes travel planning easy and enjoyable, providing seamless itinerary planning and price comparisons for a stress-free experience.
            </h4>
            {/* <TypeWritter /> */}
            <button
              className="group duration-300 relative inline-flex items-center px-4 py-2 md:mt-4 md:my-0 my-6 md:w-auto w-full text-white font-semibold rounded-full bg-[var(--gr)] border-none hover:border-[1px] hover:border-[var(--gr)] hover:bg-[var(--lg)] hover:text-[var(--gr)]"
              onClick={startChat}
            >
              Try it
            </button>
          </div>
          <div className="md:ml-6">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/trippo-a1603.appspot.com/o/Group.png?alt=media&token=1ce9a646-20a0-4313-a9c9-a79375bfee80"
              alt="Travel Reminders"
              width={500}
              height={500}
              className="rounded-md mb-4"
            />
          </div>
        </div>
        <div className="bg-[var(--g)] mesh-dark min-w-full p-8 md:p-16">
          <h5 className="text-2xl md:text-3xl tracking-tight text-[var(--lb)] font-medium">
            Try very useful
          </h5>
          <h3 className="text-5xl md:text-7xl bg-gradient-to-r from-[var(--lg)] via-[var(--llg)] to-[var(--lg)] w-[90%] md:w-[40%] bg-clip-text text-transparent mb-10 font-semibold tracking-tighter">
            Our AI Toooooooools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 p-0 md:p-6">
            {/* Destination Planner */}
            <div className="bg-[var(--g2)] border-[1px] border-[var(--lg)] p-3 md:p-6 rounded-xl flex flex-col">
              <h3 className="text-2xl md:text-3xl text-[var(--llg)] rounded-md font-medium tracking-tight mb-3">
                Destination Planner
              </h3>
              <div className="my-2 flex justify-center">
              <img
                src={`https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/Destination.png?alt=media&token=d748993f-707a-4efd-94ec-57ce06aa0357`}
                alt="Destination"
                className="w-full h-auto rounded-md"
              />

              </div>
              <p className="text-[var(--llg)] text-md md:text-xl leading-6 p-2">
                Get popular attractions, local culture, cuisine, and events
                happening during the user&apos;s travel dates.
              </p>
            </div>

            {/* Itinerary Planner */}
            <div className="bg-[var(--g2)] border-[1px] border-[var(--lg)] p-3 md:p-6 rounded-xl flex flex-col">
              <h3 className="text-2xl md:text-3xl text-[var(--llg)] rounded-md font-medium tracking-tight mb-3">
                Itinerary Planner
              </h3>
              <div className="flex my-2 justify-center">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/Itenary.jpg?alt=media&token=6fd86271-1f62-401a-a86c-fc89a3926184`}
                  alt="Itinerary"
                  className="w-full h-auto rounded-md"
                />
              </div>
              <p className="text-[var(--llg)] text-md md:text-xl leading-6 p-2">
                Provide users with personalized travel itineraries, activity
                suggestions, and restaurant recommendations.
              </p>
            </div>

            {/* Booking Assistant */}
            <div className="bg-[var(--g2)] border-[1px] border-[var(--lg)] p-3 md:p-6 rounded-xl bg-opacity-90 flex flex-col">
              <h3 className="text-2xl md:text-3xl text-[var(--llg)] rounded-md font-medium tracking-tight mb-3">
                Booking Assistant
              </h3>
              <div className="flex my-2 justify-center">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/Booking.png?alt=media&token=ca512010-a15e-4bcb-b5ff-313f1d9cea7e`}
                  alt="Booking"
                  className="w-full h-auto rounded-md"
                />
              </div>
              <p className="text-[var(--llg)] text-md md:text-xl leading-6 p-2">
                Help users compare flight, hotel, and transportation options to
                ease the booking process.
              </p>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-16 col-span-3 rounded-3xl flex flex-col relative">
          <div className="justify-left pb-10">
            <h5 className="text-2xl md:text-3xl tracking-tight text-[var(--g)] font-medium">
              Discover Trippo
            </h5>

            <h3 className="text-5xl md:text-7xl bg-gradient-to-r from-[var(--lb)] via-[var(--b)] to-[var(--lb)] w-[60%] bg-clip-text text-transparent mb-5 font-semibold tracking-tighter">
              Other Support
            </h3>
            <hr></hr>
            <h4 className="mt-4 md:text-xl text-md text-[var(--g)] md:leading-6 leading-4 max-w-full md:max-w-[70%]">
              Vacay redefines travel planning with precision and personalization
              at its core. Experience bespoke itineraries crafted to your
              preferences, powered by advanced semantic search.
            </h4>
          </div>
          <div className="flex flex-col space-y-4">
            {/* Travel Reminders & Alerts */}
            <div className="bg-gray-100 p-6 md:p-8 rounded-xl flex-row md:flex items-center">
              <div className="flex justify-center md:mr-4 md:m-0 m-4">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/Group%203.png?alt=media&token=8fc66b19-0f39-4981-8511-4829c916366c`}
                  alt="Travel Reminders"
                  className="h-[100px] rounded-md"
                />
              </div>
              <div>
                <h3 className="md:text-3xl text-2xl text-center md:text-left text-[var(--gr)] tracking-tight font-semibold mb-2">
                  Travel Reminders & Alerts
                </h3>
                <p className="text-[var(--g)] text-center md:text-left text-md leading-5 md:text-xl">
                  Send important reminders such as flight check-in times, hotel
                  check-ins, and local events.
                </p>
              </div>
            </div>

            {/* FAQs & Support */}
            <div className="bg-gray-100 p-6 md:p-8 rounded-xl flex-row md:flex md:flex-inline items-center">
              <div className="flex justify-center md:mr-4 md:m-0 m-4">
                <img
                  src={`https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/Group%205.png?alt=media&token=390d8e4a-281b-49cd-ad43-3a2388577cae`}
                  alt="FAQs & Support"
                  className="h-[90px] rounded-md"
                />
              </div>
              <div>
                <h3 className="md:text-3xl text-2xl text-center md:text-left text-[var(--gr)] tracking-tight font-semibold mb-2">
                  FAQs & Support
                </h3>
                <p className="text-[var(--g)] text-center md:text-left text-md leading-5 md:text-xl">
                  Answer common travel-related questions and provide emergency
                  contact information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



