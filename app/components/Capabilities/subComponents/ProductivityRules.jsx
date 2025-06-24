import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const ProductivityRules = () => {
  return (
    <>
      <section className="common-section space-y-8 p-3 ">
        <div className=" space-y-2 flex items-center text-center flex-col">
          <h2 className="">
            Custom Productivity Rules for Role-Based Measurement
          </h2>
          <p className="primary-para  text-base ">
            Define productivity benchmarks by selecting specific applications
            and websites relevant to each user's role—perfect for evaluating
            performance across individuals or entire teams, such as marketing,
            development, or support.
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/17415831/file/original-f17d27b2f87f9e3f55973f2b731d5347.png?resize=1200x900&vertical=center"
          />
        </div>
      </section>

      <section className="common-section py-16 px-4 ">
        <div className="  items-center flex-col  text-center mb-12 flex ">
          <h2>
            Configure Productivity{" "}
            <span className="text-purple-600">Your Way</span>
          </h2>
          <p className="primary-para text-base ">
            Leverage our intelligent rules engine to customize productivity
            tracking for different roles and teams.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10  mx-auto">
          {/* Card 1 */}
          <div className="bg-white p-4  md:p-8  rounded-xl hover:shadow-sm transition duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Custom Productivity Rules by Role
              </h3>
            </div>
            <p className="text-gray-600">
              Tailor productivity measurement by setting specific rules for
              different roles—choose the apps and websites that define
              productive work for marketing, sales, or support teams.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4  md:p-8  rounded-xl hover:shadow-sm transition duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-purple-100 text-purple-600 p-3 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h10M4 18h6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Team-Based Productivity Configuration
              </h3>
            </div>
            <p className="text-gray-600">
              Apply productivity criteria at the team level to align metrics
              with each department’s workflow. Ensure accurate tracking by
              defining what productivity looks like for every group.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductivityRules;
