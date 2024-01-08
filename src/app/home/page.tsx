import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import About from './components/About'

const Home = () => {
  return (
    <section className='bg-[#EDF6F3] font-poppins'>
        <Navbar />
        <HeroSection />
        <Services />
        <About />
    </section>
  )
}

export default Home