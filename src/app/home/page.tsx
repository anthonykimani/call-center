"use client";

import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import About from "./components/About";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Subscribe from "./components/Subscribe";
import Articles from "./components/Articles";
import Testimonial from "./components/Testimonial";
import AOS from "aos";
import "aos/dist/aos.css";
import Faqs from "./components/Faqs";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-[#EDF6F3] font-poppins overflow-hidden xl:flex xl:flex-col xl:items-center">
      <Navbar />
      <HeroSection />
      <Services />
      <About />
      <Partners />
      <Articles />
      <Testimonial />
      <Faqs />
      <Subscribe />
      <Footer />
    </section>
  );
};

export default Home;
