"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HeroImg } from "@/constants/svg";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <main className="flex flex-col md:flex-row items-center p-5 md:p-10 bg-hero-bg bg-cover md:bg-right  max-w-[1280px]">
      <article className="flex flex-col justify-around md:justify-between  w-[100%]">
        <h2
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-[#060640] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-5xl md:leading-[40px] lg:leading-[50px] xl:leading-[60px] mb-[30px]"
        >
          Revolutionizing Customer Engagement with CloudBased Solutions
        </h2>
        <h2
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-base font-light text-black mb-[30px]"
        >
          Empowering Customer Service Excellence: Leveraging Cloud-Based
          Technologies at ELROI Tech
        </h2>

        <Dialog>
          <DialogTrigger asChild>
            <button
              data-aos="fade-up"
              data-aos-duration="1500"
              className="bg-[#060640] hover:bg-[#236BF4] ease-in-out p-3 text-white w-full rounded-md font-bold"
            >
              Book a Consultation
            </button>
          </DialogTrigger>
          <DialogContent className=" font-poppins">
            <DialogHeader className="font-bold">
              Get in touch with Elroi Tech
            </DialogHeader>
            <form className="flex flex-col bg-white bg-opacity-5 rounded-xl">
              <span className="flex items-center bg-white border-2 border-black bg-opacity-10 px-4 py-3 rounded-lg my-2">
                <i className="bx bx-user bx-sm"></i>
                <input
                  type="text"
                  className="bg-white bg-opacity-0 ml-2 w-full outline-none"
                  placeholder="Full name"
                />
              </span>
              <span className="flex items-center bg-white border-2 border-black bg-opacity-10 px-4 py-3 rounded-lg my-2">
                <i className="bx bx-envelope bx-sm"></i>
                <input
                  type="email"
                  className="bg-white bg-opacity-0 ml-2 w-full outline-none"
                  placeholder="Email"
                />
              </span>
              <span className="flex items-center bg-white border-2 border-black bg-opacity-10 px-4 py-3 rounded-lg my-2">
                <textarea
                  className="bg-white bg-opacity-0 w-full outline-none"
                  name="messages"
                  id=""
                  cols={30}
                  rows={10}
                ></textarea>
              </span>
              <input
                type="submit"
                value="Contact Us"
                className="py-3 px-6 border bg-[#060640] hover:bg-[#236BF4] rounded-lg text-white font-semibold"
              />
            </form>
          </DialogContent>
        </Dialog>
      </article>
      <Image
        data-aos="fade-up"
        data-aos-duration="1000"
        src={HeroImg}
        alt="nexus-logo"
        className="w-full md:w-[50%]"
      />
    </main>
  );
};

export default HeroSection;
