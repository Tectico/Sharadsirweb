import AnimateImage from "@/app/utils/AnimateImage";
import React from "react";

const TimeTracking = () => {
  return (
    <>
      <section className="common-section space-y-8">
        <div className="text-center space-y-2">
          <h2 className="">Automatic time logging</h2>
          <p className="primary-para max-w-4xl mx-auto">
            Timesheet management can be done by logging the time spent by each
            team member on their tasks. Time logs are helpful in billing
            clients, to keep track of the pace of the project, and to identify
            bottlenecks and resolve them quickly.
          </p>
        </div>

        <div className="relative h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/8525604/file/original-c27b6a25bd9730bfa8ef4c76f39837f4.png?resize=1600x1200&vertical=center"
          />
        </div>
      </section>

      <section className="common-section space-y-8">
        <div className="text-center space-y-2">
          <h2 className="">Review time logged</h2>
          <p className="primary-para max-w-4xl mx-auto">
            Managers can review the time logged by their team. Timesheets in our
            project management software help the senior management make
            determinations about billable hours and actions.
          </p>
        </div>

        <div className="relative h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/37124227/file/original-8d0907905ffaf218146caa7be229545b.png?resize=1600x1200&vertical=center"
          />
        </div>
      </section>

      <section className="common-section space-y-8">
        <div className="text-center space-y-2">
          <h2 className="">Comprehensive reportsd</h2>
          <p className="primary-para max-w-4xl mx-auto">
            Project timesheet reports give a bird's-eye view of the time spent
            on each project. Also, detailed timesheet reports with time spent on
            each client and each employee are available to use in timesheet
            management.
          </p>
        </div>

        <div className="relative h-[70vh] w-full rounded-xl overflow-hidden  ">
          <AnimateImage
            className="object-cover object-center"
            src="https://cdn.dribbble.com/userupload/16638234/file/original-e7c93ce3355432ee025ded88c4d35008.jpg?resize=1504x1128&vertical=center"
          />
        </div>
      </section>
    </>
  );
};

export default TimeTracking;
