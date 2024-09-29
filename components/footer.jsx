"use client"; 

import React from 'react';

const Footer = () => {
    return (
      <div className="flex flex-col items-center justify-center h-[280px] gap-6 bg-white pt-12 pb-12"> {/* Added padding-top */}
        <div className="flex items-center gap-8 md:gap-0 flex-col md:flex-row justify-center w-full">
            <div className="w-1/3 flex items-center justify-center text-3xl text-black">
                Trippo.ai
            </div>
            <div className="flex w-full md:w-2/5 gap-4 text-gray-600 items-center justify-center"> {/* Gap between columns */}
                <div className="flex-1 flex flex-col gap-4 items-left md:items-center justify-center bg-white"> {/* Changed gap */}
                    <h2 className='font-semibold text-center md:text-left'>EXPLORE</h2>
                    <div className='flex flex-col gap-2'> {/* Added gap here */}
                        <a href="#" className='text-center md:text-left'>Chatbot</a>
                        <a href="#" className='text-center md:text-left'>Itinerary</a>
                        <a href="#" className='text-center md:text-left'>Destination</a>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 items-left md:items-center justify-center bg-white"> {/* Changed gap */}
                    <h2 className='font-semibold text-center md:text-left'>COMPANY</h2>
                    <div className='flex flex-col gap-2'> {/* Added gap here */}
                        <a href="#" className='text-center md:text-left'>About Us</a>
                        <a href="#" className='text-center md:text-left'>Travel Blog</a>
                        <a href="#" className='text-center md:text-left'>Parterships</a>
                    </div>
                </div>
                <div className="flex-1 flex flex-col gap-4 items-left md:items-center justify-center bg-white"> {/* Changed gap */}
                    <h2 className='font-semibold text-center md:text-left'>LINKS</h2>
                    <div className='flex flex-col gap-2'> {/* Added gap here */}
                        <a href="#" className='text-center md:text-left'>My Account</a>
                        <a href="#" className='text-center md:text-left'>Contact Us</a>
                        <a href="#" className='text-center md:text-left'>Pricing</a>
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
