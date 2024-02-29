"use client"
import React from 'react'
import { FaPhoneVolume } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className='bg-gradient-to-r from-amber-400 to-amber-500 h-[3rem]'>
      
      <div >
        <div className='flex flex-row m-auto'>
          <div className='flex flex-row'>
            <div>Give us a call!</div>
            <div className='flex flex-row'> <div><FaPhoneVolume className=' mt-1' /></div> <div>+919891745757</div></div>
          </div>
          <div>2</div>
        </div>
      </div>
      
      </div>
  )
}

export default TopHeader