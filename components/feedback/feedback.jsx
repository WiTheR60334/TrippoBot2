"use client"; 

import React, { useState } from 'react'; // Add useState here

const Feedback = () => {
    
    const [selectedRating, setSelectedRating] = useState(null);

    const handleRatingClick = (rating) => {
        setSelectedRating(rating);
    };

    return (
        <div className="flex flex-col justify-between h-[28rem] bg-white p-3">
            <div className='pl-8 md:pl-16'>
                <h3 className="text-5xl md:text-7xl bg-gradient-to-r from-[var(--lb)] via-[var(--b)] to-[var(--lb)] w-[60%] bg-clip-text text-transparent mb-5 font-semibold tracking-tighter">Feedback</h3>
            </div>
            <div className="flex flex-row h-[20rem]">
                {/* Left: Feedback Form */}
                <div className="left w-[100%] md:w-[65%] h-[100%] flex flex-col justify-center items-center md:justify-start md:items-start pl-8 md:pl-16">
                    <form className="flex flex-col w-[95%] md:w-[70%] p-5 bg-white rounded-xl shadow-sm"> {/* Reduce width for centering */}
                        {/* Rating Numbers */}
                        <div className="flex space-x-2 justify-between w-full">
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                <div
                                    key={num}
                                    onClick={() => handleRatingClick(num)}
                                    className={`w-8 h-8 md:w-12 md:h-12 flex items-center justify-center cursor-pointer border rounded-md
                                        ${selectedRating === num ? 'bg-blue-800 text-white' : 'bg-white text-black border-gray-300'}`}
                                >
                                    {num}
                                </div>
                            ))}
                        </div>
                        {/* Descriptive Labels */}
                        <div className="flex justify-between w-full text-gray-500 text-lg mt-2 mb-8">
                            <span>Not likely at all</span>
                            <span>Extremely likely</span>
                        </div>   
                        <label htmlFor="message" className="mb-2 text-black text-xl font-bold">Message:</label>
                        <textarea id="message" className="mb-4 border border-gray-300 p-2 text-lg text-black rounded-xl" placeholder="Enter your feedback" rows="4" required></textarea>
                        {/* Submit Button */}
                        <button type="submit" className="bg-blue-500 text-white px-4 py-1 text-lg rounded inline w-fit">
                            Submit
                        </button>
                    </form>
                </div>
                
                {/* Right: Image */}
                <div className="right w-[35%] h-[100%] hidden md:flex items-center justify-center bg-slate-100">
                    <img 
                        src={`https://firebasestorage.googleapis.com/v0/b/${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}/o/feedback.png?alt=media&token=01fe6c0a-0414-4eae-89d6-cd9f5b235024`} 
                        alt="Feedback" 
                        className="w-full h-full object-cover" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Feedback;
