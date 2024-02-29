"use client"
import TopHeader from "@/components/TopHeader"
import CarouselItem from "../components/CarouselItem"
import Header from "../components/Header"
import Shopfourspecial from "../components/Shopfourspecial"

import React from 'react'
import Achieved from "@/components/Achieved"
import StoriesChange from "@/components/StoriesChange"

const Home = () => {
  return (
    <div>
      <div className=" ">
        <TopHeader/>
      <Header/>  
      <CarouselItem/>
      <Shopfourspecial/>
      <Achieved/>
      <StoriesChange/>
       </div>
     
      
    </div>
  )
}

export default Home