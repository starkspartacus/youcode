import { ThemeToggle } from '@/src/theme/ThemeToggle'
import React from 'react'
import { LoginButton } from './auth/LoginButton'
import Link from 'next/link'
import {SiteConfig} from '@/lib/site-config'

export const Header = async() => {
  return (
    <header>
      <div className="flex items-center justify-between px-8 py-4 bg-white">
        <div className="flex items-center">
          <button className="text-2xl font-bold text-gray-800 md:hidden">LOGO</button>
          <button className="ml-10 text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <div className="items-center hidden space-x-1 md:flex">
          <Link href="/" className="px-2 py-4 font-semibold text-green-500 border-b-4 border-green-500 ">HOME</Link>
          <Link href="/" className="px-2 py-4 font-semibold text-green-500 border-b-4 border-green-500 ">ABOUT</Link>
          <a href="#" className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500">SERVICES</a>
          <a href="#" className="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-green-500">CONTACT</a>
        </div>
        <div className="items-center hidden gap-4 md:flex">
          <LoginButton />
          <a href="#" className="px-2 py-2 font-medium text-white transition duration-300 bg-green-500 rounded hover:bg-green-400">SIGNUP</a>
        </div>
        <ThemeToggle />
      </div>
      
    </header>
  )
}
