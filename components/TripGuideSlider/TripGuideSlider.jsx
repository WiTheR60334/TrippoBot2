"use client";
import React from 'react';
import styles from './TripGuideSlider.module.css';

function TripGuideSlider() {
    const about = () => {
        window.location.href = "/";
      };
  return (
    <div className={styles.minFullWidth}>
        <div className={styles.minFullWidthMd}>
            {/* <h5 className={`${styles.header5} ${styles.header5Md}`}>
                Crafted with explorers in mind.
            </h5> */}
            <div className={styles.gridContainer}>
                <div className={styles.Container}>
                    <h3 className={`${styles.header3} ${styles.header3Md}`}>
                        Crafted with explorers in mind.
                    </h3>
                    <div className={styles.para}>
                    Discover the ultimate travel companion with <strong style={{color: "black"}}>TrippoBot</strong>! From planning your dream getaway to customizing itineraries and finding the best deals, our chatbot does it all in seconds. Say goodbye to stress and hello to effortless travel planning with real-time updates and personalized recommendations.
                        {/* Experience effortless travel planning with <strong>TrippoBot</strong>! Customize itineraries, find great deals, and get real-time updates—all in seconds. Enjoy seamless support and start your journey stress-free! */}
                    </div>
                    <div className={styles.button}>
                        <button onClick={about} >
                            Learn More
                        </button>
                    </div>
                </div>
                <div className={styles.pic}>
                    <img 
                    src={`https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/istockphoto-1500563478-612x612.jpg?alt=media&token=aeb6e152-0016-4c19-b2fb-0af1b1e50ac4`} 
                    alt=""
                    className={styles.image} 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TripGuideSlider