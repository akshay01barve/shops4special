"use client"
import React from 'react'
import Header from "../../components/Header"
import TopHeader from '../../components/TopHeader'
import About from '../../components/About'
import Footer from '../../components/Footer'

const AboutUs = () => {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <div>
        <About/>
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs