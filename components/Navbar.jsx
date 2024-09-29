"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white px-6 pt-6 flex justify-between outfit items-center">
      <div className="text-3xl font-black">
        <h1
          className="bg-clip-text tracking-tight text-transparent bg-gradient-to-r from-[var(--b)] to-[var(--lb)] reflect-gradient"
          style={{
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Trippo.ai
        </h1>
      </div>
      <div className="flex items-center md:hidden">
        <button onClick={toggleMenu} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <div
        className={`absolute top-16 right-0 bg-white w-full md:flex md:items-center md:static md:w-auto ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col md:flex-row p-0 md:p-0">
          <li className="px-6 py-2 border-[1px] bg-white text-[var(--g)] hover:bg-[var(--g)] hover:text-white border-gray-300 rounded-l-full">
            Flights
          </li>
          <li className="px-6 py-2 border-[1px] bg-white text-[var(--g)] hover:bg-[var(--g)] hover:text-white border-gray-300">
            Hotels
          </li>
          <li className="px-6 py-2 border-[1px] bg-white text-[var(--g)] hover:bg-[var(--g)] hover:text-white border-gray-300">
            Activities
          </li>
          <li className="px-6 py-2 border-[1px] bg-white text-[var(--g)] hover:bg-[var(--g)] hover:text-white border-gray-300">
            Rentals
          </li>
          <li className="px-6 py-2 border-[1px] bg-white text-[var(--g)] hover:bg-[var(--g)] hover:text-white border-gray-300 rounded-r-full">
            Profile
          </li>
        </ul>
      </div>
    </div>
  );
}
