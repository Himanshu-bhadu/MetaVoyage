'use client'

import { useSession } from 'next-auth/react'
import React from 'react'
import Home from './_components/Home';

const page = () => {
  const { data: session, status } = useSession();

  return (
    <div className='font-bold text-red-700 flex justify-center'>
      <Home />
    </div>
  )
}

export default page