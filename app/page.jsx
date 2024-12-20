'use client'

import { useSession } from 'next-auth/react'
import React from 'react'
import Home from './_components/Home';
import Intro from './_components/intro/Intro';
import Nav from '../components/Nav';

const page = () => {
  const { data: session, status } = useSession();

  return (
    <div className='font-bold  flex justify-center flex-col'>
      <Nav />
      {/* <Home /> */}
      <Intro />
    </div>
  )
}

export default page