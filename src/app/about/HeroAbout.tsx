import { ElroiLogo, aboutHeroSectionImage } from "@/constants/svg";
import logo from "../../assets/svg/logo.svg";
import Image from "next/image";


const HeroAbout = () => {
  return (
    <div>
      <section className="hero-section flex flex-col md:flex-row justify-center">
        <article  data-aos="fade-right" data-aos-duration="1000" className="flex flex-col justify-center font-circular-light lg:pl-10 lg:h-screen lg:w-1/2 lg:object-fit md:w-[350px] md:ml-5">
          <div className="flex flex-row px-4">
            <Image src={ElroiLogo} alt="" />
          </div>
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold font-circular-bold lg:w-[500px] md:w-[350px] leading-[50px] md:leading-[80px] px-4 my-5">
            About Elroi Tech
          </h2>
          <h4 className="my-3 lg:w-[500px] md:w-[350px] text-[#64748B] px-4 ">
          ELROI Tech emerged from a vision to innovate how businesses interact
            with their customers. Our founders, equipped with extensive
            experience in cloud technology and customer service management, saw
            the potential in Amazon Connect to transform customer interactions.
          </h4>
        </article>
        <Image
         data-aos="fade-left" data-aos-duration="1000"
          src={aboutHeroSectionImage}
          alt=""
          className="lg:h-screen lg:w-1/2 lg:object-fit md:w-[350px]"
        />
      </section>
    </div>
  );
};

export default HeroAbout;
