'use client';

import Faqs from "../home/components/Faqs";
import Footer from "../home/components/Footer";
import Navbar from "../home/components/Navbar";
import FormsAbout from "./FormsAbout";
import HeroAbout from "./HeroAbout";
import InfoAbout from "./InfoAbout";


const About = () => {
  return (
    <section className="bg-[#EDF6F3] font-poppins overflow-hidden xl:flex xl:flex-col xl:items-center">
      <Navbar />
      <HeroAbout />
      <InfoAbout />
      <Faqs />
      <FormsAbout />
      <Footer />
    </section>
  );
};

export default About;
