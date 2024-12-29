'use client'; 
import { useState, useEffect } from "react";
import "./Carousel.css";

const Carousel = () => {
  const images = [
    {
      src: "/images/img1.jpg",
      heading: "Travel Smarter, Chat Faster!",
      description: "Plan, customize, and embark on unforgettable journeys—all in one seamless experience.",
    },
    {
      src: "/images/img2.jpg",
      heading: "Your Dream Trip, One Chat Away!",
      description: "Discover destinations, get tailored itineraries, and book effortlessly with our chatbot.",
    },
    {
      src: "/images/img3.jpg",
      heading: "Plan Your Perfect Trip with Ease!",
      description: "Plan your trip, compare prices, and explore—all in one chat!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  const chatButton = () => {
    window.location.href = "/chatbot";
  }

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  
    const handleInputChange = (e) => {
      const inputLength = e.target.value.length;
      // Adjust the threshold based on your design (e.g., 20 characters or more)
      if (inputLength > 20) {
        setIsLongInput(true);
      } else {
        setIsLongInput(false);
      }
    };
  
  return (
    <div className="slider-container">
      <div
        className="slider-image"
        style={{
          backgroundImage: `url(${images[currentIndex].src})`,
        }}
      >
        <div className="slider-text">
          <div className="heading">{images[currentIndex].heading}</div>
          <div className="description">{images[currentIndex].description}</div>
          <button className="slider-button" onClick={chatButton}>Chat now</button>
        </div>
        <div className="slider-arrows">
          <button
            className="arrow left-arrow"
            onClick={() =>
              setCurrentIndex(
                (currentIndex - 1 + images.length) % images.length
              )
            }
          >
            &#8249;
          </button>
          <button
            className="arrow right-arrow"
            onClick={() =>
              setCurrentIndex((currentIndex + 1) % images.length)
            }
          >
            &#8250;
          </button>
        </div>
        {/* <div className="slider-arrows">
            <button className="arrow left-arrow" onClick={goToPrevious}>
                &#8249;
            </button>
            <button className="arrow right-arrow" onClick={goToNext}>
                &#8250;
            </button>
        </div> */}
      </div>
    </div>
  );
};

export default Carousel;