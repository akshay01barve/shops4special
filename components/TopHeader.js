"use client"
import React from 'react'
import { MdOutlineSettingsPhone } from "react-icons/md";
import { LuMailOpen } from "react-icons/lu";

const TopHeader = () => {
  return (
    <div className='bg-[#fefefe] h-[4rem] border border-slate-300 sticky'>
      
      <div className='p-2' >
        <div className='flex md:flex-row flex-col  '>
          <div className='flex flex-row'>
            <div> <p className=" text-xl">Give us a call!</p></div>
            <div className='flex flex-row'> <div><MdOutlineSettingsPhone className=' mt-1 ml-2 text-lg font-bold text-[#fefefe]' /></div> <div className='ml-2 text-lg font-light '>+919891745757</div></div>
          </div>
           <div className='flex flex-row md:ml-5'>
            <div> <p className="mr-4 text-lg font-bold ">Mail</p></div>
            <div className='flex flex-row'> <div><LuMailOpen className=' mt-1 ml-1 mr-2 text-lg font-bold text-[#fefefe]' /></div> <div><p className='text-lg font-light '>info@shop4specials.com</p></div></div>
          </div>
        </div>
      </div>
      
      </div>
  )
}

export default TopHeader