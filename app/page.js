"use client"
import TopHeader from "../components/TopHeader"
import CarouselItem from "../components/CarouselItem"
import Header from "../components/Header"
import Shopfourspecial from "../components/Shopfourspecial"

import React from 'react'
import Achieved from "../components/Achieved"
import StoriesChange from "../components/StoriesChange"
import {Button} from "@nextui-org/button";
import ShopProduct from "../components/ShopProduct"
import Section from "../components/Section"

const Home = () => {
  return (
    <div>
      <div className=" ">
        <TopHeader/>
      <Header/> 
      <div className="p-1">
      <CarouselItem/>
      </div>
      <div><Shopfourspecial/></div>
     <div className="p-6">
      <h1 className="text-2xl text-center mb-6 underline" >Our Popular Products</h1>
     <ShopProduct/>
     </div>
    
     <div>
     <Achieved/>
     </div>
     
     <div>
      <Section/>
     </div>
    
    <div>
    <StoriesChange/>
    </div>

    {/* <Footer/> */}
       </div>
     
      
    </div>
  )
}

export default Home