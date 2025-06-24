import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const ScreenMonitoring = () => {
  const FeatureArray = [
    {
      id: 1,
      title: "Custom Screenshot Capture for User Monitoring",
      description:
        "Set the screenshot frequency to match your security needs and ensure visibility into user activity without compromising privacy.",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },

    {
      id: 2,
      title: "Screenshot Dashboard with Advanced Filters",
      description:
        "Easily view user activity by selecting specific users and dates—ideal for auditing, compliance, and productivity tracking",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },

    {
      id: 3,
      title: "Real-Time Visual Oversight with Configurable Intervals",
      description:
        "Prevent unwanted behavior and protect sensitive company data with tailored screenshot intervals and instant visibility.",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },

    // {
    //   id: 4,
    //   title: "User System Monitoring with Flexible Screenshot Logging",
    //   description:
    //     "A powerful tool to enhance workplace security—monitor user actions at custom timeframes and review activities from a centralized dashboard.",
    //   src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    // },
  ];
  return (
    <>
      <section className="px-4">
        {FeatureArray?.map((value) => {
          if (value?.id % 2 === 0) {
            return (
              <div
                key={value?.id}
                className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20"
              >
                <div className="order-2 md:order-1 p-3 flex flex-col gap-3">
                  <h2 className=" text-2xl md:text-3xl ">{value?.title}</h2>
                  <p className="text-para text-base leading-relaxed">
                    {value?.description}
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className=" w-full relative h-[30vh] md:h-[50vh]  rounded-xl   overflow-hidden ">
                    <AnimateImage
                      className="object-cover object-center "
                      fill
                      alt="Please wait "
                      src={value?.src}
                    />
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={value?.id}
                className="grid grid-cols-1 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20"
              >
                <div className="order-1">
                  <div className=" w-full relative h-[30vh] md:h-[50vh]  rounded-xl   overflow-hidden ">
                    <AnimateImage
                      className="object-cover object-center"
                      fill
                      alt="Please wait "
                      src={value?.src}
                    />
                  </div>
                </div>
                <div className="order-2 px-4 flex flex-col gap-3 p-3 ">
                  <h2 className="text-2xl md:text-3xl">{value?.title}</h2>
                  <p className="text-para text-base leading-relaxed">
                    {value?.description}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </section>
    </>
  );
};

export default ScreenMonitoring;
