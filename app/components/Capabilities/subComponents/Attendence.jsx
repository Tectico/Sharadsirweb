import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const Attendence = () => {
  return (
    <>
      <section className="common-section space-y-8 p-3">
        <div className="text-center space-y-2 flex flex-col items-center">
          <h2 className="">Smart Attendance & Activity Analytics Dashboard</h2>
          <p className="primary-para max-w-4xl mx-auto">
            Lynk247's attendance system makes tracking effortless—no spreadsheets 
            or guesswork. With real-time logging and detailed reports, 
            you get full visibility of your team’s attendance anytime, anywhere. 
            Perfect for remote, in-office, or hybrid teams, it adapts to your workflow 
            for accurate data and easy compliance.
          </p>
        </div>

        <div className="relative h-[30vh] sm:h-[50vh] md:h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/15213681/file/original-358ec6d5b0b8ade77d6d79048313ea69.png?resize=1600x1200&vertical=center"
          />
        </div>
      </section>

      <section className="common-section  flex flex-col items-center p-3 py-5 space-y-12">
        {/* Heading */}
        <div className="text-center space-y-2 flex flex-col items-center">
          <h2 className=""> Empowering Transparent Time Tracking</h2>
          <p className="primary-para text-base ">
            Get clear, real-time insights into your team’s attendance and productivity 
            like never before. Easily track who’s on time, how much focused work is happening, 
            nd whether breaks are balanced. Monitor arrival trends over time to spot patterns 
            and make informed decisions that improve team performance and work-life balance
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  w-full">
          {/* Card 1 */}
          <div className="common-border bg-primary  rounded-xl  overflow-hidden ">
            <div className="bg-gradient-to-tr from-purple-800 to-purple-300  p-2">
              <div className=" w-full relative h-[30vh]  rounded-xl   overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="p-3 space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                Self Time-In & Time-Out
              </h3>
              <p className="text-gray-600">
                Seamless Time Tracking: TIme in with a single tap on Lynk247 when you start your day, 
                and effortlessly Time out when you leave.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="common-border bg-primary  rounded-xl  overflow-hidden ">
            <div className="bg-gradient-to-tr from-blue-800 to-purple-300  p-2">
              <div className=" w-full relative h-[30vh]  rounded-xl   overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="p-3 space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                Date range View
              </h3>
              <p className="text-gray-600">
                Perform detailed attendance analysis with customizable date range views to gain deeper insights into user patterns
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="common-border bg-primary  rounded-xl  overflow-hidden ">
            <div className="bg-gradient-to-tr from-pink-800 to-purple-300  p-2">
              <div className=" w-full relative h-[30vh]  rounded-xl   overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center hover:scale-105"
                  fill
                  alt="Please wait "
                  src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
            </div>
            <div className="p-3 space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                Attendance History & Reports
              </h3>
              <p className="text-gray-600">
                Easily download detailed reports anytime with Lynk247's reports feature or set up automated daily report delivery directly to your inbox for effortless tracking
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Attendence;
