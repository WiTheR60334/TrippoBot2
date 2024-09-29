"use client";
import React, { useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const pricingDataAll = {
  generic: {
    priceDesc: "some small print",
    ctaText: "Try Now for 30 Days",
    ctaLinkPrefix: "http://www.google.com/",
    ctaSecondaryText: "purchase now",
    ctaSecondaryLinkPrefix: "http://www.bing.com/",
    description:
      "This is the most basic package but it's also the cheapest. Great for ordinary use.",
  },
  common: {
    one: {
      description:
        "This is the most basic package but it's also the cheapest. Great for ordinary use.",
    },
    two: {
      description:
        "Best selling option. This is well suited for all around general everything.",
    },
    three: {
      description:
        "Enterprise edition. Heavy duty awesomeness that'll handle just about anything you can throw at it, including the kitchen sink.",
    },
  },
  regular: {
    one: {
      title: "Trippo Standard",
      price: 0.99, // Update to 0 for Free
      billingCode: "basic-regular",
      priceOverview: "Free",
      features: ["Cultural Considerations"], // Features list
    },
    two: {
      title: "Trippo Gold",
      price: 499, // Updated price
      billingCode: "advanced-regular",
      priceOverview: "Standard Version",
      features: [
        "Personalized Activity Suggestions",
        "Specific Flight Recommendations",
        "Detailed Transport Information",
      ], // Features list
    },
    three: {
      title: "Trippo Diamond",
      price: 799, // Updated price
      billingCode: "enterprise-regular",
      priceOverview: "Standard Version",
      features: [
        "Personalized Activity Suggestions",
        "Specific Flight Recommendations",
        "Alternative Kid-Friendly Suggestions",
        "Detailed Transport Information",
        "Cultural Considerations",
        "Weather Information Based on Travel Dates",
      ], // Features list
    },
  },
  promo: {
    one: {
      title: "Basic with Extra",
      price: 1.45,
      billingCode: "basic-extra",
      priceOverview: "Includes all Extra features",
      features: ["Extra feature 1", "Extra feature 2"], // Features list
    },
    two: {
      title: "Advanced with Extra",
      price: 2.45,
      billingCode: "advanced-extra",
      priceOverview: "Includes all Extra features",
      features: ["Extra feature 1", "Extra feature 3"], // Features list
    },
    three: {
      title: "Enterprise with Extra",
      price: 3.45,
      billingCode: "enterprise-extra",
      priceOverview: "Includes all Extra features",
      features: ["Extra feature 1", "Extra feature 2", "Extra feature 3"], // Features list
    },
  },
};

const PricingCard = ({
  pricingData,
  generic,
  backgroundColor, // Added background color prop
}) => {
  const [dollar, cent] = pricingData.price.toFixed(2).split(".");

  // Define the full features list
  const allFeatures = [
    "Personalized Activity Suggestions",
    "Specific Flight Recommendations",
    "Alternative Kid-Friendly Suggestions",
    "Detailed Transport Information",
    "Cultural Considerations",
    "Weather Information Based on Travel Dates",
  ];

  return (
    <div
      className={`pricingCard mesh-price transition-transform transform hover:scale-105 duration-300 ease-in-out 
        shadow-lg rounded-2xl overflow-hidden flex flex-col justify-between ${backgroundColor}`} // Use background color prop
    >
      <div
        className={`title tracking-tight bg-[var(--g2)] text-white text-2xl font-medium py-4 px-6 ${
          pricingData.title === "Trippo Standard"
            ? "text-blue-500"
            : pricingData.title === "Trippo Gold"
            ? "text-yellow-300"
            : pricingData.title === "Trippo Diamond"
            ? "text-[#47c8e8]"
            : "text-white" // Fallback color
        }`}
      >
        {pricingData.title}
      </div>
      <div className="card p-6">
        <h2 className="price items-center text-7xl font-bold flex">
          <span className="price__currency text-4xl">
            <MdCurrencyRupee />
          </span>
          <span className="text-4xl">{dollar}</span>
        </h2>
        <p className="price-overview text-lg font-semibold">
          {pricingData.priceOverview}
        </p>
        <hr className="border-[var(--g)]  my-3" />
        <div className="features mt-4 text-gray-600">
          <h4 className="text-lg font-bold">Features</h4>
          <ul>
            {allFeatures.map((feature) => (
              <li key={feature} className="flex items-center">
                {pricingData.features.includes(feature) ? (
                  <span className="text-green-500 mr-2">
                    <FaCheck />
                  </span> // Check mark for included features
                ) : (
                  <span className="text-red-500 mr-2">
                    <RxCross2 />
                  </span> // Cross mark for not included features
                )}
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <a
        className="bttn bg-[var(--lg)] rounded-full text-[var(--llg)] text-center font-medium hover:bg-[var(--b)] hover:text-white transition-all duration-300 py-2 px-4 m-6 rounded"
        href={generic.ctaLinkPrefix + pricingData.billingCode}
      >
        {generic.ctaText}
      </a>
    </div>
  );
};

const Pricing = () => {
  const [isPromo, setIsPromo] = useState(false);

  const togglePromo = () => setIsPromo(!isPromo);

  const pricingDataCurrent = isPromo
    ? pricingDataAll.promo
    : pricingDataAll.regular;
  const generic = pricingDataAll.generic;

  return (
    <div className="bg-[var(--g)] outfit mesh-dark min-w-full p-8 md:p-16">
      <h5 className="text-2xl md:text-3xl tracking-tight text-[var(--lb)] font-medium">
        Want to chat more and more?
      </h5>
      <h3 className="text-5xl md:text-7xl bg-gradient-to-r from-[var(--lg)] via-[var(--llg)] to-[var(--lg)] w-[90%] md:w-[40%] bg-clip-text text-transparent mb-10 font-semibold tracking-tighter">
        Explore our plans
      </h3>

      <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
        <PricingCard
          pricingData={pricingDataCurrent.one}
          generic={generic}
          backgroundColor="bg-blue-300" // Change color for Trippo Standard
        />
        <PricingCard
          pricingData={pricingDataCurrent.two}
          generic={generic}
          backgroundColor="bg-yellow-400" // Change color for Trippo Gold
        />
        <PricingCard
          pricingData={pricingDataCurrent.three}
          generic={generic}
          backgroundColor="bg-green-300" // Change color for Trippo Diamond
        />
      </div>
    </div>
  );
};

export default Pricing;
