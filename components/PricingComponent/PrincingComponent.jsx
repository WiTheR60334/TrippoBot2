"use client";
import React, { useState } from "react";
import Accordion from "../Accordion/Accordion";
import styles from "./PricingComponent.module.css";

const PricingComponent = () => {
  return (
    <div className={styles.pricingContainer}>
      <h1 className={styles.heading}>Choose your plan</h1>
      <p className={styles.subHeading}>Unlock endless possibilities for Trippo</p>
      <div className={styles.cardContainer}>
        {/* Basic Plan */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Basic</h2>
            <p className={styles.cardDescription}>
              For personal use and exploration of AI technology. For personal use fwfwf.
            </p>
            <div className={styles.priceContainer}>
              <h3 className={styles.price}>$0 <span className={styles.priceTime}>/mo</span></h3>
              <button className={styles.button}>Get started</button>
            </div>
            <div className={styles.tp}></div>
            <ul className={styles.featureList}>
            <li>✔ Basic travel information</li>
            <li>✔ Limited to 20 requests/day</li>
            <li>✔ Basic multi-language support</li>
            <li>✔ Basic itinerary planner</li>
            <li>❌ Real-time flight & hotel prices</li>
            <li>❌ Email support</li>
            </ul>
          </div>
        </div>
        {/* Premium Plan */}
        <div className={`${styles.card} ${styles.popular}`}>
          <div className={styles.cardContent}>
            <div className={styles.popularTag}>Popular</div>
            <h2 className={`${styles.cardTitle} ${styles.premiumCardTitle}`}>Premium</h2>
            <p className={styles.cardDescription}>
              Perfect for professionals and small businesses in need of significant AI.
            </p>
            <div className={styles.priceContainer2}>
              <h3 className={styles.price2}>$9.99 <span className={styles.priceTime}>/mo</span></h3>
              <button className={`${styles.button} ${styles.premiumButton}`}>
                Get started
              </button>
            </div>
            <div className={styles.tp}></div>
            <ul className={styles.featureList}>
            <li>✔ Enhanced travel information</li>
            <li>✔ Real-time flight prices</li>
            <li>✔ Customized itinerary suggestions</li>
            <li>✔ Multi-language support (5+ languages)</li>
            <li>✔ Email customer support</li>
            <li>✔ Daily request limit: 500</li>
            </ul>
          </div>
        </div>
        {/* Advance Plan */}
        <div className={styles.card}>
          <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>Advance</h2>
            <p className={styles.cardDescription}>
              Perfect for large businesses or organizations that require specialized.
            </p>
            <div className={styles.priceContainer}>
              <h3 className={styles.price}>$19.99 <span className={styles.priceTime}>/mo</span></h3>
              <button className={styles.button}>Contact sale</button>
            </div>
            <div className={styles.tp}></div>
            <ul className={styles.featureList}>
            <li>✔ Highly detailed, personalized travel information</li>
            <li>✔ Real-time flight & hotel prices (Priority)</li>
            <li>✔ Advanced itinerary suggestions</li>
            <li>✔ Full multi-language support</li>
            <li>✔ 24/7 priority customer support</li>
            <li>✔ Unlimited requests</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.suggestions}>
        <div className={styles.content}>
          <div className={styles.header5}>
            FAQs
          </div>
        </div>
        <div className={styles.options}>
          <div className={styles.accordionMenu}>
            <Accordion
              title="What is included in the Free plan?"
              answer={`<b>Answer:</b> The Free plan offers limited responses and basic travel assistance. It’s perfect for getting started with itinerary suggestions, travel tips, and exploring the chatbot's features.`}
            />
            <Accordion
              title="What additional features do I get with the Premium plan?"
              answer={`<b>Answer:</b> The Premium plan includes more detailed responses and real-time access to flight prices, budget-friendly recommendations, and tailored travel itineraries. It’s ideal for frequent travelers looking for enhanced planning options.`}
            />
            <Accordion
              title="Why should I choose the Advance plan?"
              answer={`<b>Answer:</b> The Advance plan provides the most advanced features, including highly personalized travel recommendations, access to exclusive destinations, and real-time price comparisons for flights, hotels, and activities. It’s the ultimate tool for hassle-free travel planning.`}
            />
            <Accordion
              title="Can I switch plans later?"
              answer={`<b>Answer:</b> Yes, you can upgrade or downgrade your plan anytime based on your needs. Simply go to the subscription section in your account to make changes.`}
            />
            <Accordion
              title="Do I need to pay for the Free plan?"
              answer={`<b>Answer:</b> No, the Free plan is completely free to use. It allows you to explore basic chatbot features without any cost.`}
            />
            <Accordion
              title="Does the chatbot support real-time booking?"
              answer={`<b>Answer:</b> No, the chatbot does not directly handle bookings. However, the <b>Premium</b> and <b>Advance</b> plans provide real-time price comparisons and flight prices.`}
            />
            <Accordion
              title="Are there any hidden fees in the Premium or Advance plans?"
              answer={`<b>Answer:</b> No, there are no hidden fees. The pricing is transparent, and you’ll only be charged the subscription amount displayed at checkout.`}
            />
            <Accordion
              title="Can I cancel my subscription anytime?"
              answer={`<b>Answer:</b> Yes, you can cancel your subscription at any time. However, you’ll continue to have access to the plan features until the end of your billing cycle.`}
            />
            <Accordion
              title="Is the chatbot available for international trips?"
              answer={`<b>Answer:</b> Absolutely! The chatbot is designed to assist with both domestic and international trips across a variety of destinations. But the flight data will be exclusively for <b>India </b>only`}
            />
            <Accordion
              title="Does the Premium plan include offline access?"
              answer={`<b>Answer:</b> Yes, the Premium plan includes offline access to saved itineraries and travel tips, ensuring you’re prepared even without an internet connection.`}
            />
          </div>
        </div>
    </div>
  </div>
  );
};

export default PricingComponent;