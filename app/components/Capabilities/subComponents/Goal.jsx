import React from "react";
import CompanyScroller from "../../CompanyScroller";
import AnimateImage from "@/app/utils/AnimateImage";
import { FaBoxOpen } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";

const Goal = () => {
  const featureArray = [
    {
      id: 1,
      title: "Measure success of all your work",
      description:
        "Every manager wants to measure the success of their team. To start, all you need to do is add tasks from different teams into a single Goal.",
      src: "https://cdn.dribbble.com/userupload/4018455/file/original-ebf9d23986933c1387af81f6e5a494af.png?resize=1200x900&vertical=center",
    },

    {
      id: 2,
      title: "Give your team a task target",
      description:
        "With Task Targets, ClickUp will automatically track your progress as you complete them. For example, link all tasks in a Sprint to a single Goal to track overall progress.",
      src: "https://cdn.dribbble.com/userupload/4018455/file/original-ebf9d23986933c1387af81f6e5a494af.png?resize=1200x900&vertical=center",
    },

    {
      id: 3,
      title: "Setup your numerical targets",
      description:
        "Add targets to track items that can be broken down into distinct units like numbers or True/False. Then create your own Targets, such as Create 5 Instagram posts in a week.",
      src: "https://cdn.dribbble.com/userupload/4018455/file/original-ebf9d23986933c1387af81f6e5a494af.png?resize=1200x900&vertical=center",
    },
  ];
  return (
    <>
      <CompanyScroller />

      <section className="space-y-8 p-3">
        {featureArray?.map((value) => {
          if (value?.id % 2 === 0) {
            return (
              <div
                key={value?.id}
                className="grid grid-cols-1 bg-primary rounded-xl sm:grid-cols-2  common-section md:grid-cols-2 items-center gap-4 "
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
                className="grid grid-cols-1 bg-primary rounded-xl sm:grid-cols-2  common-section md:grid-cols-2 items-center gap-4 "
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

      <section className="common-section">
        <div className="flex flex-col items-center px-4 py-4 space-y-8">
          <h2 className="text-center">Make goals part of the day-to-day</h2>

          <div className="flex flex-col md:flex-row gap-6 mt-10 w-full max-w-6xl">
            {/* Box 1 */}
            <div className="flex flex-col md:flex-row items-start p-6 rounded-2xl bg-white w-full md:w-1/2 space-x-4">
              <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                <FaBoxOpen size={20} />
              </div>
              <div className="mt-4 md:mt-0 md:ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Stay on schedule to reach your objectives
                </h3>
                <p className="mt-2 text-gray-600">
                  Set deadlines for your team's Goals, keep Sprints and backlogs
                  on a tight timeline, and monitor progress on weekly
                  scorecards.
                </p>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex flex-col md:flex-row items-start p-6 rounded-2xl  bg-white w-full md:w-1/2 space-x-4">
              <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                <CiSquarePlus size={20} />
              </div>
              <div className="mt-4 md:mt-0 md:ml-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Share your Goals with anyone
                </h3>
                <p className="mt-2 text-gray-600">
                  Control who can access Goals, set one or multiple owners, and
                  easily manage view and edit permissions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Goal;
