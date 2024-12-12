import React, { useState } from "react";
import "./Accordion.css";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="accordion-container">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="accordion-header flex justify-between w-full"
      >
        <span className="title">{title}</span>
        <svg
          className="plus-icon fill-indigo-500 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`accordion-content transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
        dangerouslySetInnerHTML={{ __html: answer }}
      >
        {/* {answer} */}
      </div>
    </div>
  );
};

export default Accordion;