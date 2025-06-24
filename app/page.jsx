import { MdOutlineArrowRightAlt } from "react-icons/md";
import HeroSection from "./components/Landing/HeroSection";
import CompanyScroller from "./components/CompanyScroller";
import AnimateContent from "./utils/AnimateContent";
import AnimateImage from "./utils/AnimateImage";
import FormSection from "./components/FormSection";

export const metadata = {
  title: "Welcome to Lynk247",
  description: "MyApp is the best platform for your business needs.",
};

const HomePage = () => {
  return (
    <>
      <main className="space-y-8">
        {/* section 1 */}
        <HeroSection />

        {/* section 2  */}

        <CompanyScroller />

        {/* section 3  */}

        <section className="common-section   flex flex-col gap-5 mt-4  p-5">
          <div className="flex flex-col gap-1 items-center">
            <AnimateContent>
              <h2>Your team’s new favorite tool</h2>
            </AnimateContent>

            <AnimateContent>
              <p className="text-center primary-para">
                <strong>
                  Our comprehensive platform offers all the tools your team
                  needs to
                </strong>
                .work smarter, not harder.
              </p>
            </AnimateContent>
          </div>

          <div className=" grid grid-cols-1  mx-auto md:grid-cols-2 lg:grid-cols-3  md:mt-12 gap-9 mt-3 sm:p-5 ">
            {/* image  div 1 */}
            <AnimateContent className="bg-gradient-to-b  overflow-hidden  relative from-[#877f8a]   flex flex-col justify-end rounded-xl to-[#5037e6]  ">
              {/* info div  */}
              <div className=" px-5 py-8 absolute  top-0 bottom-0 left-0 right-0 flex  items-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  The real productivity algo
                </h1>
                <p className="text-md  text-white font-semibold">
                  Get real productivity with the only algo developed as per the
                  task done by your team{" "}
                </p>
              </div>

              {/* sample image div  */}

              <div className=" relative h-72  w-full ">
                <AnimateImage
                  src="/images/landingImages/SS6.png"
                  alt=""
                  className="  object-cover"
                />
              </div>
            </AnimateContent>
            {/* image div 2  */}
            <AnimateContent className="bg-gradient-to-b  overflow-hidden   relative from-[#4da7fa]    flex flex-col justify-around rounded-xl to-[#604cef]  ">
              {/* info div  */}
              <div className=" px-6 py-8   flex items-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  Simplified Project Section
                </h1>
                <p className="text-md  text-white font-semibold">
                  All-in-one dashboard for timeline, kanban Board, calender &
                  much more
                </p>
              </div>

              {/* sample image div  */}

              <div className=" relative h-72   w-full ">
                <AnimateImage
                  src="/images/landingImages/SS4.png"
                  alt=""
                  className=" w-full object-cover"
                />x
              </div>
            </AnimateContent>

            <AnimateContent className="bg-[#252a31] overflow-hidden   relative   flex flex-col justify-around rounded-xl   ">
              {/* info div  */}
              <div className=" px-5 py-8   flex items-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  Track Everything
                </h1>
                <p className="text-md  text-white font-semibold">
                  Track active time of the user,activity screenshots,live video
                  streaming,idle time,breaks & much more
                </p>
              </div>

              {/* sample image div  */}

              <div className=" relative  h-72   w-full">
                <AnimateImage
                  src="/images/landingImages/SS5.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </AnimateContent>

            <AnimateContent className="col-span-2 hidden md:flex   items-center justify-between bg-gradient-to-b from-[#254573]  via-[#7d53ad]  to-[#af38b5] p-8 rounded-xl gap-4 ">
              <div className="flex flex-col gap-3 items-start ">
                <div className="items-start flex flex-col gap-2 ">
                  <h1 className="text-2xl font-bold text-white">
                    No setup headaches
                  </h1>
                  <p className="text-md w-[70%] font-semibold text-white ">
                    Seamless integration with your existing tools{" "}
                  </p>
                </div>

                <div className="relative  h-56  w-full">
                  <AnimateImage
                    className="object-cover"
                    src="/images/landingImages/SS8.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 items-start ">
                <div className="items-start flex flex-col gap-2 ">
                  <h1 className="text-2xl font-bold text-white">
                    Switch to Lynk247
                  </h1>
                  <p className="text-md w-[70%] font-semibold text-white ">
                    Spend less on software. Get everything you need.
                  </p>
                </div>

                <div className="relative  h-56  w-full">
                  <AnimateImage
                    className="object-cover"
                    src="/images/landingImages/SS9.png"
                    alt=""
                  />
                </div>
              </div>
            </AnimateContent>

            <AnimateContent className="bg-[#252a31] overflow-hidden   relative   flex flex-col justify-around rounded-xl   ">
              {/* info div  */}
              <div className=" px-5 py-8   flex items-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  24/7 Human Support, No Bots — Just Help.
                </h1>
                <p className="text-md  text-white font-semibold">
                  Because every customer deserves real care.
                </p>
              </div>

              {/* sample image div  */}

              <div className=" relative  h-72   w-full">
                <AnimateImage
                  src="/images/landingImages/SS11.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </AnimateContent>

            <AnimateContent className="bg-gradient-to-b from-[#eb3f9b] via-[#f95a68] to-[#ff674e] overflow-hidden  relative   flex flex-col justify-around rounded-xl   ">
              {/* info div  */}
              <div className=" px-5 py-8   flex items-start flex-col gap-2 ">
                <h1 className="text-2xl text-white font-semibold">
                  One stop solution to manage your tasks
                </h1>
                <p className="text-md  text-white font-semibold">
                  Organize your tasks, track history and activity with timelines
                </p>
              </div>

              {/* sample image div  */}

              <div className="relative  h-56  w-full  ">
                <AnimateImage
                  src="/images/landingImages/SS7.png"
                  alt=""
                  className=" w-full object-cover"
                />
              </div>
            </AnimateContent>
            <AnimateContent className="col-span-2  hidden md:flex bg-image   justify-between bg-gradient-to-b from-[#0c1947]  via-[#0c1947]  to-[#0c1947] rounded-xl gap-4 ">
              <div className=" flex flex-col  px-10  justify-around p-3">
                <h1 className="text-2xl font-bold text-white">
                  Trusted by over 10+ teams
                </h1>

                <div className="flex gap-10">
                  <div>
                    <h1 className="text-xl font-bold text-white">100+</h1>
                    <span className="text-gray-300 font-semibold">
                      Projects completed
                    </span>
                  </div>

                  <div>
                    <h1 className="text-xl font-bold text-white">1000+</h1>
                    <span className="text-gray-300 font-semibold">
                      Tasks completed
                    </span>
                  </div>
                </div>

                <div className="flex gap-10">
                  <div>
                    <h1 className="text-xl font-bold text-white">2047+ hrs</h1>
                    <span className="text-gray-300 font-semibold">
                      Productivity
                    </span>
                  </div>

                  <div>
                    <h1 className="text-xl font-bold text-white">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;40%{" "}
                    </h1>
                    <span className="text-gray-300 font-semibold">
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Productivity
                      Increase
                    </span>
                  </div>
                </div>

                <FormSection
                  title="Join today for free"
                  className="bg-[#34416a61] hover:bg-[#373d72] text-md text-white flex  items-center  justify-center p-3 rounded-xl gap-2 font-semibold"
                />
              </div>
            </AnimateContent>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePage;
