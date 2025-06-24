import AnimateButton from "@/app/utils/AnimateButton";
import AnimateImage from "@/app/utils/AnimateImage";
import { Clock, RotateCcw, Zap } from "lucide-react";
import React from "react";

const SprintsUi = () => {
  const FeatureArray = [
    {
      id: 1,
      title: " Simplify sprint management",
      description:
        "   Set sprint dates, assign points, and mark priorities so everyone knows what to do and when.",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },

    {
      id: 2,
      title: "Get yourself organized",
      description:
        "Displays tasks with assigned owners and durations to help manage workloads and prevent scheduling conflicts.",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },
  ];
  const templates = [
    {
      title: "Send Query",
      description: "Send your query to our team",
      icon: <Clock className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Connect with Lynk247 Team",
      description: "Lynk247 team will connect with you",
      icon: <RotateCcw className="w-6 h-6 text-purple-600" />,
    },
    {
      title: "Start a long lasting relationship",
      description: "Be the part of Lynk247 team",
      icon: <Zap className="w-6 h-6 text-purple-600" />,
    },
  ];

  return (
    <>
      {/* section 1  */}
      {/*  */}

      <section className=" px-4    ">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2>Effortless Sprint Creation</h2>
        </div>

        {FeatureArray?.map((value) => {
          if (value?.id % 2 === 0) {
            return (
              <div
                key={value?.id}
                className="grid grid-cols-1 bg-primary rounded-xl   common-section sm:grid-cols-2 items-center gap-2 md:gap-4 mb-20"
              >
                <div className="order-2 p-3 flex flex-col gap-2  items-start ">
                  <h2 className="text-3xl">{value?.title}</h2>
                  <p className="text-para text-base leading-relaxed">
                    {value?.description}
                  </p>

                  <AnimateButton className="primary-btn py-2 px-4 mt-4">
                    Gets Started
                  </AnimateButton>
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
                className="grid grid-cols-1 bg-primary rounded-xl  common-section sm:grid-cols-2 items-center gap-2 md:gap-4 mb-20"
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
                <div className="order-2 p-3 flex flex-col gap-2  items-start ">
                  <h2 className="text-3xl">{value?.title}</h2>
                  <p className="text-para text-base leading-relaxed">
                    {value?.description}
                  </p>

                  <AnimateButton className="primary-btn py-2 px-4 mt-4">
                    Gets Started
                  </AnimateButton>
                </div>
              </div>
            );
          }
        })}
      </section>

      {/* section 2  */}

      <section className="common-section">
        <div className=" px-4 py-4   text-center">
          <div className="py-7 flex flex-col  items-center gap-3">
            <h2>Tasks that connect to the rest of your work</h2>
            <p className="primary-para">
              Task duration is automatically calculated based on the task in progress time, excluding breaks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-15  mt-4 mx-auto">
            {/* Left Card */}
            <div className="bg-primary  rounded-xl overflow-hidden    ">
              <div className="flex flex-col gap-2 items-start  p-3 py-5 ">
                <h2 className=" text-2xl md:text-3xl ">
                  Filters for task tracking
                </h2>
                <p className="text-para text-base text-start leading-relaxed ">
                 Easily track task effort, resource use, and overruns with the sprint filter.
                </p>
              </div>

              <div className=" w-full h-[30vh] md:h-[40vh] relative    ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://cdn.dribbble.com/userupload/36582829/file/original-c89a6204d849aa34b207efd742df588a.jpg?resize=1024x768&vertical=center"
                />
              </div>
            </div>

            {/* Right Card */}
            <div className="bg-primary  rounded-xl overflow-hidden    ">
              <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                <h2 className=" text-2xl md:text-3xl">
                  Plan the next sprint effortlessly
                </h2>
                <p className="text-base  text-start leading-relaxed">
                  Get a complete view and report of the current sprint to plan the next one effectively — ensuring no task is left behind or untracked.
                </p>
              </div>

              <div className=" w-full h-[30vh] md:h-[40vh] relative">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center"
                />
              </div>
            </div>

            {/* <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8">
              <div className="bg-primary  rounded-xl overflow-hidden    ">
                <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                  <h2 className="text-2xl">Eliminate duplicate tasks</h2>
                  <p className="text-base  text-start leading-relaxed">
                    Centralize task discussions across teams by adding the same
                    task to multiple lists.
                  </p>
                </div>

                <div className=" w-full h-[30vh] md:h-[40vh] relative    ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src="https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center"
                  />
                </div>
              </div>

              <div className="bg-primary  rounded-xl overflow-hidden    ">
                <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                  <h2 className="text-2xl">Eliminate duplicate tasks</h2>
                  <p className="text-base  text-start leading-relaxed">
                    Centralize task discussions across teams by adding the same
                    task to multiple lists.
                  </p>
                </div>

                <div className=" w-full h-[30vh] md:h-[40vh] relative    ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src="https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center"
                  />
                </div>
              </div>

              <div className="bg-primary  rounded-xl overflow-hidden    ">
                <div className="flex flex-col gap-1 items-start  p-3 py-5 ">
                  <h2 className="text-2xl">Eliminate duplicate tasks</h2>
                  <p className="text-base  text-start leading-relaxed">
                    Centralize task discussions across teams by adding the same
                    task to multiple lists.
                  </p>
                </div>

                <div className=" w-full h-[30vh] md:h-[40vh] relative    ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src="https://cdn.dribbble.com/userupload/11172555/file/original-e26bbf98e7c9fb29f282f379cb6e4c18.jpg?resize=1024x768&vertical=center"
                  />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SprintsUi;
