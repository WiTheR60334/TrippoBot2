"use client"; 

import React from 'react';

const Footer = () => {
    return (
      <div className="flex flex-col items-center justify-center h-[280px] gap-6 bg-white pt-12 pb-12"> {/* Added padding-top */}
        <div className="flex items-center justify-center w-full">
            <div className="w-1/3 flex items-center justify-center text-3xl text-black">
                Trippo.ai
            </div>
            <div className="flex w-2/5 gap-4 text-gray-600"> {/* Gap between columns */}
                <div className="flex-1 flex flex-col gap-4 items-left justify-center bg-white"> {/* Changed gap */}
                    <h2 className='font-semibold'>EXPLORE</h2>
                    <div className='flex flex-col gap-2'> {/* Added gap here */}
                        <a href="#">Trippo.ai Chatbot</a>
                        <a href="#">Itinerary Builder</a>
                        <a href="#">Destination Guides</a>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 items-left justify-center bg-white"> {/* Changed gap */}
                    <h2 className='font-semibold'>COMPANY</h2>
                    <div className='flex flex-col gap-2'> {/* Added gap here */}
                        <a href="#">About Us</a>
                        <a href="#">Travel Blog</a>
                        <a href="#">Parterships</a>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 items-left justify-center bg-white"> {/* Changed gap */}
                    <h2 className='font-semibold'>USEFUL LINKS</h2>
                    <div className='flex flex-col gap-2'> {/* Added gap here */}
                        <a href="#">My Account</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Pricing</a>
                    </div>
                </div>
            </div>  
        </div>
        <div className="flex items-center justify-center w-full h-20 mt-4 text-gray-700"> {/* Adjust height and margin as necessary */}
            <p>© 2024 Trippo.ai Inc.</p>
        </div>
      </div>  
    )
}

export default Footer;
