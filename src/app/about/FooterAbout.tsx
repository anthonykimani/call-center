"use client";

import { ElroiLogo, ElroiLogoAlt } from "@/constants/svg";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import Image from "next/image";

const FooterAbout = () => {
  return (
    <div className="p-5">
      <section className="flex flex-col md:flex-row justify-around font-circular-light">
        <article className="w-full md:w-[500px]">
          <div>
            <img src={footerLogo} alt="" />
          </div>
          <h4>
            Yakka Solutions acknowledge the Traditional Owners of the land on
            which we work and live, and recognise the continuing connection to
            land, waters and culture. We pay our respects to Elders past,
            present and emerging.
          </h4>
          <span className="flex my-3">
            <img className="" src={supplyLogo} alt="" />
            <img className="ml-5" src={rsaLogo} alt="" />
          </span>
        </article>
        <article className="w-full md:w-[500px] flex flex-col md:flex-row justify-around">
          <div className="flex flex-col justify-between mt-3 md:mt-0 list-none text-gray-500 ">
            <h3 className="font-bold">Company</h3>
            <li>About</li>
            <li>Client</li>
            <li>Jobs</li>
          </div>
          <div className="flex flex-col justify-between mt-3 md:mt-0 list-none text-gray-500 ">
            <h3 className="font-bold">Contact Us</h3>
            <li>admin@yakkasolutions.com.au</li>
            <li>0483 908 017</li>
            <li>Client</li>
            <ul className="flex flex-row">
              <li className="mx-2">
                <img src={linkedinLogo} alt="" />
              </li>
              <li className="mx-2">
                <img src={instagramLogo} alt="" />
              </li>
              <li className="mx-2">
                <img src={facebookLogo} alt="" />
              </li>
            </ul>
          </div>
        </article>
      </section>
      <footer className="font-circular-light flex flex-col md:flex-row  justify-around">
        <span className="py-3">Yakka Solutions Copyright. 2023.</span>
        <span className="py-3">
          Powered by: <img src={xRecruiterLogo} alt="" />{" "}
        </span>
      </footer>
    </div>
  );
};

export default FooterAbout;
