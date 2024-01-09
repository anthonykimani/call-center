import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import About from './components/About'
import Partners from './components/Partners'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import Articles from './components/Articles'
import { NavigationMenuDemo } from './components/NavigationMenu'

const Home = () => {
  return (
    <section className='bg-[#EDF6F3] font-poppins'>
        <Navbar />
        
        <HeroSection />
        <Services />
        <About />
        <Partners />
        <Articles />
        <Subscribe />
        <Footer />
    </section>
  )
}

export default Home