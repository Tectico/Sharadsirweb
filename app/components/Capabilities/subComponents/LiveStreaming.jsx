import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const LiveStreaming = () => {
  return (
    <>
      <section className="common-section space-y-8 p-3">
        <div className="text-center space-y-2 flex flex-col items-center">
          <h2 className="">
            Smart Screenshot Monitoring for Productivity & Data Protection
          </h2>
          <p className="primary-para text-base  max-w-4xl  mx-auto">
            SecureTrack is a powerful and customizable screenshot monitoring
            feature integrated into your project management system. It enables
            organizations to capture periodic screenshots of team members'
            systems, helping ensure compliance,
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/15213681/file/original-358ec6d5b0b8ade77d6d79048313ea69.png?resize=1600x1200&vertical=center"
          />
        </div>
      </section>
    </>
  );
};

export default LiveStreaming;
