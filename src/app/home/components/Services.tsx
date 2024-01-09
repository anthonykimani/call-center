import { Call, Contact, Data } from "@/constants/svg";
import { servicesSource } from "@/helpers/servicesSource";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className=" bg-service-bg bg-cover bg-top md:p-20">
      <main className="flex flex-col items-center text-center mb-10">
        <h1 className=" font-extrabold text-4xl my-[30px]">Services</h1>
        <h4 className="w-[85%]">
          We offer two primary services: consultancy for setting up Amazon
          Connectbased contact centers and managing virtual call centers. Our
          consultancy services involve customizing Amazon Connect to fit your
          business needs, integrating AI and data analytics for enhanced
          customer interaction
        </h4>
      </main>
      <article className="flex overflow-x-scroll hide-scroll-bar p-5">
        {servicesSource.map((service, index) => {
          return (
            <div
              key={service.title}
              className="bg-white shadow-lg  border rounded-md min-w-[300px] m-2 p-4 hover:border-[#236BF4] hover:cursor-pointer"
            >
              <Image src={service.img} alt="" className="mb-3 w-[36px]" />
              <h3 className="font-bold text-lg mb-3">0{index + 1}. {service.title}</h3>
              <h5>{service.description}</h5>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default Services;
