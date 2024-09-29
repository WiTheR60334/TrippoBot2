/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { FaPlane, FaHotel, FaClipboardList, FaPhone } from "react-icons/fa";

export default function ChatbotForm() {
  // State management for each part of the form
  const [part, setPart] = useState(1);

  // State for form inputs
  const [formData, setFormData] = useState({
    departure: "",
    arrival: "",
    transportation: "",
    tripType: "one-way",
    departureDate: "",
    returnDate: "",
    travelClass: "economy",
    adults: 1,
    children: 0,
    infants: 0,
    accommodation: "",
    budget: "",
    food: "",
    specialNeeds: [],
    interests: [],
    pace: "balanced",
    contactMethod: "email",
    contactInfo: "",
    travelInsurance: "no",
  });

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here, you can send formData to an API or server
  };

  // Helper functions to manage state changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
        ? [...formData[name], e.target.value]
        : formData[name].filter((item) => item !== e.target.value),
    });
  };

  // Part navigation functions
  const nextPart = () => setPart((prev) => prev + 1);
  const prevPart = () => setPart((prev) => prev - 1);

  return (
    <div className="bg-white h-screen outfit">
      <div className="p-8 mx-10 rounded-3xl bg-[var(--lg)] flex">
        <div className="">
          <div className="mt-6 flex justify-center">
            <img src="vectors/booking.svg" alt="Group 2" className="w-45" />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="w-full m-8 space-y-8">
          {part === 1 && (
            <>
              <div className="flex items-center space-x-3">
                <FaPlane className="text-[var(--gr)] text-3xl" />
                <h2 className="text-3xl font-bold text-[var(--gr)]">
                  Journey Details
                </h2>
              </div>
              <div className="grid grid-cold-2 gap-0"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block text-[var(--bl)]">
                  Departure:
                  <input
                    type="text"
                    name="departure"
                    value={formData.departure}
                    onChange={handleChange}
                    className="mt-1 p-2 bg-white w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--gr)]"
                    placeholder="Enter departure city"
                  />
                </label>
                <label className="block">
                  Arrival:
                  <input
                    type="text"
                    name="arrival"
                    value={formData.arrival}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    placeholder="Enter arrival city"
                  />
                </label>
                <label className="block">
                  Transportation:
                  <select
                    name="transportation"
                    value={formData.transportation}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="bus">Bus</option>
                    <option value="train">Train</option>
                    <option value="flight">Flight</option>
                    <option value="car">Car</option>
                  </select>
                </label>
                <label className="block">
                  Trip Type:
                  <select
                    name="tripType"
                    value={formData.tripType}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="one-way">One Way</option>
                    <option value="round-trip">Round Trip</option>
                    <option value="multi-city">Multi City</option>
                  </select>
                </label>
                <label className="block">
                  Departure Date:
                  <input
                    type="date"
                    name="departureDate"
                    value={formData.departureDate}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </label>
                {formData.tripType === "round-trip" && (
                  <label className="block">
                    Return Date:
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </label>
                )}
                <label className="block">
                  Travel Class:
                  <select
                    name="travelClass"
                    value={formData.travelClass}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="economy">Economy</option>
                    <option value="premium-economy">Premium Economy</option>
                    <option value="business">Business</option>
                    <option value="first-class">First Class</option>
                  </select>
                </label>
                <label className="block">
                  Adults:
                  <input
                    type="number"
                    name="adults"
                    value={formData.adults}
                    min="1"
                    max="9"
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </label>
                <label className="block">
                  Children:
                  <input
                    type="number"
                    name="children"
                    value={formData.children}
                    min="0"
                    max="6"
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </label>
                <label className="block">
                  Infants:
                  <input
                    type="number"
                    name="infants"
                    value={formData.infants}
                    min="0"
                    max="2"
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </label>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={nextPart}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {part === 2 && (
            <>
              <div className="flex items-center space-x-3">
                <FaHotel className="text-green-600 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-700">
                  Part 2: Accommodation & Budget
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block">
                  Accommodation:
                  <select
                    name="accommodation"
                    value={formData.accommodation}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value="hotel">Hotel</option>
                    <option value="dormitory">Dormitory</option>
                    <option value="resort">Resort</option>
                  </select>
                </label>
                <label className="block">
                  Budget per night:
                  <input
                    type="number"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </label>
                <label className="block">
                  Food Preferences:
                  <select
                    name="food"
                    value={formData.food}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  >
                    <option value="vegetarian">Vegetarian</option>
                    <option value="non-vegetarian">Non-Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="no-preference">No Preference</option>
                  </select>
                </label>
                <label className="block">
                  Special Needs:
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="specialNeeds"
                        value="wheelchair"
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      Wheelchair
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="specialNeeds"
                        value="childcare"
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      Childcare
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="specialNeeds"
                        value="dietary"
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      Dietary
                    </label>
                  </div>
                </label>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevPart}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  Previous
                </button>
                <button
                  type="button"
                  onClick={nextPart}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {part === 3 && (
            <>
              <div className="flex items-center space-x-3">
                <FaClipboardList className="text-yellow-600 text-2xl" />
                <h2 className="text-xl font-semibold text-gray-700">
                  Part 3: Activities & Interests
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block">
                  Interests:
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="sightseeing"
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      Sightseeing
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="adventure"
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      Adventure
                    </label>
                    <label className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="interests"
                        value="relaxation"
                        onChange={handleCheckboxChange}
                        className="mr-2"
                      />
                      Relaxation
                    </label>
                  </div>
                </label>
                <label className="block">
                  Travel Pace:
                  <select
                    name="pace"
                    value={formData.pace}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  >
                    <option value="fast">Fast</option>
                    <option value="balanced">Balanced</option>
                    <option value="slow">Slow</option>
                  </select>
                </label>
                <label className="block">
                  Travel Insurance:
                  <select
                    name="travelInsurance"
                    value={formData.travelInsurance}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                  >
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
              </div>
              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevPart}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Submit
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
