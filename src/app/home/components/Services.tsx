import { Call, Contact, Data } from "@/constants/svg";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className=" bg-service-bg bg-cover bg-top md:p-20">
      <main className="flex flex-col items-center text-center mb-10">
        <h1 className=" font-extrabold text-4xl my-[30px]">Services</h1>
        <h4 className="w-[85%]">
          Businesses generally promote their brand, products, and services by
          identifying audience.
        </h4>
      </main>
      <article className="flex flex-col md:flex-row justify-around">
        <div className="bg-white shadow-lg p-10 border rounded-md md:w-[400px] m-2 hover:border-[#236BF4] hover:cursor-pointer">
          <Image src={Call} alt="" className="mb-3" />
          <h3 className="font-bold text-lg">
            Consultancy on Amazon connect-based contact centers
          </h3>
        </div>

        <div className="bg-white shadow-lg p-10 border rounded-md md:w-[400px] m-2 hover:border-[#236BF4] hover:cursor-pointer">
          <Image src={Contact} alt="" className="mb-3" />
          <h3 className="font-bold text-lg">Managing virtual call centers</h3>
        </div>

        <div className="bg-white shadow-lg p-10 border rounded-md md:w-[400px] m-2 hover:border-[#236BF4] hover:cursor-pointer">
          <Image src={Data} alt="" className="mb-3" />
          <h3 className="font-bold text-lg">
            Data analytics for enhanced customer interaction
          </h3>
        </div>
      </article>
    </section>
  );
};

export default Services;
