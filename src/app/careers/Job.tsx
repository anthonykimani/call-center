
import { useState } from "react";
import Image from "next/image";
import { cash, construction, location, user } from "@/constants/svg";


const Job = ({
  id,
  jobTitle,
  timePosted,
  jobsTags,
  jobDescription,
  salaryRange,
}:any) => {

  const [ jobId, setJobId ] = useState(1);

  const handleApply = () => {
    console.log(jobId, "dkkdj");
    setJobId(id);
  };

  return (
    <div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="md:border border-[#E2E8F0] pt-4 px-2  rounded-lg xsm:xsm:h-[350px] flex flex-col justify-around "
      >
        <span className="flex justify-between py-3">
          <h3 className="font-semibold text-xl"> {jobTitle} </h3>
          <p className="text-[#94A3B8]">{timePosted}</p>
        </span>
        <span className="flex flex-col md:flex-row ">
          <li className="list-none p-1 mx-1 flex flex-row items-center ">
            
            <Image src={construction} alt="" className="mx-2" />
            {jobsTags[0]}
          </li>
          <li className="list-none p-1 mx-1 flex flex-row items-center">
            <Image src={location} alt="" className="mx-2" />
            {jobsTags[1]}
          </li>
          <li className="list-none p-1 mx-1 flex flex-row items-center">
            <Image src={user} alt="" className="mx-2" />
            {jobsTags[2]}
          </li>
        </span>
        <hr />
        <h4 className="text-[#64748B] my-4">{jobDescription}</h4>
        <span className="flex flex-col w-full py-4 md:flex-row-reverse justify-between">
          <p className="font-semibold  mx-1 flex flex-row items-center">
            <Image src={cash} alt="" className="m-4" />
            {salaryRange}
          </p>
          <button
            id={id}
            className="text-white bg-[#060640] md:w-[150px] rounded-lg p-2"
            onClick={() => handleApply()}
          >
            Apply Now
          </button>
        </span>
      </div>
    </div>
  );
};

export default Job;
