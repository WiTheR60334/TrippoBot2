"use client";

import React, { useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  isSameDay,
  addDays,
  isAfter
} from "date-fns";

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  // Date-to-Destination mapping
  const destinations_old = {
    "2023-10-04": "London",
    "2023-10-12": "Tokyo",
    "2023-10-18": "Kyoto",
    "2024-09-28": "Abu Dhabi",
    "2024-09-29": "Osaka",
    "2024-10-29": "Osaka",
  };

  function modifyDestinationNames(destinations) {
    const modifiedDestinations = {};

    for (const [date, name] of Object.entries(destinations)) {
      // Check the length of the name and truncate if necessary
      if (name.length > 10) {
        modifiedDestinations[date] = name.slice(0, 10) + "...";
      } else {
        modifiedDestinations[date] = name;
      }
    }

    return modifiedDestinations;
  }

  const destinations = modifyDestinationNames(destinations_old);

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const today = new Date();

  const dateFormat = "yyyy-MM-dd";
  const rows = [];
  let days = [];
  let day = startDate;
  let formattedDate = "";

  // Calendar generation logic
  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = format(day, dateFormat);
      const cloneDay = day;

      days.push(
        <div
          className={`relative border p-4 h-20 w-full rounded-lg transition-transform duration-300  ${isSameDay(day, today) ? "bg-white text-black" : "bg-white"} ${
            destinations[formattedDate] ? "bg-[var(--lgg)] border-[var(--gr)] text-white" : ""
          }`}
          key={day}
        >
          {/* Date number at the top-left */}
          <div className="absolute top-0 left-0 m-2 text-[var(--lbl)] font-bold text-grey">
            {formattedDate.split("-")[2]}
          </div>
          {/* Destination name at the bottom-left */}
          <div className="absolute bottom-0 left-0 m-2 text-[var(--lbl)] truncate text-xs">
            {destinations[formattedDate] || ""}
          </div>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className="grid grid-cols-7 gap-2" key={day}>
        {days}
      </div>
    );
    days = [];
  }

  // Filter upcoming trips
  const upcomingTrips = Object.keys(destinations).filter((date) => isAfter(new Date(date), today));

  return (
    <div className="min-h-screen p-6 flex bg-gradient-to-r from-gray-100 to-gray-50">
      {/* Left side - User details and summary */}
      <div className="w-1/3 p-6 bg-[var(--lgg1)] rounded-3xl">
        <h2 className="text-3xl font-bold mb-4 text-[var(--bl)]">Welcome, Anna!</h2>
        <p className="mb-4 text-[var(--lbl)]">Today you are in Japan.</p>
        <div className="mb-4">
          <h3 className="font-semibold text-[var(--lbl)]">Email: anna@example.com</h3>
          <h3 className="font-semibold text-[var(--lbl)]">Phone: +123 456 7890</h3>
        </div>

        {/* Destination, Country, and Continent Circular Graphics */}
        <div className="flex justify-between items-center mb-6">
          {/* Destinations */}
          <div className="text-center">
            <div className="relative">
              <svg className="w-20 h-20 transform" viewBox="0 0 36 36">
                <path
                  className="stroke-current text-lg text-gray-150"
                  strokeWidth="4"
                  fill="none"
                  d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="stroke-current text-[var(--gr)]"
                  strokeWidth="4"
                  strokeDasharray="80, 100"
                  fill="none"
                  d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-black">125</span>
              </div>
            </div>
            <span className="text-sm text-[var(--lbl)]">Destinations</span>
          </div>
          {/* Countries */}
          <div className="text-center">
            <div className="relative">
              <svg className="w-20 h-20 transform" viewBox="0 0 36 36">
                <path
                  className="stroke-current text-lg text-gray-150"
                  strokeWidth="4"
                  fill="none"
                  d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="stroke-current text-[var(--gr)]"
                  strokeWidth="4"
                  strokeDasharray="51, 100"
                  fill="none"
                  d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-black ">51</span>
              </div>
            </div>
            <span className="text-sm text-[var(--lbl)]">Countries</span>
          </div>
          {/* Continents */}
          <div className="text-center">
            <div className="relative">
              <svg className="w-20 h-20 transform" viewBox="0 0 36 36">
                <path
                  className="stroke-current text-lg text-gray-150"
                  strokeWidth="4"
                  fill="none"
                  d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="stroke-current text-[var(--gr)]"
                  strokeWidth="4"
                  strokeDasharray="4, 100"
                  fill="none"
                  d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-bold text-black">4</span>
              </div>
            </div>
            <span className="text-sm text-[var(--lbl)]">Continents</span>
          </div>
        </div>

        {/* Upcoming Trips Section as a Table */}
        <div className="mt-6">
          <h3 className="text-black font-semibold mb-2 text-[var(--bl)]">Upcoming Trips</h3>
          <table className="table-auto w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="px-2 py-2 font-medium text-[var(--bl)]">Date</th>
                <th className="px-8 py-2 font-medium text-[var(--bl)]">Destination</th>
              </tr>
            </thead>
            <tbody>
              {upcomingTrips.map((date) => (
                <tr key={date} className="hover:bg-gray-100 transition-colors duration-200">
                  <td className="px-2 py-1 text-[var(--lbl)]">{date}</td>
                  <td className="px-8 py-1 text-[var(--lbl)]">{destinations[date]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Right side - Calendar */}
      <div className="w-2/3 p-6 flex flex-col space-y-4 rounded-3xl bg-[var(--lgg1)] ml-4">
        {/* Calendar section */}
        <div className="flex justify-between items-center mb-4">
          <button
            onClick={() => setCurrentDate(subMonths(currentDate, 1))}
            className="px-4 py-2 bg-[var(--gr)] text-white rounded-lg shadow-md hover:bg-[var(--gr)] transition duration-200"
          >
            Previous
          </button>
          <h2 className="text-2xl text-gray-950 font-bold">{format(currentDate, "MMMM yyyy")}</h2>
          <button
            onClick={() => setCurrentDate(addMonths(currentDate, 1))}
            className="px-4 py-2 bg-[var(--gr)] text-white rounded-lg shadow-md hover:bg-[var(--gr)] transition duration-200"
          >
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center font-semibold text-[var(--lbl)]">{day}</div>
          ))}
        </div>
        {rows}
      </div>
    </div>
  );
};

export default App;
