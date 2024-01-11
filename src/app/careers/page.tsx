'use client'

import Footer from "../home/components/Footer";
import Navbar from "../home/components/Navbar";
import JobsHero from "./JobsHero";
import JobsSearch from "./JobsSearch";

export default function Careers() {
  return (
    <section className="font-poppins overflow-hidden">
      <Navbar />
      <JobsHero />
      <JobsSearch />
      <Footer />
    </section>
  )
}
