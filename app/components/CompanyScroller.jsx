"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { CompanyPreviewdata } from "../data.js";
import { motion } from "motion/react";
import Image from "next/image.js";
import AnimateContent from "../utils/AnimateContent.jsx";
const MotionImage = motion.create(Image);
const CompanyScroller = () => {
  return (
    <>
      <section className="common-section  flex flex-col gap-2  items-center ">
        <AnimateContent>
          <p className="primary-para  ">Chosen by professionals</p>
        </AnimateContent>

        {/* company features */}

        <div className="  w-full ">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              650: {
                slidesPerView: 3,
              },

              900: {
                slidesPerView: 4,
              },
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Navigation]}
            className=" flex items-center justify-center  h-[80px]" // Ensure proper height
          >
            {CompanyPreviewdata.map((val, index) => (
              <SwiperSlide className="  p-2 ">
                <div className="  w-[80%] bg-primary rounded-2xl  flex mx-auto relative items-center justify-center h-full">
                  <MotionImage
                    fill
                    src={val.img.src}
                    alt={val.text}
                  
                    sizes="(max-width: 640px) 100vw,
                    (max-width: 768px) 100vw,
                    (max-width: 1024px) 100vw,
                    (max-width: 1280px) 50vw,
                    33vw"
                    className=" object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CompanyScroller;
