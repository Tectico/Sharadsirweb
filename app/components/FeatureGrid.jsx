import ArrayData from "../data";
import React from "react";
import { CiSearch } from "react-icons/ci";
import AnimateContent from "../utils/AnimateContent";
import AnimateButton from "../utils/AnimateButton";
import AnimateSubHeading from "../utils/AnimateSubHeading";

const FeatureGrid = () => {
  return (
    <>
      <section className="  w-full relative  space-y-4 mt-6  py-4  ">
        <div className="  flex flex-col gap-4 text-center space-y-2 items-center   lg:p-10 px-3   lg:w-[60%] mx-auto">
          <AnimateContent>
            <h3 className="lg:text-xl  text-lg text-center italic text-[#7815fa]">
              Features
            </h3>
          </AnimateContent>

          <AnimateSubHeading>
            Every feature your team needs to complete work faster
          </AnimateSubHeading>

          <AnimateContent>
            <p className="primary-para ">
              100+ features to take productivity to the next level.
            </p>
          </AnimateContent>

          <AnimateButton className="secondary-btn py-2 mx-auto">
            Discover all features
          </AnimateButton>
        </div>
        <div className="grid grid-cols-3    auto-rows-auto max-h-[60vh] h-[60vh] sm:h-full sm:max-h-full overflow-y-scroll sm:overflow-hidden sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3 p-4 w-full">
          {ArrayData.map((value, index) => {
            if ([13, 14, 27, 28].includes(index)) {
              return (
                <AnimateButton
                  key={index}
                  className="col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 cursor-pointer p-4 py-8 hover:outline-2 hover:outline-[#7815fa] hover:text-[#7815fa] flex flex-col gap-1 shadow-sm rounded-xl justify-center items-center bg-primary "
                >
                  <div className="flex md:flex-row flex-col items-center justify-center gap-2">
                    {<value.icon size={28} />}
                    <span className="text-sm lg:text-lg font-semibold text-para ">
                      {value?.title}
                    </span>
                  </div>
                </AnimateButton>
              );
            }

            return (
              <AnimateButton
                key={index}
                className="p-4 py-8 hover:outline-2 cursor-pointer hover:outline-[#7815fa] hover:text-[#7815fa] flex flex-col gap-1 rounded-xl justify-center items-center bg-white  shadow-sm"
              >
                {<value.icon size={28} />}
                <span className="text-sm lg:text-lg text-para">
                  {value?.title}
                </span>
              </AnimateButton>
            );
          })}
        </div>
        {/* blur background  */}
        <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[100] h-20 bg-gradient-to-t from-white/10 via-white/80 to-transparent rounded-b-xl "></div>
      </section>
    </>
  );
};

export default FeatureGrid;
