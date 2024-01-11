"use client";

import Image from "next/image";
import React, { useState } from "react";
import { List, XCircle } from "@phosphor-icons/react";
import { ElroiLogo } from "@/constants/svg";
import { NavigationMenuDemo } from "./NavigationMenu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="">
      <div className="flex justify-between lg:justify-around items-center p-3 text-white w-screen">
        <div className="min-w-[200px] w-auto flex items-center">
          <Image src={ElroiLogo} alt="atlas-logo" className="w-auto" />
        </div>
        <div className="block md:hidden">
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
        <Dialog>
          <DialogTrigger asChild>
            <button className=" hidden lg:block py-3 px-6 border bg-[#060640] hover:bg-[#236BF4] rounded-lg text-white font-semibold">
              Contact
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
      </div>
    </div>
  );
};

export default Navbar;
