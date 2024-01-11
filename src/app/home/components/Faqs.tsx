import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const Faqs = () => {
  return (
    <main className="flex flex-col items-center max-w-[1280px] mt-[50px]">
      <h1
        data-aos="fade-up"
        data-aos-duration="500"
        className=" font-extrabold text-4xl"
      >
        Frequently Asked Questions
      </h1>
      <h4 data-aos="fade-up" data-aos-duration="1000" className="w-[85%] text-center my-10">
      Got questions? Our FAQ section is designed to provide quick, clear answers about our cloudbased contact centers, Amazon Connect integrations, and virtual call center operations.
      </h4>
      <Accordion type="single" collapsible className="lg:min-w-[1024px] md:min-w-[768px] sm:min-w-[640px] xsm:min-w-[450px]">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do Amazon Connect Center work?</AccordionTrigger>
          <AccordionContent>
          Amazon Connect is designed to help businesses set up and manage customer contact centers in the cloud. Here are some key features and components of Amazon Connec
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do virtual call center work?</AccordionTrigger>
          <AccordionContent>
          Virtual call centers operate in a cloud-based environment, allowing agents to work from various locations rather than being physically present in a centralized office
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it Cloud Based?</AccordionTrigger>
          <AccordionContent>
          Yes, virtual call centers are typically cloud-based. In a cloud-based virtual call center model, the infrastructure, software, and services are hosted in the cloud rather than being physically located on-premises.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default Faqs;
