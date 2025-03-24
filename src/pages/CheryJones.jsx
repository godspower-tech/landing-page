import React from 'react'
import Navbar from '../components/cheryjones/Navbar'
import '../assets/cheryjones/style.css'
import Hero from '../components/cheryjones/Hero'
import About from '../components/cheryjones/About'
import Testimonials from '../components/cheryjones/Testimonials'
import CallToAction from '../components/cheryjones/CallToAction'
import Footer from '../components/cheryjones/Footer'

const CheryJones = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
    </div>
  )
}

export default CheryJones