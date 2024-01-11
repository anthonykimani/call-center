import Articles from "@/app/home/components/Articles";
import { Conference } from "@/constants/img";
import Image from "next/image";
import React from "react";

const BlogHero = () => {
  return (
    <main className="max-w-[1280px]">
      <article className="w-full md:p-3 m-2 rounded-md hover:cursor-pointer flex flex-col items-center">
        <Image
          src={Conference}
          alt=""
          className=" rounded-md"
        />
        <h4 className="my-2">Scaling your business to Greater Heights,</h4>
        <p className="text-opacity-20">November 30, 2023</p>
      </article>
      <Articles />
    </main>
  );
};

export default BlogHero;
