const FormsAbout = () => {
  return (
    <div>
      <section className="flex flex-col md:flex-row justify-around items-center bg-about-form-bg bg-no-repeat bg-cover text-white font-circular-light p-1 md:p-10 w-screen">
        <article
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-col justify-around w-full md:w-[500px] h-full md:h-[600px] "
        >
          <h3 className="text-5xl font-circular-bold font-semibold leading-[70px] ">
            Get in touch with Elroi Tech
          </h3>
          <p className="text-gray-400">
            At ELROI Tech, we&apos;re committed to elevating the customer
            service experience by harnessing the power of cloud-based
            technologies. Our mission is to assist businesses of all sizes, from
            local startups to global corporations, in creating efficient,
            responsive, and technologically advanced contact centers.
          </p>
          <hr />
          <div className="flex flex-col justify-around">
            <div className="flex flex-col md:flex-row justify-between">
              <span>
                <h3 className="text-gray-400 my-[10px]">Email</h3>
                <p>admin@elroitech.com</p>
              </span>
              <span>
                <h3 className="text-gray-400 my-[10px]">Number</h3>
                <p>254 83 908 017</p>
              </span>
            </div>
            <span>
              <h3 className="text-gray-400 my-[10px]">Address</h3>
              <p>30 Court Street, James Street</p>
            </span>
          </div>
        </article>
        <form
          data-aos="fade-left"
          data-aos-duration="1000"
          className="flex flex-col bg-white bg-opacity-5 p-5 rounded-xl  w-[300px] xsm:w-[400px] md:w-[550px] "
        >
          <span className="flex items-center bg-white bg-opacity-10 px-4 py-3 rounded-lg my-2">
            <i className="bx bx-user bx-sm"></i>
            <input
              type="text"
              className="bg-white bg-opacity-0 ml-2 w-full "
              placeholder="Full name"
            />
          </span>
          <span className="flex items-center bg-white bg-opacity-10 px-4 py-3 rounded-lg my-2">
            <i className="bx bx-envelope bx-sm"></i>
            <input
              type="email"
              className="bg-white bg-opacity-0 ml-2 w-full "
              placeholder="Email"
            />
          </span>
          <span className="flex items-center bg-white bg-opacity-10 px-4 py-3 rounded-lg my-2">
            <textarea
              className="bg-white bg-opacity-0 w-full "
              name="messages"
              id=""
              cols={30}
              rows={10}
            ></textarea>
          </span>
          <input
            type="submit"
            value="Contact Us"
            className="bg-white text-black p-3 rounded-lg font-bold my-2"
          />
        </form>
      </section>
    </div>
  );
};

export default FormsAbout;
