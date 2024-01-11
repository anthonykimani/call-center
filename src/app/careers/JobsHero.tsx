import Image from "next/image";

import { HeroImg, jobsHero } from "@/constants/svg";

const JobsHero = () => {
  return (
    <div>
      <section className="hero-section flex flex-col md:flex-row lg:justify-center justify-around bg-[#ECF9FF]">
        <article data-aos="fade-right" data-aos-duration="1000" className="flex flex-col justify-center items-center font-circular-light lg:w-[500px] md:w-[350px] md:ml-5">
          <h2 className="lg:text-6xl md:text-4xl xsm:text-5xl text-4xl font-semibold lg:w-[500px] md:w-[350px] leading-[80px] px-4">
            Job Search
          </h2>
          <h4 className="my-3 lg:w-[500px] md:w-[350px] text-[#64748B] px-4 ">
            Here at Elroi Tech we strive to ensure we have roles available
            at all levels across all locations globally.
          </h4>
          <form className="flex flex-col p-5 rounded-xl w-full">
            <div className="flex flex-col md:flex-row">
              <span className="flex items-center bg-[#FFFFFF] border mx-2 border-[#E2E8F0] text-[#94A3B8] px-4 py-3 rounded-md my-2">
                <input
                  type="text"
                  className="bg-white outline-none bg-opacity-0 ml-2 w-full"
                  placeholder="Job Title..."
                />
              </span>
              <span className="flex items-center bg-[#FFFFFF] border mx-2 border-[#E2E8F0] text-[#94A3B8] px-4 py-3 rounded-md my-2">
                <input
                  type="text"
                  className="bg-white outline-none bg-opacity-0 ml-2 w-full"
                  placeholder="Location..."
                />
              </span>
            </div>            
            <button className="p-3 rounded-lg my-2">
               Get Started
            </button>
          </form>

        </article>
        <Image
        data-aos="fade-up"
        data-aos-duration="1000"
        src={jobsHero}
        alt="nexus-logo"
        className="w-full md:w-[50%]"
      />
      </section>
    </div>
  );
};

export default JobsHero;
