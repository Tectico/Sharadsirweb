import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const AlertsUi = () => {
  return (
    <>
      <section className="common-section space-y-8 p-3">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">Auto alerts</h2>
          <p className="primary-para ">
            Auto alerts in the system for timesheet approval, for project task
            activities
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/43181776/file/original-55b3203f611774e51ce723596b186031.png?resize=1200x900&vertical=center"
          />
        </div>
      </section>

      <section className="common-section space-y-8 p-3 ">
        {/* <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">Custom alerts </h2>
          <p className="primary-para ">
            Make your own custom alerts on the basis of some paramters
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/11658822/file/original-439a18727e4dc2dac031284527d6961a.png?resize=1200x900&vertical=center"
          />
        </div> */}
      </section>
    </>
  );
};

export default AlertsUi;
