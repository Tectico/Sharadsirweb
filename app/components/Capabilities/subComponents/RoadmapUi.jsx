import AnimateButton from "@/app/utils/AnimateButton";
import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

const RoadmapUi = () => {
  const FeatureArray = [
    {
      id: 1,
      title: "Product Backlog Prioritization",
      description:
        "Most product backlogs end up becoming a dumping ground for every idea, user story, or bug fix related to your product. Maintain a prioritized list of backlog items by grouping the results based on parameters like item type, priority, or assignee.",
      src: "https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center",
    },

    {
      id: 2,
      title: "Sprint Planning",
      description:
        "Backlog grooming or sprint planning can become tedious when multiple tasks require the same field update or need to be moved to a different project or sprint. In Zoho Sprints, you can easily update fields and move or delete multiple work items in one go",
      src: "https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center",
    },

    {
      id: 3,
      title: "Sprint Planning",
      description:
        "Backlog grooming or sprint planning can become tedious when multiple tasks require the same field update or need to be moved to a different project or sprint. In Zoho Sprints, you can easily update fields and move or delete multiple work items in one go",
      src: "https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center",
    },

    {
      id: 4,
      title: "Quick and Custom Filters",
      description:
        "Backlog grooming or sprint planning can become tedious when multiple tasks require the same field update or need to be moved to a different project or sprint. In Zoho Sprints, you can easily update fields and move or delete multiple work items in one go.",
      src: "https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center",
    },

    {
      id: 5,
      title: "Data Interoperability",
      description:
        "Backlog grooming or sprint planning can become tedious when multiple tasks require the same field update or need to be moved to a different project or sprint. In Zoho Sprints, you can easily update fields and move or delete multiple work items in one go.",
      src: "https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center",
    },

    {
      id: 6,
      title: "Bulk Updates",
      description:
        "Backlog grooming or sprint planning can become tedious when multiple tasks require the same field update or need to be moved to a different project or sprint. In Zoho Sprints, you can easily update fields and move or delete multiple work items in one go.",
      src: "https://cdn.dribbble.com/userupload/34176841/file/original-2a281ed32297944cdde3945265c461be.png?resize=1504x1128&vertical=center",
    },
  ];
  return (
    <>
      <section className="common-section  flex flex-col gap-8 items-center">
        {/* Heading Section */}

        <div className="py-7 flex flex-col items-center text-center">
          <h2>A well-organized product backlog makes sprint planning easier</h2>
        </div>

        {/* Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  lg:gap-20  p-3  ">
          {FeatureArray?.map((value) => (
            <div
              key={value?.id}
              className="bg-primary  rounded-xl overflow-hidden flex flex-col justify-between   "
            >
              <div className="flex flex-col gap-2 items-start  p-3 py-5 ">
                <h2 className=" text-2xl md:text-3xl  ">{value?.title}</h2>
                <p className="text-para  text-base leading-relaxed">
                  {value?.description}
                </p>
              </div>

              <div className=" w-full h-[30vh] relative    ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src={value?.src}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RoadmapUi;
