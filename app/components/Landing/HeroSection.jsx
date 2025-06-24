"use client";
import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import AnimateContent from "@/app/utils/AnimateContent";
import AnimateButton from "@/app/utils/AnimateButton";

const MotionImage = motion.create(Image);
const HeroSection = () => {
  return (
    <>
      <section className="   relative    ">
        {/* animation div  */}
        <AnimateContent>
          <div className="h-screen overflow-hidden relative z-[20] common-backgroundGradient mx-auto rounded-xl">
            {/* Center div — animate from bottom */}
            <div className="w-full sm:w-[90%] md:w-[70%]   z-[100] lg:w-[55%] drop-shadow-2xl common-border shadow-xl absolute bottom-0 lg:bottom-[-5%] sm:left-0 right-0 mx-auto">
              <div className="h-[50vh] lg:h-[65vh] rounded-t-xl overflow-hidden relative">
                <MotionImage
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  fill
                  priority
                  placeholder="empty"
                  quality={100} // ✅ Force full quality
                  unoptimized
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 768px) 100vw,
                  (max-width: 1024px) 100vw,
                  (max-width: 1280px) 50vw,
                  33vw"
                  src="/images/landingImages/SS3.png"
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>

            {/* Left div — animate from left */}
            <div className="hidden md:block md:w-[60%] lg:w-[40%] drop-shadow-2xl common-border shadow-xl absolute bottom-0 left-0 mx-auto rounded-xl">
              <div className="relative h-[45vh] rounded-t-xl overflow-hidden">
                <MotionImage
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  fill
                  priority
                  placeholder="empty"
                  quality={100} // ✅ Force full quality
                  unoptimized
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 768px) 100vw,
                  (max-width: 1024px) 100vw,
                  (max-width: 1280px) 50vw,
                  33vw"
                  src="/images/landingImages/SS2.png"
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right div — animate from right */}
            <div className="w-[90%] md:block hidden lg:w-[40%] md:w-[60%] drop-shadow-2xl shadow-xl common-border absolute bottom-0 right-0 mx-auto rounded-xl">
              <div className="h-[45vh] relative rounded-t-xl overflow-hidden">
                <MotionImage
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  fill
                  priority
                  placeholder="empty"
                  quality={100} // ✅ Force full quality
                  unoptimized
                  sizes="(max-width: 640px) 100vw,
                  (max-width: 768px) 100vw,
                  (max-width: 1024px) 100vw,
                  (max-width: 1280px) 50vw,
                  33vw"
                  src="/images/landingImages/SS1.png"
                  alt=""
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </AnimateContent>

        {/* blur background  */}
        <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[20] h-10 bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80  to-transparent rounded-b-xl "></div>

        {/* main content div  */}
        <div className="flex  absolute   top-[1%]  left-0 right-0  z-20    flex-col gap-2 md:gap-4  lg:gap-2  text-center justify-center items-center">
          <AnimateContent>
            <h1>Boost Your Team's Productivity</h1>
          </AnimateContent>

          <AnimateContent>
            <p className="primary-para text-center md:w-3xl">
              <strong>
                Transform how your team works with our all-in-one productivity
                platform
              </strong>{" "}
              designed to streamline workflows and maximize efficiency
            </p>
          </AnimateContent>

          <div className="flex flex-col items-center gap-2">
            <Link href="/home">
              <AnimateButton className=" text-lg py-3 lg:text-2xl lg:py-3 px-3 lg:px-18 gap-2  primary-btn    ">
                Lets Begin <FaArrowRightLong size={16} />
              </AnimateButton>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
