import React from "react";
import CompanyScroller from "../../CompanyScroller";
import Image from "next/image";
import AnimateImage from "@/app/utils/AnimateImage";
import FaQ from "../../FaQ";

const GenChartUi = () => {
  const FeatureArray = [
    {
      id: 1,
      title: "Gantt Chart: Visual Task Scheduling",
      description:
        "A clean, horizontal bar chart showing each task's start and end, making it easy to track timelines and durations.",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },

    {
      id: 2,
      title: "Team-Based Gantt Chart for Resource Planning",
      description:
        "Displays tasks with assigned owners and durations to help manage workloads and prevent scheduling conflicts.",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },

    {
      id: 3,
      title: "Adaptive Gantt View: Day to Quarter Scaling",
      description:
        "Switch between daily, weekly, monthly, or quarterly views to match the project’s complexity and timeline.",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },
    {
      id: 4,
      title: "Team-Based Gantt Chart for Resource Planning",
      description:
        "Displays tasks with assigned owners and durations to help manage workloads and prevent scheduling conflicts.",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },
  ];
  return (
    <>
      <CompanyScroller />

      <section className=" px-4    ">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2>Key Features of a Gantt Chart Creator</h2>
        </div>

        {FeatureArray?.map((value) => {
          if (value?.id % 2 === 0) {
            return (
              <div
                key={value?.id}
                className="grid grid-cols-1 sm:grid-cols-2  bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20"
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
                className="grid grid-cols-1 sm:grid-cols-2 bg-primary rounded-xl  common-section md:grid-cols-2 items-center gap-4 mb-20"
              >
                <div className="order-1">
                  <div className=" w-full relative  h-[30vh] md:h-[50vh]   rounded-xl   overflow-hidden ">
                    <AnimateImage
                      className="object-cover object-center"
                      fill
                      alt="Please wait "
                      src={value?.src}
                    />
                  </div>
                </div>
                <div className="order-2 px-4 flex flex-col gap-3 ">
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

      <section className="common-section">
        <div className="w-full px-6 py-10 bg-white">
          <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* What is a Gantt chart? */}
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl">What is a Gantt chart?</h2>
              <p className="text-para text-base leading-relaxed">
                A Gantt chart serves as an essential project management tool
                designed to visually illustrate the schedule, timeline, and task
                dependencies within a project. Gantt charts also incorporate
                additional project specifics, including milestones, the critical
                path, and baselines, all of which provide a comprehensive
                overview of the project's progress. Teams employ Gantt charts to
                maintain project schedules, pinpoint bottlenecks, and monitor
                task overlaps.
              </p>
            </div>

            {/* History of Gantt chart */}
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl">History of Gantt chart</h2>
              <p className="text-para text-base leading-relaxed">
                Gantt charts have played a pivotal role in managing numerous
                significant projects throughout history. They not only
                facilitated the control of weapon production during World War I
                but also contributed to the construction of the world-renowned{" "}
                <a href="#" className="text-blue-600 underline">
                  Hoover Dam
                </a>
                . In their initial introduction, Gantt charts had to be
                meticulously crafted on paper. They were often redrawn multiple
                times to accommodate even minor adjustments. Project managers
                then transitioned to using pieces of paper or blocks to
                represent Gantt charts
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* benifits and some other things  */}

      <section className="common-section px-2">
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefits */}
          <div className="bg-orange-50 p-4 rounded-md flex flex-col gap-3">
            <h2 className="text-3xl">Benefits of using Gantt Chart Creator</h2>
            <ul className="list-disc list-outside pl-3 text-para text-base space-y-2">
              <li>A quick overview of project status</li>
              <li>Performs real-time progress tracking</li>
              <li>Aids in optimum resource allocation</li>
              <li>
                Can be used to avoid schedule clashes by working with
                interdependencies
              </li>
              <li>Helps in identifying bottlenecks and delays</li>
              <li>Accommodate risks and changes in real-time</li>
            </ul>
          </div>

          {/* Disadvantages */}
          <div className="bg-orange-50 p-4 rounded-md flex flex-col gap-3">
            <h2 className="text-3xl">Disadvantages of a Gantt chart</h2>
            <ul className="list-disc list-outside pl-3 text-para text-base space-y-2">
              <li>
                Scaling may become complicated when it comes to larger projects
              </li>
              <li>
                Physical Gantt charts are quite impossible to work with as they
                cannot accommodate any changes
              </li>
              <li>May require a lot of time to set up</li>
              <li>Regular updating is required to reflect progress</li>
              <li>Bars do not represent the effort put into the task</li>
            </ul>
          </div>
        </div>
      </section>

      <FaQ />
    </>
  );
};

export default GenChartUi;
