import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const ActiveTrends = () => {
  const FeatureArray = [
    {
      id: 1,
      title: "Visual Project Timeline with Task Durations",
      description:
        "Highlights tasks across a calendar view, showing start and end dates clearly",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },

    {
      id: 2,
      title: "Task Scheduling and Overlap Analysis",
      description:
        "Displays overlapping and sequential tasks to spot conflicts or dependencies",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },

    {
      id: 3,
      title: "Horizontal Calendar for Project Planning",
      description:
        "Represents tasks on a horizontal grid to mimic a calendar layout",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },
  ];
  return (
    <>
      <section className="px-4">
        {FeatureArray?.map((value) => {
          if (value?.id % 2 === 0) {
            return (
              <div
                key={value?.id}
                className="grid grid-cols-1 bg-primary rounded-xl sm:grid-cols-2  common-section md:grid-cols-2 items-center gap-4 mb-20"
              >
                <div className="order-2 md:order-1 lg:px-8  p-3 flex flex-col gap-3">
                  <h2 className=" text-2xl md:text-3xl ">{value?.title}</h2>
                  <p className="text-para text-base leading-relaxed">
                    {value?.description}
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className=" w-full relative h-[30vh]  md:h-[50vh] rounded-xl   overflow-hidden ">
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
                className="grid grid-cols-1 bg-primary rounded-xl sm:grid-cols-2  common-section md:grid-cols-2 items-center gap-4 mb-20"
              >
                <div className="order-1">
                  <div className=" w-full relative h-[30vh]  md:h-[50vh]   rounded-xl   overflow-hidden ">
                    <AnimateImage
                      className="object-cover object-center"
                      fill
                      alt="Please wait "
                      src={value?.src}
                    />
                  </div>
                </div>
                <div className="order-2 px-4  p-3 flex flex-col gap-3 ">
                  <h2 className=" text-2xl md:text-3xl">{value?.title}</h2>
                  <p className="text-para text-base leading-relaxed">
                    {value?.description}
                  </p>
                </div>
              </div>
            );
          }
        })}
      </section>

      <section className="common-section space-y-8 p-3">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">Horizontal Calendar for Project Planning</h2>
          <p className="primary-para ">
            Helps in critical path analysis—understanding which tasks directly
            affect the project end date
          </p>
        </div>

        <div className="relative h-[40vh]  md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/8525604/file/original-c27b6a25bd9730bfa8ef4c76f39837f4.png?resize=1600x1200&vertical=center"
          />
        </div>
      </section>
    </>
  );
};

export default ActiveTrends;
