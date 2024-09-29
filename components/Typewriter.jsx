import { useState, useEffect } from "react";

export default function Typewriter() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const dataText = [
    "Utrecht.",
    "Full Service.",
    "Webdevelopment.",
    "Wij zijn Codefield!",
  ];

  // Function to handle the typing animation
  useEffect(() => {
    if (textIndex >= dataText.length) {
      setTextIndex(0);
    }
    let typingTimeout;
    let currentText = dataText[textIndex];

    if (isTyping) {
      if (displayText.length < currentText.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }, 100); // Speed of typing
      } else {
        setIsTyping(false);
        typingTimeout = setTimeout(() => {
          setIsTyping(true);
          setTextIndex((prevIndex) => (prevIndex + 1) % dataText.length);
          setDisplayText("");
        }, 1500); // Pause before moving to the next sentence
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [displayText, isTyping, textIndex, dataText]);

  return (
    <div className="h-screen bg-[#120439] flex items-center justify-center">
      <h1 className="text-white text-5xl md:text-7xl font-bold uppercase">
        {displayText}
        <span className="border-r-2 border-white animate-caret">&nbsp;</span>
      </h1>
    </div>
  );
}
