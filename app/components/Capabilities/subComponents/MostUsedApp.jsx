import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";
import { MdDashboardCustomize } from "react-icons/md";

const MostUsedApp = () => {
  return (
    <>
      <section className=" common-secion   space-y-8 p-3">
        <div className="mx-auto text-center  flex flex-col gap-2 items-center">
          <h2>
            Configure Productivity
            <span className="text-purple-600">Your Way</span>
          </h2>
          <p className=" primary-para">
            Leverage our intelligent rules engine to customize productivity
            tracking for different roles and teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 common-section  mx-auto">
          {/* Card 1 */}
          <div className="bg-white rounded-xl p-2 hover:shadow-sm flex flex-col gap-6 items-center ">
            <div className="h-[30vh] relative w-full ">
              <AnimateImage
                src={
                  "https://cdn.dribbble.com/userupload/17415831/file/original-f17d27b2f87f9e3f55973f2b731d5347.png?resize=1200x900&vertical=center"
                }
                alt="Productivity Rules by Role"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
            </div>

            <div className="flex flex-col gap-2 p-2 ">
              <div className="flex items-center  gap-3   justify-start">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
                  <MdDashboardCustomize size={20} />
                </div>
                <h2 className="text-2xl">Custom Productivity Rules by Role</h2>
              </div>
              <p className="text-base leading-relaxed  ">
                Tailor productivity measurement by setting specific rules for
                different roles—choose the apps and websites that define
                productive work for marketing, sales, or support teams.
              </p>
            </div>
          </div>

          {/* Card 2 */}

          <div className="bg-white rounded-xl p-2 hover:shadow-sm flex flex-col gap-6 items-center ">
            <div className="h-[30vh] relative w-full ">
              <AnimateImage
                src={
                  "https://cdn.dribbble.com/userupload/17415831/file/original-f17d27b2f87f9e3f55973f2b731d5347.png?resize=1200x900&vertical=center"
                }
                alt="Productivity Rules by Role"
                className="w-full  object-cover rounded-xl mb-4"
              />
            </div>

            <div className="flex flex-col gap-2 p-2 ">
              <div className="flex items-center  gap-3   justify-start">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
                  <MdDashboardCustomize size={20} />
                </div>
                <h2 className="text-2xl">
                  Team-Based Productivity Configuration
                </h2>
              </div>
              <p className="text-base leading-relaxed  text-para">
                Apply productivity criteria at the team level to align metrics
                with each department’s workflow. Ensure accurate tracking by
                defining what productivity looks like for every group.
              </p>
            </div>
          </div>

          {/* card 3  */}

          <div className="bg-white rounded-xl p-2 hover:shadow-sm flex flex-col gap-6 items-center ">
            <div className="h-[30vh] relative w-full ">
              <AnimateImage
                src={
                  "https://cdn.dribbble.com/userupload/17415831/file/original-f17d27b2f87f9e3f55973f2b731d5347.png?resize=1200x900&vertical=center"
                }
                alt="Productivity Rules by Role"
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
            </div>

            <div className="flex flex-col gap-2 p-2 ">
              <div className="flex items-center  gap-3   justify-start">
                <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
                  <MdDashboardCustomize size={20} />
                </div>
                <h2 className="text-2xl">Most Used Apps & URLs</h2>
              </div>
              <p className="text-base leading-relaxed  text-para">
                Gain insight into the most accessed applications and URLs across
                your organization. Filter data by teams, users, and timeframes
                to understand usage patterns and boost digital efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MostUsedApp;
