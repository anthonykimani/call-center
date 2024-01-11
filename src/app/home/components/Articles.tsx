"use client";

import { article } from "@/helpers/articleSource";
import React from "react";
import Article from "./Article";

const Articles = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="500"
      className="p-5 md:p-28 max-w-[1280px]"
    >
      <h3 className="font-extrabold text-4xl my-[30px] flex justify-center">Notable Articles</h3>
      <main className="flex overflow-x-scroll hide-scroll-bar">
        {article.map((element, index) => {
          return (
            <Article
              key={index}
              image={element.image}
              title={element.title}
              date={element.date}
            />
          );
        })}
      </main>
    </section>
  );
};

export default Articles;
