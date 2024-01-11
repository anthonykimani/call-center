import { infoImage } from "@/constants/svg";
import Image from "next/image";


const InfoAbout = () => {
  return (
    <div>
        <section className="flex flex-col lg:flex-row justify-center items-center font-circular-light my-10">
        <Image data-aos="fade-right" data-aos-duration="1000" src={infoImage} alt="" className="lg:w-[500px] md:w-[600px]" />
        <article data-aos="fade-left" data-aos-duration="1000" className="w-full md:w-[600px] lg:ml-5 p-5 flex flex-col justify-around">
          <h3 className="md:text-3xl text-3xl font-bold md:font-normal font-circular-medium text-black mt-3">
          Empowering Customer Service Excellence: Leveraging Cloud-Based
          Technologies at ELROI Tech
          </h3>
          <p className="text-[#64748B] text-lg mt-3">
          ELROI Tech emerged from a vision to innovate how businesses interact
            with their customers. Our founders, equipped with extensive
            experience in cloud technology and customer service management, saw
            the potential in Amazon Connect to transform customer interactions.
          </p>
        </article>
      </section>
    </div>
  )
}

export default InfoAbout