'use client'

import Image from "next/image";
import React, { useState } from "react";
import { List, XCircle } from "@phosphor-icons/react";
import { ElroiLogo } from "@/constants/svg";
import { NavigationMenuDemo } from "./NavigationMenu";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      <div className="flex justify-between lg:justify-around items-center p-3 text-white">
        <div className="min-w-[200px] w-auto flex items-center">
          <Image src={ElroiLogo} alt="atlas-logo" className="w-auto" />
        </div>
        <div className="block lg:hidden">
          <List
            size={32}
            color="#b8b8b8"
            weight="fill"
            className="block lg:hidden"
            onClick={toggleMenu}
          />
        </div>
        <div
          className="absolute top-0 left-0 right-0 sm:block bg-[#060640] text-white p-5 sm:p-0 min-w-[200px] w-[100%] min-h-[800px] h-[100%]  "
          style={showMenu ? { display: "block" } : { display: "none" }}
        >
          <XCircle
            size={32}
            color="#b8b8b8"
            weight="fill"
            onClick={toggleMenu}
          />
          <ul className="flex flex-col sm:flex-row justify-around text-base font-semibold text-[#828297] w-auto">
            <li className="my-2 mx-2 w-[100%] min-w-[100px] ">Home</li>
            <li className="my-2 mx-1 w-[100%] min-w-[100px] ">About</li>
            <li className="my-2 mx-2 w-[100%] min-w-[100px] ">Services</li>
            <li className="my-2 mx-2 w-[100%] min-w-[100px] ">Review</li>
            <li className="my-2 mx-2 w-[100%] min-w-[100px] ">Support</li>
          </ul>
        </div>

        <div className="hidden md:block text-black">
        <NavigationMenuDemo />
        </div>
        <button className=" hidden lg:block py-3 px-6 border bg-[#060640] rounded-lg text-white">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
