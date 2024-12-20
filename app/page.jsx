'use client'

import { useSession } from 'next-auth/react'
import React from 'react'

const page = () => {
  const { data: session, status } = useSession();

  return (
    <div className='font-bold text-red-700 flex justify-center'>
      Hello World
    </div>
  )
}

export default page