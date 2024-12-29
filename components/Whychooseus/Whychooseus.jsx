"use client";
import React from 'react'
import styles from './whychooseus.module.css'

function Whychooseus() {
    const chat = () => {
        window.location.href = "/chatbot";
      }
  return (
        <div className={styles.minFullWidth}>
            <div className={styles.minFullWidthMd}>
                <div className={styles.gridContainer}>
                    <div className={styles.pic}>
                        <img 
                        src="./images/ai_bot.avif" 
                        alt="AI Bot"
                        width={350}
                        height={350}
                        className={styles.image} 
                        />
                    </div>
                    <div className={styles.Container}>
                        <h5 className={`${styles.header5} ${styles.header5Md}`}>
                            Why Choose TrippoBot?
                        </h5>
                        <h3 className={`${styles.header3} ${styles.header3Md}`}>
                            Travel Smarter, Not Harder!
                        </h3>
                        <div className={styles.para}>
                        Choose TrippoBot for stress-free travel! Plan instantly, get personalized itineraries, compare prices, and enjoy real-time updates. Seamless support and smarter interactions make every journey easier. Your perfect trip starts here!                        </div>
                        <div className={styles.button}>
                            <button onClick={chat}>
                                Chat Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Whychooseus