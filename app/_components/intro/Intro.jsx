"use client"
import React from 'react'
import {Borel}  from 'next/font/google'

const borel = Borel({
  subsets:['latin'],
  weight: '400',
})

const Intro = () => {

  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#176087_40%,#63e_100%)]">

        <div className='flex w-full justify-center flex-col'>
      <div className="content1 flex items-center text-2xl font-bold justify-between gap-12 mt-16 mx-10">
        <img src="https://i.ibb.co/sFvzWzx/logo.png" alt="MetaVoyage" className='h-4/5' />
        <div className="text flex flex-col gap-5 justify-between">
          <div className={`title text-7xl text-white ${borel.className}`}>MetaVoyage</div>
          <div className={`text-3xl text-[#F5F5DC] ${borel.className} flex flex-col`} >
            <div>Your One-Stop Destination</div>
            <div>for Seamless Travel and Ticketing Adventures!</div>
          </div>
        </div>
      </div>
      <div className="content2 text-7xl flex justify-center text-white text-bold ">Join Us now!</div>
    </div>
      </div>
  )
}

export default Intro
