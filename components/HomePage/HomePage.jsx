"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./HomePage.module.css";
import  Carousel  from "../Carousel/Carousel";
import { Helmet } from 'react-helmet';
import Typed from "typed.js";
import { useRouter } from "next/router";

export default function HomePage() {
  const startChat = () => {
    window.location.href = "/chatbot";
  };
  const [isLongInput, setIsLongInput] = useState(false);

  const handleInputChange = (e) => {
    const inputLength = e.target.value.length;
    // Adjust the threshold based on your design (e.g., 20 characters or more)
    if (inputLength > 20) {
      setIsLongInput(true);
    } else {
      setIsLongInput(false);
    }
  };

  useEffect(() => {
    const options = {
      strings: [
        "Plan a 3 day trip to Goa",
        "Pet-friendly budget hotels in Mumbai",
        "Book a flight from Ahmedabad to Pune",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    };

    const typed = new Typed("#typed-words", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className={`${styles.homeContainer} ${styles.bgWhite}`}>
        <div className={styles.innerContainer}>
          <div className={styles.bgImage}>
           <Carousel />
          </div>
          <div className={styles.gridContainer}>
            <div className={styles.textContainer}>
              <h5 className={styles.title}>Discover Trippo</h5>
              <div className={styles.spacing}></div>
              <h3 className={styles.heading}>Smartest way to travel</h3>
              <h4 className={styles.description}>
                TrippoBot is an AI-powered travel assistant that helps users plan trips effortlessly. From destination info to booking suggestions, TrippoBot makes travel planning easy and enjoyable, providing seamless itinerary planning and price comparisons for a stress-free experience.
              </h4>
              <div className={styles.wrapper} style={{ flexDirection: isLongInput ? 'column' : 'row' }}>
                <div className={styles.inputLarge}>
                <div id="typed-words" class="typed-words"></div>
                </div>
                <button className={styles.tryButton} onClick={startChat}>
                  Try it
                </button>
              </div>
            </div>
            {/* <div className={styles.imageContainer}>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/trippo-a1603.appspot.com/o/Group.png?alt=media&token=1ce9a646-20a0-4313-a9c9-a79375bfee80"
                alt="Travel Reminders"
                width={530}
                height={500}
                className={styles.image}
              />
            </div> */}
          </div>
        </div>
        <div className={styles.minFullWidth}>
          <div className={styles.minFullWidthMd}>
            <h5 className={`${styles.header5} ${styles.header5Md}`}>
              Try very useful
            </h5>
            <h3 className={`${styles.header3} ${styles.header3Md}`}>
              Our AI Toooooooools
            </h3>
            <div className={`${styles.gridContainerr} ${styles.gridContainerrMd}`}>
              {/* Destination Planner */}
              <div className={`${styles.card} ${styles.cardMd}`}>
                <h3 className={`${styles.cardHeader} ${styles.cardHeaderMd}`}>
                  Destination Planner
                </h3>
                <div className={styles.imageContainer}>
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/Destination.png?alt=media&token=d748993f-707a-4efd-94ec-57ce06aa0357`}
                    // src="./images/How-an-AI-Trip-Planner-Is-Making-Tourism-Smarter.png "
                    alt="Destination"
                    width={360}
                    height={360}
                    className={styles.imagee}
                  />
                </div>
                <p className={`${styles.cardText} ${styles.cardTextMd}`}>
                  Get popular attractions, local culture, cuisine, and events
                  happening during the user&apos;s travel dates.
                </p>
              </div>

              {/* Itinerary Planner */}
              <div className={`${styles.card} ${styles.cardMd}`}>
                <h3 className={`${styles.cardHeader} ${styles.cardHeaderMd}`}>
                  Itinerary Planner
                </h3>
                <div className={styles.imageContainer}>
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/Itenary.jpg?alt=media&token=6fd86271-1f62-401a-a86c-fc89a3926184`}
                    alt="Itinerary"
                    width={360}
                    height={360}
                    className={styles.imagee}
                  />
                </div>
                <p className={`${styles.cardText} ${styles.cardTextMd}`}>
                  Provide users with personalized travel itineraries, activity
                  suggestions, and restaurant recommendations.
                </p>
              </div>

              {/* Booking Assistant */}
              <div className={`${styles.card} ${styles.cardMd}`}>
                <h3 className={`${styles.cardHeader} ${styles.cardHeaderMd}`}>
                  Booking Assistant
                </h3>
                <div className={styles.imageContainer}>
                  <img
                    src={`https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/Booking.png?alt=media&token=ca512010-a15e-4bcb-b5ff-313f1d9cea7e`}
                    alt="Booking"
                    width={360}
                    height={360}
                    className={styles.imagee}
                  />
                </div>
                <p className={`${styles.cardText} ${styles.cardTextMd}`}>
                  Help users compare flight, hotel, and transportation options to
                  ease the booking process.
                </p>
              </div>
            </div>
          </div>
        </div>
    {/* <div className={`${styles.sectionContainer} ${styles.sectionContainerMd}`}>
      <div className={styles.headerContainer}>
        <h5 className={`${styles.header5} ${styles.header5Md}`}>
          Discover Trippo
        </h5>

        <h3 className={`${styles.header3} ${styles.header3Md}`}>
          Other Support
        </h3> */}
        {/* <hr />
        <h4 className={`${styles.introText} ${styles.introTextMd}`}>
          TrippoBot is your reliable travel assistant, providing personalized support to simplify trip planning, booking, and itineraries. With advanced AI and industry expertise, we offer accurate recommendations, budget-friendly options, and round-the-clock guidance, ensuring a stress-free travel experience tailored to your needs.        </h4> */}
      {/* </div>
      </div> */}
      </div>
    </>
  );
}



