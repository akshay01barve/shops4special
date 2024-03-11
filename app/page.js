"use client";
import TopHeader from "../components/TopHeader";
import CarouselItem from "../components/CarouselItem";
import Header from "../components/Header";
import Shopfourspecial from "../components/Shopfourspecial";

import React from "react";
import Achieved from "../components/Achieved";
import StoriesChange from "../components/StoriesChange";
import { Button } from "@nextui-org/button";
import ShopProduct from "../components/ShopProduct";
import Section from "../components/Section";
import Possiblities from "../components/Possiblities";
import Footer from "../components/Footer";
import SectionShop4 from "../components/SectionShop4";

const Home = () => {
  return (
    <div>
      <div className=" ">
        {/* <TopHeader/> */}
        <Header />
        <div className="p-1">
          {/* <CarouselItem/> */}
          <Possiblities />
        </div>
      
        <div>
          <Shopfourspecial />
        </div>
        <div>
          <SectionShop4/>
        </div>
        <div className="p-6">
          <h1 className="text-2xl text-center mb-6 font-semibold underline ">
            Our Popular Products
          </h1>
          <ShopProduct />
        </div>

       

        <div>
          <Section />
        </div>
        {/* <div>
          <Achieved />
        </div> */}

        {/* <div>
          <StoriesChange />
        </div> */}

        <Footer />
      </div>
    </div>
  );
};

export default Home;
