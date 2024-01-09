'use client'

import { Amazon } from "@/constants/svg";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <main data-aos="fade-up" data-aos-duration="500" className="flex flex-col md:flex-row items-center justify-around p-5">
      <div>
        <h4 className=" font-extrabold text-4xl my-[30px]">Our Partners</h4>
        <h3>Some of the companies we are proud to work with</h3>
      </div>
      <div className="bg-white flex justify-around  p-4 overflow-hidden">
        <Image src={Amazon} alt="partner" className="w-[300px]" />
      </div>
    </main>
  );
};

export default Partners;
