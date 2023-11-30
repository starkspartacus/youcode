'use client'

import { Button } from '@/components/ui/button'
import React from 'react'
import { LucideLogIn } from 'lucide-react'
import { signIn } from 'next-auth/react'

export const LoginButton = () => {
  return (
    <Button 
    className='py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300'
    onClick={()=> {signIn()}}
    >
      <LucideLogIn  />
      <span className="ml-2">Login</span>
    </Button>
  )
}
