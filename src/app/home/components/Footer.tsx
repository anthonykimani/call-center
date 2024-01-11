"use client";

import { ElroiLogo, ElroiLogoAlt } from "@/constants/svg";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="p-4 xsm:p-20 bg-[#060640] text-white w-screen ">
      <div className="max-w-[768px] xl:max-w-[1280px] grid grid-cols-1 xsm:grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="flex flex-col space-y-4"
        >
          <Image
            src={ElroiLogoAlt}
            alt="nexus-logo"
            className="md:w-[80%] mb-10"
          />
          <footer>
            Empowering Customer Service Excellence: Leveraging Cloud-Based
            Technologies at ELROI Tech
          </footer>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="flex flex-col space-y-4"
        >
          <h2 className="font-bold text-2xl">Resources</h2>
          <div className="flex flex-col space-y-2 text-sm text-[#ADB9C7] ">
            <a rel="noopener noreferrer" href="#" className="hover:text-white">
              Help Center
            </a>
            <a rel="noopener noreferrer" href="#" className="hover:text-white">
              Platform Status
            </a>
            <a rel="noopener noreferrer" href="#" className="hover:text-white">
              Partners
            </a>
            <a rel="noopener noreferrer" href="#" className="hover:text-white">
              Jobs
            </a>
            <a rel="noopener noreferrer" href="#" className="hover:text-white">
              Blog
            </a>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-col space-y-4"
        >
          <h2 className="font-bold text-2xl">Company</h2>
          <div className="flex flex-col space-y-2 text-sm text-[#ADB9C7] ">
            <a rel="noopener noreferrer" href="#" className="hover:text-white">
              Our Team
            </a>
            <a rel="noopener noreferrer" href="#" className="hover:text-white">
              About Us
            </a>
            <a rel="noopener noreferrer" href="#" className="hover:text-white">
              Contact Us
            </a>
            <a rel="noopener noreferrer" href="#" className="hover:text-white">
              Career
            </a>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="flex flex-col space-y-4"
        >
          <h2 className="font-bold text-2xl">Contact</h2>
          <div className="flex flex-col space-y-2 text-sm text-[#ADB9C7] ">
            <a rel="noopener noreferrer" href="#" className="hover:text-white">
              Caxton House, Nairobi CBD
            </a>
            <span className="flex">
              <a rel="noopener noreferrer" href="#" className="hover:text-white">
                <FacebookLogo size={24} color="#ffffff" weight="fill" />
              </a>
              <a rel="noopener noreferrer" href="#" className="hover:text-white">
                <TwitterLogo size={24} color="#ffffff" weight="fill" />
              </a>
              <a rel="noopener noreferrer" href="#" className="hover:text-white">
                <InstagramLogo size={24} color="#ffffff" weight="fill" />
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row  items-start justify-around px-6 pt-12 text-sm">
        <span className="mb-1">© Copyright 2024. All Rights Reserved.</span>
        <span className="mb-1">Community guidelines</span>
        <span className="mb-1">Terms</span>
        <span className="mb-1">Privacy policy</span>
      </div>
    </footer>
  );
};

export default Footer;
