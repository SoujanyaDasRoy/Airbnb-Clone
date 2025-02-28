"use client";

import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [selectedTab, setSelectedTab] = useState("stays");

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-4 flex justify-between items-center">
        {/* Left Section: Logo */}
        <div>
          <Image
            src="/airbnb.svg" // Replace with your Airbnb logo path
            alt="AirBNB Logo"
            width={100}
            height={100}
            className="cursor-pointer w-24 sm:w-auto"
          />
        </div>

        {/* Middle Section: Navigation Tabs */}
        <div className="hidden md:flex bg-white pt-2 px-4 ml-0 md:ml-10 lg:ml-40 rounded-full cursor-pointer items-center justify-evenly">
          <span
            className={`px-4 py-3 rounded-full transition-colors ${
              selectedTab === "stays"
                ? "bg-[#f7f7f7] text-[#3a3a3a] font-semibold"
                : "text-[#3a3a3a] hover:bg-[#f7f7f7]"
            }`}
            onClick={() => setSelectedTab("stays")}
          >
            Stays
          </span>
          <span
            className={`px-4 py-3 rounded-full transition-colors ${
              selectedTab === "experiences"
                ? "bg-[#f7f7f7] text-[#3a3a3a] font-semibold"
                : "text-[#3a3a3a] hover:bg-[#f7f7f7]"
            }`}
            onClick={() => setSelectedTab("experiences")}
          >
            Experiences
          </span>
        </div>

        {/* Right Section: User Menu */}
        <div className="flex gap-1 sm:gap-2 items-center">
          <span className="hidden sm:inline text-sm font-semibold hover:bg-gray-100 px-2 sm:px-4 py-2 rounded-full cursor-pointer transition-colors">
            Airbnb your home
          </span>
          <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer">
            <Image src="/globe.svg" alt="Globe Icon" width={16} height={16} />
          </div>
          <button className="flex gap-1 sm:gap-2 items-center border border-gray-300 rounded-full px-2 sm:px-4 py-1 sm:py-2 shadow-sm hover:shadow-md transition-shadow">
            <Image src="/menu.svg" alt="Menu Icon" width={16} height={16} />
            <Image
              src="/profile.svg"
              alt="Profile Icon"
              width={30}
              height={30}
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
