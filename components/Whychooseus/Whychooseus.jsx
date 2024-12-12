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
                        Highlight the key reasons users should choose TrippoBot, such as saving time in travel planning, getting personalized itinerary recommendations, comparing prices across platforms, and receiving real-time updates. You could also emphasize how the chatbot's responses get better with each interaction and how it provides seamless support for all travel needs, making the experience enjoyable and stress-free.
                        </div>
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