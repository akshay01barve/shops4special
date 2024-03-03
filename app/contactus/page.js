"use client"
import React from 'react'
import Header from "../../components/Header"
import TopHeader from '../../components/TopHeader'
import Contact from '../../components/Contact'
import Footer from '../../components/Footer'

const ContactUs = () => {
  return (
    <div>
      <TopHeader/>
      <Header/>
      <div>
        <Contact/>
      </div>
      <Footer/>
    </div>
  )
}

export default ContactUs