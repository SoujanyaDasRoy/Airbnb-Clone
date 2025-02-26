import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm fl">
      <div className="px-16 py-4 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div>
          <Image 
            src="/airbnb.svg" // Replace with your Airbnb logo path
            alt="AirBNB Logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </div>

        <div className="bg-white pt-2 px-4 ml-40 rounded-full cursor-pointer flex items-center justify-evenly">
          <span className="hover:bg-[#f7f7f7] px-4 py-3 rounded-full">Stays</span>
          <span className="hover:bg-[#f7f7f7] px-4 py-3 rounded-full">Experiences</span>
        </div>

        {/* Right Section: User Menu */}
        <div className="flex gap-2 items-center">
          <span className="text-sm font-semibold hover:bg-gray-100 px-4 py-2 rounded-full cursor-pointer transition-colors">
            Airbnb your home
          </span>
          <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
            <Image 
              src="/globe.svg" // Replace with your globe icon path
              alt="Globe Icon"
              width={16}
              height={16}
            />
          </div>
          <button className="flex gap-2 items-center border border-gray-300 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
            <Image 
              src="/menu.svg" // Replace with your menu icon path
              alt="Menu Icon"
              width={16}
              height={16}
            />
            <Image 
              src="/profile.svg" // Replace with your profile icon path
              alt="Profile Icon"
              width={30}
              height={30}
              className="rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;