"use client";
import React, { useState } from "react";
import styles from "./Pricing.module.css";
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

const Pricing = () => {
  const [isPromo, setIsPromo] = useState(false);
  const pricingPage = () => {
    window.location.href = "/pricing";
  };

  const togglePromo = () => setIsPromo(!isPromo);

  const pricingDataCurrent = isPromo
    ? pricingDataAll.promo
    : pricingDataAll.regular;
  const generic = pricingDataAll.generic;

  return (
    <>
    <div className={styles.minFullWidth}>
          <div className={styles.minFullWidthMd}>
      <h5 className={`${styles.header5} ${styles.header5Md}`}>
        Want to chat more and more?
      </h5>
      <h3 className={`${styles.header3} ${styles.header3Md}`}>
        Explore our plans
      </h3>
      <div className={`${styles.gridContainerr} ${styles.gridContainerrMd}`}>
        <div className={`${styles.card} ${styles.cardMd}`}>
          <h3 className={`${styles.cardHeader} ${styles.cardHeaderMd}`}>
            Standard
          </h3>
          <div className={styles.pricing}>
            free
          </div>
          <p className={`${styles.cardText} ${styles.cardTextMd}`}>
          Essential travel assistance with core features for planning and booking. Chatbot responses are basic & limited but reliable.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div className={styles.button}>
              <button onClick={pricingPage} >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardMd}`}>
          <h3 className={`${styles.cardHeader} ${styles.cardHeaderMd}`}>
            Gold
          </h3>
          <div className={styles.pricing}>
            $9.99 / mo
          </div>
          <p className={`${styles.cardText} ${styles.cardTextMd}`}>
          Enhanced support with additional perks, including personalized itinerary planning and exclusive deals. Chatbot responses improve with tailored recommendations.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div className={styles.button}>
              <button onClick={pricingPage} >
                Learn More
              </button>
            </div>
          </div>
        </div>

        <div className={`${styles.card} ${styles.cardMd}`}>
          <h3 className={`${styles.cardHeader} ${styles.cardHeaderMd}`}>
            Diamond
          </h3>
          <div className={styles.pricing}>
            $19.99 / mo
          </div>
          <p className={`${styles.cardText} ${styles.cardTextMd}`}>
          Premium all-inclusive travel assistance with exclusive access. Chatbot responses are the most advanced, providing highly customized solutions.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center'}}>
            <div className={styles.button}>
              <button onClick={pricingPage} >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
};

export default Pricing;