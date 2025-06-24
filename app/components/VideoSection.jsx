"use client";

import React, { useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import AnimateContent from "../utils/AnimateContent";
import { AnimatePresence, motion } from "motion/react";
import AnimateButton from "../utils/AnimateButton";
import AnimateSubHeading from "../utils/AnimateSubHeading";
const VideoSection = () => {
  const [data, setData] = useState({
    videoUrl: "/sample.mp4",
    videoNum: 1,
  });

  const handleVideoSwitch = (e, video, num) => {
    if (data?.videoNum) {
      setData({ videoUrl: video, videoNum: num });
    }
  };
  return (
    <>
      <section className="common-section  flex flex-col items-center justify-center space-y-4 py-4 lg:p-5  sm:rounded-xl">
        <div className="flex flex-col items-center justify-center   px-3 gap-2 text-center">
          <AnimateContent>
            <h3 className="italic text-[#7815fa]">The best employee tracking & productivity boost</h3>
          </AnimateContent>

          <AnimateSubHeading>
            Work smarter on what matters most.
          </AnimateSubHeading>

          <AnimateContent>
            <p className="primary-para">
              Streamline team and task management, and uncover actionable insights on your organization's SaaS usage.
            </p>
          </AnimateContent>
        </div>

        <AnimatePresence mode="wait">
          <div className="grid grid-cols-1 gap-4  bg-primary lg:grid-cols-6  p-4 rounded-xl lg:gap-7 lg:mt-5">
            <div className="mt-2 flex flex-col col-span-2 items-start gap-2">
              {/* Card 1 */}
              <div className="space-y-2 p-3 flex items-start gap-1">
                <div className="flex flex-col items-start gap-1">
                  <motion.h3
                    animate={{
                      color: data?.videoNum === 1 ? "#f42ee8" : "#000000",
                    }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-black text-xl font-semibold cursor-pointer"
                    onClick={(e) => handleVideoSwitch(e, "/sample.mp4", 1)}
                  >
                    Launch any campaign
                  </motion.h3>

                  {data?.videoNum === 1 && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="space-y-4"
                    >
                      <div className="text-start primary-para">
                        From idea to execution, effortlessly plan, organize, and
                        track campaigns that deliver results.
                      </div>

                      <div className="lg:hidden">
                        <motion.video
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          src={data.videoUrl}
                          autoPlay
                          className="rounded-xl"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Card 2 */}
              <div className="space-y-2 p-3 flex items-start gap-1">
                <div className="flex flex-col gap-1 items-start">
                  <motion.h3
                    animate={{
                      color: data?.videoNum === 2 ? "#f42ee8" : "#000000",
                    }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-black text-xl font-semibold cursor-pointer"
                    onClick={(e) =>
                      handleVideoSwitch(e, "./video/video1.mp4", 2)
                    }
                  >
                    Triage Product issue
                  </motion.h3>

                  {data?.videoNum === 2 && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="space-y-4"
                    >
                      <p className="text-start primary-para">
                        Quickly identify, prioritize, and resolve critical
                        issues to keep your team, and users, on track.
                      </p>

                      <div className="lg:hidden">
                        <motion.video
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          src={data.videoUrl}
                          autoPlay
                          className="rounded-xl "
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Card 3 */}
              <div className="space-y-2 p-3 flex items-start gap-1">
                <div className="flex flex-col gap-1 items-start">
                  <motion.h3
                    animate={{
                      color: data?.videoNum === 3 ? "#f42ee8" : "#000000",
                    }}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-black text-xl font-semibold cursor-pointer"
                    onClick={(e) =>
                      handleVideoSwitch(e, "./video/video2.mp4", 3)
                    }
                  >
                    Maintain Flawless Campaign
                  </motion.h3>

                  {data?.videoNum === 3 && (
                    <motion.div
                      layout
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="space-y-4"
                    >
                      <p className="text-start primary-para">
                        Streamline key processes to ensure your team operates at
                        peak efficiency.
                      </p>

                      <div className="lg:hidden">
                        <motion.video
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          src={data.videoUrl}
                          autoPlay
                          className="rounded-xl "
                        />
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              <AnimateButton className="secondary-btn mt-2 py-2 md:mt-10 ml-3">
                See all use cases{" "}
                <FaArrowRightLong size={14} className="mt-1" color="#ffffff" />
              </AnimateButton>
            </div>

            {/* Main Video on large screen */}
            <motion.div className="col-span-4 p-5 hidden lg:flex items-center justify-center">
              {data?.videoUrl && (
                <motion.video
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  src={data.videoUrl}
                  autoPlay
                  muted
                  className="rounded-xl "
                />
              )}
            </motion.div>
          </div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default VideoSection;
