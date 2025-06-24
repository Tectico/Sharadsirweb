import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const DailyTaskTimeSheet = () => {
  return (
    <>
      <section className="common-section space-y-8 p-3">
        <div className="text-center space-y-2 flex flex-col items-center ">
          <h2 className="">Daily Task Tracking for Better Productivity</h2>
          <p className="primary-para max-w-4xl mx-auto">
            Lynk247 lets users update their daily task status during sign-out,
             auto-logging their time and syncing with Lynk247 project management. 
             This saves managers time by providing clear insights into team workload and productivity..
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

export default DailyTaskTimeSheet;
