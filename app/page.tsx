import NavBar from "@/components/navBar";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Home() {
  return (
    <>
      <NavBar />
      <div>
        <div
          className="flex text-white flex-col items-start bg-primary 
        h-1/2  w-full p-4  "
        >
          <h1 className=" font-ro  text-2xl ">
            Infolib Technology offers <br />
            the best{" "}
          </h1>
          <p className=" text-xs pt-4 pl-4">
            Cyber security,network security and End to End It services
          </p>
          <button
            className="flex items-start  h-fit w-fit px-6 py-2 text-md
        bg-lightBlue rounded-lg mt-4 mb-4  shadow-xl"
          >
            Reach Us{" "}
          </button>
          <div className="flex justify-center items-center mt-4">
            <div className="relative">
              <img
                className="relative left-[14vh] top-24  animate-pulse  w-6 flex"
                src="sliderHome.png"
              />
              <img
                className="relative left-10 top-8 animate-pulse  w-6 flex"
                src="sliderHome.png"
              />
            </div>
            <img src="home1.png" className="w-3/5 justify-center " />
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center mt-10">
            <label
              className="bg-blue-50 px-6 py-1 rounded-md text-blue-800
           text-md
          "
            >
              Our Focus
            </label>
          </div>
          <div className="flex flex-col justify-center items-center p-4 w-full">
            <label className="text-2xl text-green-800 ">
              Optimizing your IT infrastructure for maximum performance
            </label>
            <embed src="home3.webp" className="w-full p-4 mt-4  object-fill" />
            <p className="text-sm p-4 font-light ">
              INFOLIB is a renowned offshore development services provided
              commited to helping organizations accomplish their objectives by
              granting them access to skilled and cost-effective resources that
              can improve their efficiency.
            </p>
            <p className="text-sm pl-4 pr-4 font-light pb-4">
              We Recognize the difficulties that businesses encounter when
              searching for free
            </p>
            <p className="text-sm pl-4 pr-4 font-light">
              appropriate talent, which is why we provide an all-inclusive
              solution that incorporates a pool of proficient developers ,UI &
              UX designers,customer support and technical staff,along with a
              streamlined proccess management approach.
            </p>
          </div>
        </div>
        <div className="">
          <h1 className="m-4 text-3xl ">Our Services</h1>
          <div className="flex flex-col justify-center items-center space-y-6">
            <div
              className="flex flex-col justify-center items-center w-4/5 rounded-xl 
         shadow-xl"
            >
              <div className="bg-orange-500 rounded-full w-14 p-3 ">
                <img src="itServices.png" className="" />
              </div>

              <h2 className="text-xl  m-4 ">DIGITAL IT SERVICES</h2>
              <p className="text-sm font-light ml-5 mr-5">
                Our team of experts is dedicated to providing top-tier IT
                services to help your business and succeed in the digital
                world..
              </p>
              <a
                className="flex justify-center mt-4 items-center mb-4
          w-fit h-fit px-12 py-1 bg-orange-500 rounded-xl text-white"
              >
                More{" "}
                <span className="pl-2">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
            <div
              className="flex flex-col justify-center items-center w-4/5 rounded-xl
         shadow-xl"
            >
              <div className="bg-cyan-500 rounded-full w-14 p-3 ">
                <img src="outsourcing.png" className="" />
              </div>

              <h2 className="text-xl  m-4 text-center">OUTSOURCING SERVICES</h2>
              <p className="text-sm font-light ml-5 mr-5">
                We provide dedicated tech employees to work on your projects.
                ensure that you have access to the right talent to complete your
                projects.
              </p>
              <a
                className="flex justify-center mt-4 items-center mb-4
          w-fit h-fit px-12 py-1 bg-cyan-500 rounded-xl text-white"
              >
                More{" "}
                <span className="pl-2">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
            <div
              className="flex flex-col justify-center items-center w-4/5 rounded-xl
         shadow-xl"
            >
              <div className="bg-purple-500 rounded-full w-14 p-3 ">
                <img src="support.png" className="" />
              </div>

              <h2 className="text-xl  m-4 ">CUSTOMER SUPPORT </h2>
              <p className="text-sm font-light ml-5 mr-5">
                Infolib has established partnership with clients to facilitate
                the smooth transition of critical business processes to our
                state-of-the-art.
              </p>
              <a
                className="flex justify-center mt-4 items-center mb-4
          w-fit h-fit px-12 py-1 bg-purple-500 rounded-xl text-white"
              >
                More{" "}
                <span className="pl-2">
                  <AiOutlineArrowRight />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
