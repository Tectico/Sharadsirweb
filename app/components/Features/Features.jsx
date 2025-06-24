"use client";

import { dataArray } from "@/app/data";
import AnimateButton from "@/app/utils/AnimateButton";
import AnimateContent from "@/app/utils/AnimateContent";
import { GoArrowUpRight } from "react-icons/go";
import React, { useEffect, useState } from "react";
import AnimateImage from "@/app/utils/AnimateImage";
import AnimateLink from "@/app/utils/AnimateLink";
import { Clock, RotateCcw, Zap } from "lucide-react";
import { MdAddTask } from "react-icons/md";
import FormSection from "../FormSection";

const Features = ({ slug }) => {
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

  const [mainData, setMainData] = useState(null);

  useEffect(() => {
    if (slug) {
      const data = dataArray[1].subData?.filter(
        (val) => val?.linKpath === slug
      );

      setMainData(data[0]);
    }
  }, [slug]);

  return (
    <>
      {mainData && (
        <main className="space-y-5">
          <section className="  flex flex-col gap-7  min-h-screen common-backgroundGradient relative w-full   ">
            <div className="grid   grid-cols-1  lg:grid-cols-5 p-2 w-[95%] mx-auto  lg:w-[80%]  bg-gradient-to-b  lg:bg-gradient-to-r from-transparent rounded-xl    to-purple-400 gap-4">
              <div className="flex flex-col gap-3 p-3 py-6  rounded-xl  md:items-center text-start  md:text-center  lg:justify-center lg:items-start lg:text-start  lg:col-span-2 items-start">
                <h1 className=" ">{mainData.title}</h1>

                <p className="primary-para px-2">{mainData?.desc}</p>
                <FormSection
                  className="primary-btn py-3 px-7"
                  title="Gets Started"
                />
              </div>

              <div className="  relative  lg:col-span-3 col-span-1 h-[40vh] md:h-[50vh] lg:h-[70vh]    rounded-xl  overflow-hidden ">
                <AnimateImage
                  className="w-full h-64 object-contain object-center"
                  fill
                  alt="Please wait "
                  src={
                    mainData?.image ||
                    "https://cdn.dribbble.com/userupload/16554789/file/original-797a59537249b8666b2aaa1b512d1e04.png?resize=1504x1128&vertical=center"
                  }
                />
              </div>
            </div>

            <div className="absolute bottom-0 pointer-events-none left-0 w-full z-30 h-[10vh] bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent  "></div>
          </section>

          {/* scetion 2 for main content  */}

          <section className=" w-full   p-2 lg:w-[100%] mx-auto md:p-2   grid grid-cols-1 md:grid-cols-8 gap-4 ">
            <div className="col-span-2  hidden lg:flex sticky top-[11%]  common-backgroundGradient  w-full    rounded-xl   h-[90vh] p-2  overflow-hidden  flex-col items-center  justify-start">
              <div className="  top-[5%]  max-h-[90vh] overflow-y-scroll  left-[7%] bg-primary w-full   *  common-border drop-shadow-2xl rounded-xl">
                <h2 className="text-xl text-start p-2 ">Features</h2>

                <div className=" flex flex-col px-2  gap-3  ">
                  {dataArray[1]?.subData?.map((val, ind) => (
                    <AnimateLink
                      key={ind}
                      href={val?.linKpath}
                      className={`common-navlink text-sm  transition-colors duration-300 ease-in-out  py-3 border-b-[0.5px]  border-gray-400 hover:bg-gradient-to-r hover:from-[#33bbfd] hover:to-[#933afe] ${
                        slug === val?.linKpath
                          ? " bg-gradient-to-r  from-[#33bbfd] to-[#933afe] text-primary"
                          : ""
                      } rounded-xl hover:text-white  font-medium `}
                    >
                      <MdAddTask size={22} />
                      {val?.title}
                    </AnimateLink>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-8 lg:col-span-6   flex   min-h-[130vh]  flex-col gap-8 ">
              {/* info divs  */}

              {mainData?.data?.map((val) => {
                if (val?.id % 2 === 0) {
                  return (
                    <AnimateContent key={val?.id}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5      bg-primary  p-2 lg:p-4   rounded-xl">
                        <div className=" order-2   p-2  ">
                          <div className=" w-full relative shadow-lg  h-full  rounded-lg  ">
                            <AnimateImage
                              className="  object-center"
                              fill
                              alt="Please wait"
                              src={val?.image}
                            />
                          </div>
                        </div>
                        <div className="lg:p-3 p-1 flex flex-col order-1 gap-5 items-start justify-center ">
                          <h2 className="text-2xl text-center md:text-start ">
                            {val?.title}
                          </h2>
                          <ul className="text-para  list-none  text-[1rem] lg:text-[1rem] flex flex-col  gap-3 ">
                            {val?.points?.map((li, ind) => (
                              <li
                                key={ind}
                                className="flex items-start gap-3 leading-tight "
                              >
                                <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                                  <GoArrowUpRight color="#ffffff" size={18} />
                                </div>
                                {li}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </AnimateContent>
                  );
                } else {
                  return (
                    <AnimateContent key={val?.id}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5   bg-primary  p-2 lg:p-4   rounded-xl">
                        <div className="lg:p-3 p-1 order-1 md:order-2  flex flex-col gap-5 items-start justify-center ">
                          <h2 className="text-2xl text-center md:text-start  ">
                            {val?.title}
                          </h2>
                          <ul className="text-para  list-none text-[1rem] lg:text-[1.08rem] flex flex-col   gap-6">
                            {val?.points?.map((li, ind) => (
                              <li
                                key={ind}
                                className="flex items-start gap-3 leading-tight "
                              >
                                <div className=" rounded-full p-[2px] bg-gradient-to-r from-[#33bbfd] to-[#933afe] ">
                                  <GoArrowUpRight color="#ffffff" size={18} />
                                </div>
                                {li}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="   p-2  ">
                          <div className=" w-full relative shadow-md  h-full  rounded-xl  ">
                            <AnimateImage
                              className="  object-center"
                              fill
                              alt="Please wait"
                              src={val?.image}
                            />
                          </div>
                        </div>
                      </div>
                    </AnimateContent>
                  );
                }
              })}
            </div>
          </section>

          {/* section 3 for common content  */}

          <section className="py-20 text-center flex flex-col items-center  space-y-6">
            <h2>Where Every Contact Becomes a Relationship — Lynk247 Team</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-2  common-section mx-auto">
              {templates.map((item, idx) => (
                <div
                  key={idx}
                  className=" rounded-xl px-6 py-10  hover:shadow-md transition bg-primary backdrop-blur-md"
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-purple-100 mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}
    </>
  );
};

export default Features;
