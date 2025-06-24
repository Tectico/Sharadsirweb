import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const AutoTimeSheet = () => {
  return (
    <>
      <section className="common-section space-y-8 p-3">
        <div className="text-center space-y-2 flex flex-col items-center">
          <h2 className="">Automatic time logging</h2>
          <p className="primary-para max-w-4xl mx-auto">
            At the end of each day, Lynk247 automatically generates accurate timesheets based on the user’s
             project tasks and hours worked, excluding breaks. This automated timesheet solution requires 
             zero user input and sends precise time tracking data directly to managers for quick approval,
              helping teams save time and improve productivity
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/8525604/file/original-c27b6a25bd9730bfa8ef4c76f39837f4.png?resize=1600x1200&vertical=center"
          />
        </div>
      </section>
    </>
  );
};

export default AutoTimeSheet;
