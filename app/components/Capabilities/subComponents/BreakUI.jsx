import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const BreakUI = () => {
  return (
    <>
      <section className="common-section space-y-8 p-3 ">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">Pre-defined breaks </h2>
          <p className="primary-para ">
            Set predefined break configurations by assigning specific break types and durations 
            to individual users or entire teams—giving you full control over break policies
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/17415831/file/original-f17d27b2f87f9e3f55973f2b731d5347.png?resize=1200x900&vertical=center"
          />
        </div>
      </section>

      <section className="common-section space-y-8 p-3 ">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">Custom breaks</h2>
          <p className="primary-para ">
            Create fully customized break schedules and assign them to 
            specific users or teams—no need to rely on rigid, pre-defined breaks. Tailor break policies to fit your workflow
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/17415831/file/original-f17d27b2f87f9e3f55973f2b731d5347.png?resize=1200x900&vertical=center"
          />
        </div>
      </section>

      <section className="common-section space-y-8 p-3 ">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">Idle time breaks </h2>
          <p className="primary-para ">
            Enable automatic break detection based on system idle time. When a user's device 
            is inactive, a break is auto-generated according to the configured idle 
            duration. Admins can easily customize idle time settings for individual 
            users or entire teams, ensuring accurate and flexible break tracking
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/17415831/file/original-f17d27b2f87f9e3f55973f2b731d5347.png?resize=1200x900&vertical=center"
          />
        </div>
      </section>
    </>
  );
};

export default BreakUI;
