import React from 'react'
import Navbar from '../home/components/Navbar'
import Footer from '../home/components/Footer'
import BlogHero from './components/BlogHero'

const Blogs = () => {
  return (
    <main className=' xl:flex xl:flex-col xl:items-center font-poppins overflow-hidden'>
        <Navbar />
        <BlogHero />
        <Footer />
    </main>
  )
}

export default Blogs