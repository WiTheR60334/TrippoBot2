import { useState, useEffect } from "react";

const TypingEffect = () => {
  const wordsToType = [
    "Book a flight from Mumbai to Goa",
    "Plan a trip at Dubai",
    "Suggest itinerary for trip of New York",
  ];
  const typingSpeed = 70; // Speed of typing (ms)
  const typingDelay = 1000; // Delay before starting to erase (ms)

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [isErasing, setIsErasing] = useState(false);
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const wordToType = wordsToType[currentWordIndex % wordsToType.length];

    if (!isErasing && currentCharacterIndex < wordToType.length) {
      const typingTimeout = setTimeout(() => {
        setTypedText((prev) => prev + wordToType[currentCharacterIndex]);
        setCurrentCharacterIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
    } else if (isErasing && currentCharacterIndex > 0) {
      const erasingTimeout = setTimeout(() => {
        setTypedText(wordToType.substring(0, currentCharacterIndex - 1));
        setCurrentCharacterIndex((prev) => prev - 1);
      }, typingSpeed);

      return () => clearTimeout(erasingTimeout);
    } else if (currentCharacterIndex === wordToType.length) {
      const delayBeforeErase = setTimeout(() => {
        setIsErasing(true);
      }, typingDelay);

      return () => clearTimeout(delayBeforeErase);
    } else if (isErasing && currentCharacterIndex === 0) {
      setIsErasing(false);
      setCurrentWordIndex((prev) => (prev + 1) % wordsToType.length);
    }
  }, [currentCharacterIndex, isErasing]);

  return (
    <div className="text-left h-[40px] hidden md:flex md:w-[400px] items-center bg-white rounded-xl border-gray-400 border-[1px] p-2 text-lg">
      <h1>
        <span className="text-[var(--b)]">{typedText}</span>
        <span className="blinking-cursor">|</span>
      </h1>
    </div>
  );
};

export default TypingEffect;