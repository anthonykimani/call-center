import { Amazon } from "@/constants/svg";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <main className="flex flex-row items-center justify-around">
      <div>
        <h4 className=" font-extrabold text-4xl my-[30px]">Our Partners</h4>
        <h3>Some of the companies we are proud to work with</h3>
      </div>
      <div className="bg-white flex justify-around  p-4 overflow-hidden">
        <Image src={Amazon} alt="partner" className="p-3 w-[70%]" />
      </div>
    </main>
  );
};

export default Partners;
