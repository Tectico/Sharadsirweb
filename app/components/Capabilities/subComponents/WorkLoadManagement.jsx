import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const WorkLoadManagement = () => {
  const FeatureArray = [
    {
      id: 1,
      title: "Resource Allocation & Capacity Planning Tool",
      description:
        "Track who is assigned to what and compare assigned hours against availability to ensure efficient resource use and forward planning.",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 2,
      title: "Dynamic Workload Charts with Smart Filters",
      description:
        "Use Gantt-style and bar graphs with color-coded indicators to monitor workload by team, role, or project—great for both micro and macro planning",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },

    {
      id: 3,
      title: "Workload Insights: From Task Level to Team Overview",
      description:
        "Drill down into individual workloads or zoom out to view organization-wide capacity, helping managers make informed staffing decisions.",
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <>
      <section className="common-section space-y-8 p-3">
        <div className="text-center space-y-2 flex flex-col items-center">
          <h2 className="">Workload Management Dashboard for Teams</h2>
          <p className="primary-para  mx-auto">
            Visualize and balance workloads across team members and projects,
            helping managers prevent burnout and improve productivity.
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh]  md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/15213681/file/original-358ec6d5b0b8ade77d6d79048313ea69.png?resize=1600x1200&vertical=center"
          />
        </div>
      </section>
      <section className=" px-4  flex flex-col  items-center  mt-3">
        {FeatureArray?.map((val) => {
          if (val?.id % 2 === 0) {
            return (
              <div
                key={val?.id}
                className="grid grid-cols-1 bg-primary rounded-xl common-section md:grid-cols-2 items-center gap-4 mb-20"
              >
                <div className="order-2 md:order-1 p-3">
                  <h2 className=" text-2xl md:text-3xl">{val?.title}</h2>
                  <p className="text-para text-base leading-relaxed">
                    {val?.description}
                  </p>
                </div>
                <div className="order-1 md:order-2">
                  <div className="w-full relative h-[30vh] md:h-[50vh] rounded-xl overflow-hidden">
                    <AnimateImage
                      className="object-cover object-center"
                      fill
                      alt="Please wait"
                      src={val?.src}
                    />
                  </div>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={val?.id}
                className="grid grid-cols-1 bg-primary rounded-xl common-section md:grid-cols-2 items-center gap-4 mb-20"
              >
                <div className="order-1">
                  <div className="w-full relative h-[30vh] md:h-[50vh] rounded-xl overflow-hidden">
                    <AnimateImage
                      className="object-cover object-center"
                      fill
                      alt="Please wait"
                      src={val?.src}
                    />
                  </div>
                </div>
                <div className="order-2 md:order-1 p-3">
                  <h2 className=" text-2xl md:text-3xl">{val?.title}</h2>
                  <p className="text-para text-base leading-relaxed">
                    {val?.description}
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

export default WorkLoadManagement;
