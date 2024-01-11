"use client";

import { Amazon } from "@/constants/svg";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <main className="">
      <h4 className=" font-extrabold text-4xl my-[30px] flex justify-center">
        Our Partners
      </h4>
      <div
        data-aos="fade-up"
        data-aos-duration="500"
        className="flex flex-col md:flex-row items-center justify-around p-5 max-w-[1280px]"
      >
        <div className="md:w-[50%]">
          <h3>
            We proudly partner with leading technology providers, including
            Amazon, to bring you the most advanced and efficient customer
            service solutions.
          </h3>
        </div>
        <div className="bg-white flex justify-around  p-4 overflow-hidden">
          <Image src={Amazon} alt="partner" className="w-[300px]" />
        </div>
      </div>
    </main>
  );
};

export default Partners;
