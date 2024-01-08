import { HeroImg } from "@/constants/svg";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <main className="flex flex-col md:flex-row items-center p-2 md:p-10 bg-hero-bg">
      <article className="flex flex-col justify-around md:justify-between md:h-[300px] w-[100%]">
        <h2 className="text-[#060640] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-[40px] lg:leading-[50px] xl:leading-[60px] mb-[20px]">
          Revolutionizing Customer Engagement with CloudBased
          Solutions
        </h2>
        <h2 className="text-base md:text-lg font-light text-black mb-[20px]">
          Empowering Customer Service Excellence: Leveraging Cloud-Based
          Technologies at ELROI Tech
        </h2>
        <button className="bg-[#060640] p-3 text-white w-[200px] rounded-md font-bold">Book a Consultation</button>
      </article>
      <Image src={HeroImg} alt="nexus-logo" className="w-full md:w-[50%]" />
    </main>
  );
};

export default HeroSection;
