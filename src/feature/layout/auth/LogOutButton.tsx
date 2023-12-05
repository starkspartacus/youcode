'use client'

import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

export const LogOutButton = () => {
  return (
    <>
    <div className='flex justify-around'>
      <Button onClick={() => signOut()}>Logout</Button>
      <Button variant='secondary' onClick={() => console.log('je modifie')}>Modifier</Button>
    </div>
     
    </>
  )
}
