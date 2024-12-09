import React from "react";
import NSU_logo from '../assets/img/NSU_flag.png';
import Hcoe_logo from '../assets/img/Hcoe_nsu.png';

const Header = () => {
  return (
    <div className="w-full px-4 bg-white shadow-lg">
      <div className="flex flex-col sm:flex-row border-b-2 border-green-700 justify-between px-4 py-4 items-center w-full space-y-6 sm:space-y-0 sm:space-x-8">

        {/* Left Flag */}
        <img
          src={NSU_logo}
          alt="Left Flag"
          className="h-16 object-contain sm:ml-4 transition-all duration-300 ease-in-out transform hover:scale-110"
        />

        {/* Center Text */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mt-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-green-700 tracking-wider mb-2">नेपाल विद्यार्थी संघ</h1>
            <h2 className="text-lg sm:text-xl italic text-gray-600 mt-1">Nepal Student's Union</h2>
          </div>

          {/* Bottom Section */}
          <div className="mt-3 text-sm sm:text-base text-gray-500">
            <p>Himalaya College of Engineering 13th Unit Committee</p>
            <p>Chaysal, Lalitpur</p>
          </div>
        </div>

        {/* Right Flag */}
        <img
          src={Hcoe_logo}
          alt="Right Flag"
          className="h-20 object-contain sm:mr-4 transition-all duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
    </div>
  );
};

export default Header;
