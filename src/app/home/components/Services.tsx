"use client";

import { Call, Contact, Data } from "@/constants/svg";
import { servicesSource } from "@/helpers/servicesSourceOne";
import { servicesSourceTwo } from "@/helpers/servicesSourceTwo";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className=" bg-service-bg bg-cover bg-top md:p-20 max-w-[1280px]">
      <main className="flex flex-col items-center text-center mb-10">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          className=" font-extrabold text-4xl my-[30px]"
        >
          Services
        </h1>
        <h4 data-aos="fade-up" data-aos-duration="1000" className="w-[85%]">
          We offer two primary services: consultancy for setting up Amazon
          Connectbased contact centers and managing virtual call centers. Our
          consultancy services involve customizing Amazon Connect to fit your
          business needs, integrating AI and data analytics for enhanced
          customer interaction
        </h4>
      </main>
      <article
        data-aos="fade-up"
        data-aos-duration="1500"
        className="flex overflow-x-scroll hide-scroll-bar py-5"
      >
        {servicesSource.map((service, index) => {
          return (
            <div
              key={service.title}
              className="bg-white shadow-lg  border rounded-md min-w-[300px] m-2 p-4 hover:border-[#236cf451] hover:cursor-pointer"
            >
              <Image src={service.img} alt="" className="mb-3 w-[36px]" />
              <h3 className="font-bold text-lg mb-3">
                0{index + 1}. {service.title}
              </h3>
              <h5>{service.description}</h5>
            </div>
          );
        })}
      </article>
      <article
        data-aos="fade-up"
        data-aos-duration="2000"
        className="flex overflow-x-scroll hide-scroll-bar py-5"
      >
        {servicesSourceTwo.map((service, index) => {
          return (
            <div
              key={service.title}
              className="bg-white shadow-lg  border rounded-md min-w-[300px] m-2 p-4 hover:border-[#236cf451] hover:cursor-pointer"
            >
              <Image src={service.img} alt="" className="mb-3 w-[36px]" />
              <h3 className="font-bold text-lg mb-3">
                0{index + 6}. {service.title}
              </h3>
              <h5>{service.description}</h5>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Services;
