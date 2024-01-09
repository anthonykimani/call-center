'use client'

import { AboutImg, Expert, Shield } from "@/constants/svg";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row-reverse md:items-start p-2">
      <Image src={AboutImg} alt="nexus-logo" className="w-full md:w-[50%]" />
      <article className="flex flex-col justify-around md:justify-between p-2 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-[20px] text-[#060640]">
          About us
        </h1>
        <h2 className="text-base mb-[20px]">
          ELROI Tech emerged from a vision to innovate how businesses interact
          with their customers. Our founders, equipped with extensive experience
          in cloud technology and customer service management, saw the potential
          in Amazon Connect to transform customer interactions.
        </h2>
        <div className="flex flex-col">
          <div className="h-auto my-4 flex flex-col justify-around">
            <Image src={Shield} alt="nexus-logo" className="my-1" />
            <h4 className="text-2xl font-semibold ">Financial Inclusion</h4>
            <h5 className="text-base">
              Safe and secured promotion strategy is one of the most important
              processes in marketing.
            </h5>
          </div>
          <div className="h-auto my-4 flex flex-col justify-around">
            <Image src={Expert} alt="nexus-logo" className="my-1" />
            <h4 className="text-2xl font-semibold ">
              Stability Meets Simplicity
            </h4>
            <h5 className="text-base">
              We supports your marketing voices to reach your target audience,
              creates interest.
            </h5>
          </div>
        </div>
      </article>
    </div>
  );
};

export default About;
