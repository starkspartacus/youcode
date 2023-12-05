'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

interface btnProps {
  children: React.ReactNode
  className?: string
}

export const Btn = ({children, className}:btnProps) => {
  return (
    <>
  
      <Button onClick={() => console.log('admin')}>{children}</Button>
     
    </>
  )
}