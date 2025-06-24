import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const Calendar = () => {
  const FeatureArray = [
    {
      id: 1,
      title: "Plan your everyday work",
      src: "https://cdn.dribbble.com/userupload/8525604/file/original-c27b6a25bd9730bfa8ef4c76f39837f4.png?resize=1600x1200&vertical=center",
      description:
        "The Calendar module gives you a month-by-month view of what' happening in the project. ",
    },

    {
      id: 2,
      title: "Plan your everyday work",
      src: "https://cdn.dribbble.com/userupload/8525604/file/original-c27b6a25bd9730bfa8ef4c76f39837f4.png?resize=1600x1200&vertical=center",
      description:
        "The Calendar module gives you a month-by-month view of what' happening in the project. -",
    },

    {
      id: 3,
      title: "Plan your everyday work",
      src: "https://cdn.dribbble.com/userupload/8525604/file/original-c27b6a25bd9730bfa8ef4c76f39837f4.png?resize=1600x1200&vertical=center",
      description:
        "The Calendar module gives you a month-by-month view of what' happening in the project. ",
    },

    {
      id: 4,
      title: "Plan your everyday work",
      src: "https://cdn.dribbble.com/userupload/8525604/file/original-c27b6a25bd9730bfa8ef4c76f39837f4.png?resize=1600x1200&vertical=center",
      description:
        "The Calendar module gives you a month-by-month view of what' happening in the project. ",
    },
  ];
  return (
    <>
      {FeatureArray?.map((val) => (
        <section  key={val?.id} className="common-section space-y-8 p-5">
          <div className="text-center space-y-2 flex flex-col items-center">
            <h2 className="">{val?.title}</h2>
            <p className="primary-para max-w-4xl mx-auto">{val?.description}</p>
          </div>

          <div className="relative h-[30vh]  md:h-[80vh]  w-full rounded-xl overflow-hidden  ">
            <AnimateImage
              className="object-cover object-center"
              src={val?.src}
            />
          </div>
        </section>
      ))}

     
    </>
  );
};

export default Calendar;
