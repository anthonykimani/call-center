import { Amazon } from "@/constants/svg";
import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <main className="flex flex-col items-center">
      <h4 className=" font-extrabold text-4xl my-[30px]">Our Partners</h4>
      <h3>Some of the companies we are proud to work with</h3>
      <div className='bg-white flex flex-wrap justify-around w-screen p-4 overflow-hidden'>
        <Image src={Amazon} alt='partner' className='p-3' />
        <Image src={Amazon} alt='partner' className='p-3' />
        <Image src={Amazon} alt='partner' className='p-3' />
        <Image src={Amazon} alt='partner' className='p-3' />
        <Image src={Amazon} alt='partner' className='p-3' />
    </div>
    </main>
  );
};

export default Partners;
