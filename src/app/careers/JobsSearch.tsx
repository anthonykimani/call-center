import { useState } from "react";
import Job from "./Job";
import { jobsSource } from "../../helpers/jobsSource";

const JobsSearch = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };



  return (
    <div>
      <section className="flex flex-col md:flex-row justify-around font-circular-light p-2 md:p-10 h-full ">
        <article
          className={`md:w-[600px] px-10 ${
            isExpanded ? "h-full" : "h-12 md:h-auto"
          } overflow-y-hidden md:overflow-y-visible `}
        >
          <div>
            <h3 className="font-bold text-xl mt-3">Contract Type</h3>
            <ul>
              <span className="flex justify-between text-[#475569] my-3 p-2 ">
                <li className="py-1">
                  <input type="checkbox" name="" id="" className="py-0 mx-2  " />
                  Permanent
                </li>
                <li className="font-semibold text-sm rounded-[50%] bg-slate-100">
                  12
                </li>
              </span>
              <span className="flex justify-between text-[#475569] my-3 p-2 ">
                <li className="py-1">
                  <input type="checkbox" name="" id="" className="py-0 mx-2  " />
                  Contract
                </li>
                <li className="font-semibold text-sm rounded-[50%] bg-slate-100">
                  12
                </li>
              </span>
              <span className="flex justify-between text-[#475569] my-3 p-2 ">
                <li className="py-1">
                  <input type="checkbox" name="" id="" className="py-0 mx-2  " />
                  Temporary
                </li>
                <li className="font-semibold text-sm rounded-[50%] bg-slate-100">
                  12
                </li>
              </span>
            </ul>
          </div>
          <hr />
          <div>
            <h3 className="font-bold text-xl mt-3">Business Sector</h3>
            <ul>
              <span className="flex justify-between text-[#475569] my-3 p-2 ">
                <li className="py-1">
                  <input type="checkbox" name="" id="" className="py-0 mx-2  " />
                  Amazon VA
                </li>
                <li className="font-semibold text-sm rounded-[50%] bg-slate-100">
                  12
                </li>
              </span>
              <span className="flex justify-between text-[#475569] my-3 p-2 ">
                <li className="py-1">
                  <input type="checkbox" name="" id="" className="py-0 mx-2  " />
                  Contact Agent
                </li>
                <li className="font-semibold text-sm rounded-[50%] bg-slate-100">
                  12
                </li>
              </span>
              <span className="flex justify-between text-[#475569] my-3 p-2 ">
                <li className="py-1">
                  <input type="checkbox" name="" id="" className="py-0 mx-2  " />
                  Sales Tech
                </li>
                <li className="font-semibold text-sm rounded-[50%] bg-slate-100">
                  12
                </li>
              </span>
            </ul>
          </div>
          <hr />
          <div>
            <h3 className="font-bold text-xl mt-3">Job Location</h3>
            <ul>
              <span className="flex justify-between text-[#475569] my-3 p-2 ">
                <li className="py-1">
                  <input type="checkbox" name="" id="" className="py-0 mx-2  " />
                  New South Wales
                </li>
                <li className="font-semibold text-sm rounded-[50%] bg-slate-100">
                  12
                </li>
              </span>
              <span className="flex justify-between text-[#475569] my-3 p-2 ">
                <li className="py-1">
                  <input type="checkbox" name="" id="" className="py-0 mx-2  " />
                  London
                </li>
                <li className="font-semibold text-sm rounded-[50%] bg-slate-100">
                  12
                </li>
              </span>
              <span className="flex justify-between text-[#475569] my-3 p-2 ">
                <li className="py-1">
                  <input type="checkbox" name="" id="" className="py-0 mx-2  " />
                  New York
                </li>
                <li className="font-semibold text-sm rounded-[50%] bg-slate-100">
                  12
                </li>
              </span>
            </ul>
          </div>
          <hr />
        </article>
        <button
          className={`border-2 box-border border-[#E2E8F0]   flex items-center justify-center px-4 py-4  border-solid md:hidden ${
            isExpanded ? "bg-[#036280] text-white" : "bg-white text-black"
          }`}
          onClick={handleExpand}
        >
          {/* <FilterIcon className="w-4 h-4 mr-2 text-black" /> */}
          <span className="text-base text-black">
            {isExpanded ? "Apply Now" : "Filter"}
          </span>
        </button>

        <article className="grid lg:grid-cols-2 grid-cols-1 gap-3 ">
          {jobsSource.map((element)=>(
             <Job key={element.id} id={element.id} jobTitle={element.jobTitle} timePosted={element.timePosted} jobsTags={element.jobTags} jobDescription={element.jobDescription} salaryRange={element.salaryRange} />
          ))}
          
        </article>
      </section>
    </div>
  );
};

export default JobsSearch;
