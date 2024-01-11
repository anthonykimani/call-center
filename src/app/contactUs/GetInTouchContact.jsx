const GetInTouchContact = () => {
  return (
    <div>
      {" "}
      <section className="flex flex-col lg:flex-row justify-around items-center bg-no-repeat px-3 bg-cover text-black font-circular-light p-1 md:p-10 ">
        <article
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-col justify-around w-full md:w-[500px] h-full md:h-[600px] "
        >
          <h3 className="text-3xl font-semibold md:leading-[70px] ">
            Get in touch with Us
          </h3>
          <p className="text-gray-400 py-3">
            Helping you through the recruitment journey, whether you are a
            business or candidate looking for your next role, youre our number
            one priority. Get in touch today.
          </p>
          <div></div>
          <hr />
          <div className="flex flex-col justify-around">
            <div className="flex flex-col md:flex-row justify-between">
              <span>
                <h3 className="text-gray-400 my-[10px]">Email</h3>
                <p>admin@yakkasolutions.com.au</p>
              </span>
              <span>
                <h3 className="text-gray-400 my-[10px]">Number</h3>
                <p>0483 908 017</p>
              </span>
            </div>
            <span>
              <h3 className="text-gray-400 my-[10px]">Address</h3>
              <p>30 Court Street, Parkes NSW 2870</p>
            </span>
          </div>
        </article>
        <article
          data-aos="fade-left"
          data-aos-duration="1000"
          className=" lg:w-1/2 lg:object-fit"
        >
          <form
            data-aos="fade-left"
            data-aos-duration="1000"
            className="flex flex-col bg-[#CDE0E680] p-5 md:p-10 m-5 rounded-2xl "
          >
            <span className="flex items-center bg-white w-auto  px-4 py-3 rounded-lg my-2">
              <i className="bx bx-user bx-sm"></i>
              <input
                type="text"
                className="bg-white bg-opacity-0 ml-2 w-full "
                placeholder="Full name"
              />
            </span>
            <span className="flex items-center bg-white w-auto  px-4 py-3 rounded-lg my-2">
              <i className="bx bx-envelope bx-sm"></i>
              <input
                type="email"
                className="bg-white bg-opacity-0 ml-2 w-full "
                placeholder="Email"
              />
            </span>
            <span className="flex items-center bg-white w-auto  px-4 py-3 rounded-lg my-2">
              <textarea
                className="bg-white bg-opacity-0 w-full "
                name="messages"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </span>
            <button className="text-white p-3 rounded-lg font-bold my-2">
              Book Now
            </button>
          </form>
        </article>
      </section>
    </div>
  );
};

export default GetInTouchContact;
