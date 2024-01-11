import construction from "../../assets/svg/construction.svg";
import user from "../../assets/svg/user.svg";
import location from "../../assets/svg/location.svg";

const SelectedJob = () => {
  return (
    <div>
        <section className="lg:px-[100px] px-[10px] py-[50px] bg-[#F7F3ED] font-circular-light">
        <span>
          <h3 className="flex items-center my-[20px]"><i className='bx bx-chevron-left bx-sm'></i> Back to Jobs Page</h3>
          <article>
            <div className="bg-white xsm:p-10">
              <div
                data-aos="zoom-in"
                data-aos-duration="3"
                className="md:border border-[#E2E8F0] pt-4 px-2  rounded-lg flex flex-col justify-around "
              >
                <span className="flex justify-between py-3">
                  <h3 className="font-semibold text-xl">Lorem Ipsum</h3>
                  <button className="text-white bg-[#036280] md:w-[150px] rounded-lg p-2">
                    Apply Now
                  </button>
                </span>
                <span className="flex flex-col md:flex-row ">
                  <li className="list-none p-1 mx-1 flex flex-row items-center ">
                    <img src={construction} alt="" className="mx-2" />
                    Construction
                  </li>
                  <li className="list-none p-1 mx-1 flex flex-row items-center">
                    <img src={location} alt="" className="mx-2" />
                    Australia
                  </li>
                  <li className="list-none p-1 mx-1 flex flex-row items-center">
                    <img src={user} alt="" className="mx-2" />
                    Permanent
                  </li>
                </span>
                <hr />
                <div className="flex flex-col border border-t-2 border-gray-200  xl:flex-row justify-around px-4">
                  <div className="flex flex-col  lg:flex-row justify-around w-full py-5">
                    <span className=" ">
                      <h3 className="text-gray-400 my-[10px]">Location</h3>
                      <p className="font-semibold">
                        30 Court Street, Parkes NSW 2870
                      </p>
                    </span>
                    <span className="">
                      <h3 className="text-gray-400 my-[10px]">Industry</h3>
                      <p className="font-semibold">Construction</p>
                    </span>
                    <span>
                      <h3 className="text-gray-400 my-[10px]">Salary Range</h3>
                      <p className="font-semibold">$90,000 -$100,000</p>
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-2xl my-6">Company</h3>
                  <p className="text-gray-600">
                    This company is an Australian-owned water filtration company
                    with over 20 years of industry experience. They engineer
                    water filtration solutions for the commercial, industrial,
                    and healthcare sectors and provide their customers with
                    world-leading innovative products and expert advice. They
                    are on the hunt for a passionate and hard-working service
                    technician!
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-2xl my-6">Perks</h3>
                  <ul>
                    <li className="py-1">•  Australian Owned Business</li>
                    <li className="py-1">•  Great culture - work/life balance is important</li>
                    <li className="py-1">•  $90000 - $100,000 + car + super </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-2xl my-6">Perks</h3>
                  <ul>
                    <li className="py-1">•  
                      Provide scheduled maintenance, breakdown
                      maintenance/repair, plant refurbishment, installation,
                      commissioning, and operator training of water filtration
                      and treatment equipment across various sectors primarily
                      healthcare, commercial and industrial.
                    </li>
                    <li className="py-1">•  
                      Promoting Company Products, services and spare parts
                    </li>
                    <li className="py-1">•  
                      Identifying and proactively pursing new business/customer
                      opportunities/leads{" "}
                    </li>
                    <li>
                    • Be available on a 24-hour support roster to assist
                      contracts as/when required.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-2xl my-6">Perks</h3>
                  <ul>
                    <li className="py-1">•  Demonstrated skills in water treatment servicing</li>
                    <li className="py-1">•  
                      Previous experience in a Service Technician or similar
                      role
                    </li>
                    <li className="py-1">•  Sufficient problem-solving ability</li>
                    <li className="py-1">•  Ability to work autonomously - self-starter</li>
                    <li className="py-1">•  
                      Excellent communication skills - great at relationship
                      building
                    </li>
                    <li className="py-1">•  
                      Ability to adapt to different client needs and
                      expectations
                    </li>
                    <li className="py-1">•  
                      Provide input for improvement and actively search for new
                      business opportunities
                    </li>
                    <li className="py-1">•  
                      Passionate, attention to detail, and customer-centric
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </span>
      </section>
    </div>
  )
}

export default SelectedJob