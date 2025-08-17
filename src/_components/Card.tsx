"use client";
import React from "react";
import Image from "next/image";

interface CardProps {
  logo: string;
  company: string;
  website?: string;
  position: string;
  dates: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ logo, company, website, position, dates, description }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 w-full shadow-sm hover:border-[#FFD700] transition-colors duration-300">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start w-full gap-3">
        {/* Left: Logo + Info */}
        <div className="flex items-center space-x-4 w-full sm:w-auto">
          {/* Logo in Circle */}
            <div className="w-12 h-12 sm:w-12 sm:h-12 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center flex-shrink-0">
            <Image
                src={logo}
                alt={`${company} Logo`}
                width={48}   // required by Next.js
                height={48}  // required by Next.js
                className="w-full h-full object-contain"
            />
            </div>
          {/* Company + Position */}
          <div className="flex flex-col">
            {website ? (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 group"
              >
                <h2 className="text-base font-semibold text-black group-hover:text-blue-600 transition-colors duration-300">
                  {company}
                </h2>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                  fill="currentColor"
                  className="w-4 h-4 text-gray-800 group-hover:text-blue-600 transition-colors duration-300"
                >
                  <path d="M354.4 83.8C359.4 71.8 371.1 64 384 64L544 64C561.7 64 576 78.3 576 96L576 256C576 268.9 568.2 280.6 556.2 285.6C544.2 290.6 530.5 287.8 521.3 278.7L464 221.3L310.6 374.6C298.1 387.1 277.8 387.1 265.3 374.6C252.8 362.1 252.8 341.8 265.3 329.3L418.7 176L361.4 118.6C352.2 109.4 349.5 95.7 354.5 83.7zM64 240C64 195.8 99.8 160 144 160L224 160C241.7 160 256 174.3 256 192C256 209.7 241.7 224 224 224L144 224C135.2 224 128 231.2 128 240L128 496C128 504.8 135.2 512 144 512L400 512C408.8 512 416 504.8 416 496L416 416C416 398.3 430.3 384 448 384C465.7 384 480 398.3 480 416L480 496C480 540.2 444.2 576 400 576L144 576C99.8 576 64 540.2 64 496L64 240z"/>
                </svg>
              </a>
            ) : (
              <h2 className="text-base font-semibold text-black">{company}</h2>
            )}
            <p className="text-sm text-gray-600">{position}</p>
          </div>
        </div>

        {/* Right: Dates */}
        <div className="text-sm text-gray-500 text-right mt-2 sm:mt-0">
          {dates}
        </div>
      </div>

      {/* Description */}
      <p className="mt-4 text-sm text-gray-800">{description}</p>
    </div>
  );
};

export default Card;
