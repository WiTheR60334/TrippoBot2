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
              src="/group.svg"
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
                  src="https://private-user-images.githubusercontent.com/115364885/371841678-30d75a2d-5ad2-43ce-b75a-8139e76dfbb0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc2MDI3ODQsIm5iZiI6MTcyNzYwMjQ4NCwicGF0aCI6Ii8xMTUzNjQ4ODUvMzcxODQxNjc4LTMwZDc1YTJkLTVhZDItNDNjZS1iNzVhLTgxMzllNzZkZmJiMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkyOVQwOTM0NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1mMmNiOTY5MDZjNjc4ZGY0Y2U5YWE0NDM5NDM3MDUyYjY0NDNkNzgxZWUyMDM1N2NjNGJlOWU5NDQyYTFmMTQ4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.hPFBn9oUPUwgwWhHjnLC6MSdn7xxq8ssgPQKDZto0eo"
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
                  src="https://private-user-images.githubusercontent.com/115364885/371841669-cf007ef1-34fd-4d52-a653-ef2bba50529b.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc2MDI3ODQsIm5iZiI6MTcyNzYwMjQ4NCwicGF0aCI6Ii8xMTUzNjQ4ODUvMzcxODQxNjY5LWNmMDA3ZWYxLTM0ZmQtNGQ1Mi1hNjUzLWVmMmJiYTUwNTI5Yi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkyOVQwOTM0NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MTFjYjU1YmE1ZmE0NzIwMTFkMGJlNDUxYmFhNDE1YzJhMzY0ZmZlYWE0MDgwNGJjYjU2MGYzNTcyZGEzMTRhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.G_4rY6m4vbg8tQThy78GQ-viivE7L_WLXmeIp0NeGW4"
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
                  src="https://private-user-images.githubusercontent.com/115364885/371841666-6dce4309-5b9e-4c94-ae8c-bf113398fb4c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mjc2MDI3ODQsIm5iZiI6MTcyNzYwMjQ4NCwicGF0aCI6Ii8xMTUzNjQ4ODUvMzcxODQxNjY2LTZkY2U0MzA5LTViOWUtNGM5NC1hZThjLWJmMTEzMzk4ZmI0Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwOTI5JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDkyOVQwOTM0NDRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zZTk0NjJkYTg3Mjc4YjE5MDk3NGVlYmEwZTk4MjVlYTE2N2FiOTBhOGM4MTcxNmRkNGZmMDQzN2FmOWM4NTI3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.VFZGJt4tncT1z5XY4mrQRtcwwCwUb_9nOahl5d7AvU4"
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
                  src="/Group 3.svg"
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
                  src="/Group 5.svg"
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
