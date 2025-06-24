"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HomeImagedata } from "../data";
import FormSection from "./FormSection";
import Image from "next/image";
import AnimateContent from "../utils/AnimateContent";
import AnimateButton from "../utils/AnimateButton";
import AnimateImage from "../utils/AnimateImage";
const MainSection = () => {
  return (
    <>
      <section className="common-backgroundGradient ">
        <div className="space-y-8">
          {/* Heading Section */}
          <div className="grid grid-cols-1  lg:grid-cols-2 p-3  w-full    mx-auto   ">
            <div className="  gap-5  flex  flex-col common-section items-start justify-center   md:items-center lg:items-start  ">
              <AnimateContent>
                <h1 className="">
                  The Trusted Way to Monitor and Motivate Teams
                </h1>
              </AnimateContent>
              <AnimateContent>
                <p className="primary-para px-2  ">
                  A powerful, all-in-one alternative to ordinary employee
                  tracking systems — built for modern teams who value
                  simplicity, clarity, and real support.
                </p>
              </AnimateContent>

              <AnimateContent>
                <div className="space-y-3 flex flex-col items-start justify-start md:items-center  lg:items-start ">
                  <div className="flex items-start flex-col md:flex-row  gap-5">
                    <FormSection
                      title="Get Started its Free"
                      className="text-sm py-3 lg:text-lg lg:py-3 px-4 lg:px-5 gap-2 primary-btn flex items-center"
                    />

                    <AnimateButton className="text-sm py-3 lg:text-lg lg:py-3 px-5 lg:px-6 gap-2 secondary-btn flex items-center">
                      Learn More
                    </AnimateButton>
                  </div>
                  <h5 className="text-sm lg:text-md px-1 text-[#7970ae] ">
                    Free Forever · No Credit Card
                  </h5>
                </div>
              </AnimateContent>
            </div>

            <div className=" relative h-[40vh] md:h-[50vh]  common-section  overflow-hidden rounded-lg  ">
              <AnimateImage
                unoptimized
                className="object-cover object-center"
                src="/images/homePageImages/HPSS1a.png"
              />
            </div>
          </div>

          {/* Image + Card Section */}
          <AnimateContent>
            <div className="relative min-h-screen  ">
              {/* Background Image */}
              <Image
                fill
                className=" opacity-55 object-cover blur-[0.08rem]"
                src="/images/homePageImages/HPSS2.png"
                alt="please wait"
              />

              {/* blur background  */}
              <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[20] h-10 bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent "></div>

              {/* Gradient Overlay */}

              <div className="common-section">
                <div className="absolute inset-0 ">
                  <div className="relative h-full common-section flex items-start justify-center  sm:justify-end p-2 ">
                    <div className="space-y-4 w-[95%] sm:w-[60%] sm:mt-5 md:w-[60%] lg:w-[40%]  mb-3   px-4 py-5 bg-primary  rounded-2xl">
                      <h2 className="text-xl font-bold text-center">
                        Our trending features
                      </h2>

                      <div className="w-full mt-3">
                        <Swiper
                          spaceBetween={30}
                          slidesPerView={1}
                          centeredSlides={true}
                          autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                          pagination={{
                            clickable: true,
                          }}
                          modules={[Autoplay, Pagination]}
                          className="mySwiper p-2"
                        >
                          {HomeImagedata?.map((val, index) => (
                            <SwiperSlide key={index}>
                              <div className="w-full h-[60vh] sm:h-[70vh]  md:h-[60vh] lg:h-[70vh] relative rounded-lg overflow-hidden">
                                <AnimateImage
                                  fill
                                  src={val}
                                  unoptimized
                                  className="object-cover object-center"
                                  alt="please wait"
                                />
                              </div>
                            </SwiperSlide>
                          ))}
                        </Swiper>
                      </div>

                      <FormSection
                        title="Get Started"
                        className="text-lg  w-full px-5 py-3 gap-4  primary-btn  "
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimateContent>
        </div>
      </section>
    </>
  );
};

export default MainSection;
