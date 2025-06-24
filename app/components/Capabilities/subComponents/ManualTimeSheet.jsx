import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const ManualTimeSheet = () => {
  return (
    <>
      <section className="common-section space-y-8 p-3">
        <div className="text-center space-y-2 flex flex-col items-center">
          <h2 className="">Mannual time logging</h2>
          <p className="primary-para max-w-4xl mx-auto">
            If users complete additional tasks not captured by the automated timesheet,
             they can manually log the time spent on each task. Manual time tracking allows
              teams to accurately bill clients, monitor project progress, and quickly identify 
              and resolve any bottlenecks. This ensures better project management and improved overall efficiency
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

export default ManualTimeSheet;
