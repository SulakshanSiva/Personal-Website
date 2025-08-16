"use client"

import React from 'react'
import lightModeLogo from '../assets/images/icons8-dark-mode-96.png'
import darkModeLogo from '../assets/images/icons8-dark-mode-96.png'

const Header = () => {

  const isDark = false;

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className='border-b border-gray-200 bg-white flex flex-wrap items-center mt-2 justify-between mx-auto 
                    lg:px-20 md:px-14 px-8 py-6'>
        <h1 className='text-xl font-medium'>SS.</h1>

    <button
      // onClick={toggleDark}
      className="relative inline-flex items-center justify-center rounded-full p-2 group cursor-pointer"
      aria-label="Toggle dark mode"
    >
      <img
        src={isDark ? lightModeLogo.src : darkModeLogo.src}
        alt="Theme icon"
        className={`h-6 z-10 transition-all duration-300 ${
          isDark ? 'invert brightness-200' : ''
        }`}
      />

      <span
        className={`absolute inset-0 rounded-full border-2 scale-0 transition-transform duration-300 group-hover:scale-100 ${
          isDark ? 'border-white' : 'border-black'
        }`}
      />
    </button>

    </div>
  )
}

export default Header