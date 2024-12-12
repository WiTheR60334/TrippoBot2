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
                        We see a tremendous opportunity to provide a seamless experience for planning and enjoying your next adventure. Our mission is to deliver intuitive, user-friendly solutions for travelers across the globe. By integrating cutting-edge technology, we empower users to explore, book, and create unforgettable memories effortlessly.                    </div>
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
                    width={530}
                    height={300}
                    className={styles.image} 
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TripGuideSlider