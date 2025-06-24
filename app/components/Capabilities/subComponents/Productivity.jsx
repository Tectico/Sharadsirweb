import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const Productivity = () => {
  return (
    <>
      <section className="common-section space-y-8 p-3">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className=""> Visualize Productivity Trends</h2>
          <p className="primary-para  text-base ">
            Effortlessly track user productivity over time using dynamic graphs
            powered by our proprietary productivity algorithm. Instantly spot
            patterns, spikes, and dips to drive better team performance.
          </p>
        </div>

        <div className="relative  h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/17415831/file/original-f17d27b2f87f9e3f55973f2b731d5347.png?resize=1200x900&vertical=center"
          />
        </div>
      </section>

      <section className="common-section space-y-8 p-3 ">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className=""> Detailed Productivity Breakdown</h2>
          <p className="primary-paratext-base   ">
          Dive into data with a comprehensive table view that reflects real-time productivity scores. Filter and analyze user performance based on key indicators defined by our unique IP-based methodology.
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/15100326/file/original-615e767ca4bf25c4722579ae041ddf92.png?resize=1200x913&vertical=center"
          />
        </div>
      </section>
    </>
  );
};

export default Productivity;
