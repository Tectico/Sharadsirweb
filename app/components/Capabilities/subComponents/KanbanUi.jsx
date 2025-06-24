import AnimateImage from "@/app/utils/AnimateImage";
import Link from "next/link";
import React from "react";

const KanbanUi = () => {
  const FeatureArray = [
    {
      id: 1,
      title: " Task Management Dashboard for Teams and Projects",
      description:
        " Streamline your workflow with one-click access to every feature — faster, simpler, and more efficient than traditional tools",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },

    {
      id: 2,
      title: "Kanban Board for Agile Project Management",
      description:
        "Easily view the status and stage of all project tasks — including those assigned to you — in one centralized place",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
    },
  ];

  // main section feature  array
  const mainFeatureArray = [
    {
      id: 1,
      title: " Task DashBoard: One dashboard for all your work",
      description:
        " A powerful dashboard to monitor task progress, project timelines,team productivity and much more",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
      link: "section1",
    },

    {
      id: 2,
      title: "Kanban Board: Visual Workflow for Agile Teams",
      description:
        "Track, move, and update tasks across stages instantly—perfect for distributed teams needing real-time visibility and collaboration.",
      src: "https://cdn.dribbble.com/userupload/34672707/file/original-fb602955aa60ca6393c5520967f246a6.jpg?resize=1200x900&vertical=center",
      link: "section2",
    },
  ];
  return (
    <>
      <section className="min-h-screen  common-section flex flex-col items-center p-3 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-2">
          <h2 className="">Here's how our Dashboard works</h2>
          <p className="primary-para">
            Track time and gain insights from task data to unify your workflow and improve efficiency.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  w-full">
          {FeatureArray?.map((value) => (
            <div
              key={value?.id}
              className=" rounded-xl  bg-primary overflow-hidden  flex flex-col justify-between "
            >
              <div className="p-6 space-y-2 ">
                <h2 className=" text-2xl md:text-3xl  ">{value?.title}</h2>
                <p className="primary-para">{value?.description}</p>
              </div>

              <div className="bg-gradient-to-tr from-purple-800 to-purple-300  p-2">
                <div className=" w-full relative h-[30vh] md:h-[40vh]  rounded-xl   overflow-hidden ">
                  <AnimateImage
                    className="object-cover object-center hover:scale-105"
                    fill
                    alt="Please wait "
                    src={value?.src}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* section 2  */}

      <section className="min-h-screen common-section flex flex-col items-center p-3 space-y-12">
        <div className="w-full grid grid-cols-8 gap-4">
          <div className="col-span-8 md:col-span-6 min-h-screen space-y-8">
            {mainFeatureArray?.map((val) => (
              <div
                id={val?.link}
                key={val?.id}
                className=" bg-primary   rounded-xl  overflow-hidden "
              >
                <div className="p-6 space-y-2">
                  <h2 className=" text-start">{val?.title}</h2>
                  <p className="primary-para">{val?.description}</p>
                </div>
                <div className="bg-gradient-to-tr from-purple-800 to-purple-300  p-2 md:p-3">
                  <div className=" w-full relative h-[30vh] md:h-[60vh]  rounded-xl   overflow-hidden ">
                    <AnimateImage
                      className="object-cover object-center hover:scale-105"
                      fill
                      alt="Please wait "
                      src={val?.src}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-span-2  h-[400px] hidden md:block sticky top-[10%] p-4 rounded-lg">
            <div className="w-64 max-h-96  bg-primary overflow-y-auto rounded-2xl border border-gray-200 ">
              <ul className="space-y-2 p-2">
                {mainFeatureArray?.map((val) => (
                  <li
                    key={val?.link}
                    className="secondary-btn text-white  md:text-sm lg:text-[1rem] font-semibold rounded-xl px-2 py-3 cursor-pointer"
                  >
                    <Link href={`#${val?.link}`}>{val?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default KanbanUi;
