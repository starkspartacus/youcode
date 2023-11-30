import { ThemeToggle } from '@/src/theme/ThemeToggle'
import React from 'react'

export const Header = async() => {
  return (
    <header>
      <div className="flex justify-between items-center py-4 px-8 bg-white">
        <div className="flex items-center">
          <button className="text-2xl font-bold text-gray-800 md:hidden">LOGO</button>
          <button className="rounded-md ml-10 text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
            <span className="sr-only">Open main menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex items-center space-x-1">
          <a href="#" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">HOME</a>
          <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">ABOUT</a>
          <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">SERVICES</a>
          <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">CONTACT</a>
        </div>
        <div className="hidden md:flex items-center">
          <a href="#" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">LOGIN</a>
          <a href="#" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">SIGNUP</a>
        </div>
        <ThemeToggle />
      </div>
      
    </header>
  )
}
