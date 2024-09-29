"use client";
import { useState } from "react";

export default function Navbar() {
  const handleHome = () => {
    window.location.href = "/home";
  };

  const handleChat = () => {
    window.location.href = "/chat";
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white fixed z-50 w-full top-0 p-4 mb-4 border-b-2 border-b-[var(--b)] flex justify-between outfit items-center">
      <div className="text-3xl font-bold">
        <h1
          className="tracking-tight cursor-pointer text-[var(--b)]"
          style={{
            WebkitBackgroundClip: "text",
            // WebkitTextFillColor: "transparent",
          }}
          onClick={handleHome}
        >
          Trippo<a className="font-medium text-[var(--gr)]">.ai</a>
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
          <li
            className="px-6 py-2 cursor-pointer border-[1px] bg-white text-[var(--g)] hover:bg-[var(--g)] hover:text-white border-gray-300 rounded-l-full"
            onClick={handleChat}
          >
            Chat
          </li>
          <li className="px-6 py-2 cursor-pointer border-[1px] bg-white text-[var(--g)] hover:bg-[var(--g)] hover:text-white border-gray-300">
            Pricing
          </li>
          <li className="px-6 py-2 cursor-pointer border-[1px] bg-white text-[var(--g)] hover:bg-[var(--g)] hover:text-white border-gray-300">
            Activities
          </li>
          <li className="px-6 py-2 cursor-pointer border-[1px] bg-white text-[var(--g)] hover:bg-[var(--g)] hover:text-white border-gray-300">
            Rentals
          </li>
          <li className="px-6 py-2 cursor-pointer border-[1px] bg-white text-[var(--g)] hover:bg-[var(--g)] hover:text-white border-gray-300 rounded-r-full">
            Log in
          </li>
        </ul>
      </div>
    </div>
  );
}
