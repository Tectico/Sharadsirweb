import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const Dashboard = () => {
  const featureArray = [
    {
      id: 1,
      title: "How did we do?",
      description:
        "Quickly see how your campaigns, pipeline, and sprint delivery have been performing. Just decide what you want to track, then ClickUp will turn complicated performance metrics into simple visuals.",
      src: "https://cdn.dribbble.com/userupload/4018455/file/original-ebf9d23986933c1387af81f6e5a494af.png?resize=1200x900&vertical=center",
    },

    {
      id: 2,
      title: "How long did it take?",
      description:
        "Get answers about billable hours, time spent on tasks, and even estimates for future projects. You can setup Timesheet cards for clients or Calculation cards that automatic analyze time and give projections about work.",
      src: "https://cdn.dribbble.com/userupload/4018455/file/original-ebf9d23986933c1387af81f6e5a494af.png?resize=1200x900&vertical=center",
    },

    {
      id: 3,
      title: "Who's going to churn?",
      description:
        "ClickUp's CRM reports are easy to use so you can you to you can understand who's at risk and what you can do to change their mind. Use ClickUp like any CRM, then add cards that show different charts, figure calculations, and custom widgets.",
      src: "https://cdn.dribbble.com/userupload/4018455/file/original-ebf9d23986933c1387af81f6e5a494af.png?resize=1200x900&vertical=center",
    },
  ];
  return (
    <>
      <section className="space-y-10 p-3">
        {featureArray?.map((value) => {
          if (value?.id % 2 === 0) {
            return (
              <div
                key={value?.id}
                className="grid grid-cols-1 bg-primary rounded-xl sm:grid-cols-2  common-section md:grid-cols-2 items-center gap-2 "
              >
                <div className="order-2 md:order-1 px-4  p-2 flex flex-col gap-1">
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
                className="grid grid-cols-1 bg-primary rounded-xl sm:grid-cols-2  common-section md:grid-cols-2 items-center gap-2 "
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
                <div className="order-2 px-4  p-2 flex flex-col gap-1 ">
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

      <section className="common-section space-y-8 p-3 ">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">Plan your everyday work</h2>
          <p className="primary-para text-base ">
            The Calendar module gives you a month-by-month view of what's
            happening in the project. Just by clicking on a day, you can create
            new tasks, milestones, events or bugs, and assign them to the right
            people.
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/13405032/file/original-b1c5d1370e23c8c5f5a76a36add69d28.png?resize=1200x900&vertical=center"
          />
        </div>
      </section>
    </>
  );
};

export default Dashboard;
