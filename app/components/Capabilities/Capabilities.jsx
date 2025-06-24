"use client";

import { dataArray } from "@/app/data";
import AnimateButton from "@/app/utils/AnimateButton";
import AnimateContent from "@/app/utils/AnimateContent";
import AnimateImage from "@/app/utils/AnimateImage";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TaskUi from "./subComponents/TaskUi";
import TimeUi from "./subComponents/TimeUi";
import GenChartUi from "./subComponents/GenChartUi";
import SprintsUi from "./subComponents/SprintsUi";
import KanbanUi from "./subComponents/KanbanUi";
import RoadmapUi from "./subComponents/RoadmapUi";
import TimeSheetDashboardUi from "./subComponents/TimeSheetDashboardUi";
import Calendar from "./subComponents/Calendar";
import AutoTimeSheet from "./subComponents/AutoTimeSheet";
import ManualTimeSheet from "./subComponents/ManualTimeSheet";
import DailyTaskTimeSheet from "./subComponents/DailyTaskTimeSheet";
import ScreenMonitoring from "./subComponents/ScreenMonitoring";
import LiveStreaming from "./subComponents/LiveStreaming";
import Attendence from "./subComponents/Attendence";
import TimeTracking from "./subComponents/TimeTracking";
import WorkLoadManagement from "./subComponents/WorkLoadManagement";
import Goal from "./subComponents/Goal";
import Dashboard from "./subComponents/Dashboard";
import Productivity from "./subComponents/Productivity";
import ProductivityRules from "./subComponents/ProductivityRules";
import MostUsedApp from "./subComponents/MostUsedApp";
import BreakUI from "./subComponents/BreakUI";
import AlertsUi from "./subComponents/AlertsUi";
import FormSection from "../FormSection";
import ActiveTrends from "./subComponents/ActiveTrends";

const Capabilities = ({ slug }) => {
  const [Maindata, setMainData] = useState(null);

  useEffect(() => {
    if (slug) {
      const data = dataArray[0]?.subData?.flatMap(
        (item) =>
          item.subCat?.filter((subItem) => subItem.linKpath === slug) || []
      );

      setMainData(data[0]);
    }
  }, [slug]);

  return (
    <>
      {Maindata && (
        <main className="flex flex-col   gap-8">
          {/* section 2  */}
          <section className="  flex flex-col gap-7  min-h-screen common-backgroundGradient relative w-full  py-2  ">
            <div className="grid   grid-cols-1  lg:grid-cols-5 p-2 w-[95%] mx-auto  lg:w-[80%]  bg-gradient-to-b  lg:bg-gradient-to-r from-transparent rounded-xl    to-purple-400 gap-4">
              <div className="flex flex-col gap-3 p-3 py-2  rounded-xl  md:items-center text-start  md:text-center justify-center lg:items-start lg:text-start  lg:col-span-2 items-start">
                <h1 className=" ">{Maindata?.heading}</h1>

                <p className="primary-para px-2">{Maindata?.desc}</p>

                <FormSection
                  className="primary-btn py-3 px-7"
                  title="Gets Started"
                />
              </div>

              <div className="  relative  lg:col-span-3 col-span-1 h-[40vh] md:h-[50vh] lg:h-[80vh]     rounded-xl  overflow-hidden ">
                <AnimateImage
                  className="object-cover object-center"
                  fill
                  alt="Please wait "
                  src={
                    Maindata?.image ||
                    "https://cdn.dribbble.com/userupload/16554789/file/original-797a59537249b8666b2aaa1b512d1e04.png?resize=1504x1128&vertical=center"
                  }
                />
              </div>
            </div>

            <div className="absolute bottom-0 pointer-events-none left-0 w-full z-[30] hidden md:block h-[10vh] bg-gradient-to-t from-[#f6f4ff] via-[#f6f4ff]/80 to-transparent  "></div>
          </section>
          {/* section 3  */}
          {slug === "tasks" && <TaskUi />}
          {slug === "calender" && <Calendar />}
          {slug === "time-line" && <TimeUi />}
          {slug === "gantt-charts" && <GenChartUi />}
          {slug === "sprints" && <SprintsUi />}
          {slug === "kanban" && <KanbanUi />}
          {slug === "roadmap-backlog" && <RoadmapUi />}
          {slug === "time-sheet-dashboard" && <TimeSheetDashboardUi />}
          {slug === "autofill-timesheet" && <AutoTimeSheet />}
          {slug === "manual-timesheet" && <ManualTimeSheet />}
          {slug === "daily-task-timesheet" && <DailyTaskTimeSheet />}
          {slug === "screenshots" && <ScreenMonitoring />}
          {slug === "livestreaming" && <LiveStreaming />}
          {slug === "attendence" && <Attendence />}
          {slug === "workload-load-management" && <WorkLoadManagement />}
          {slug === "goals" && <Goal />}
          {slug === "dashboard" && <Dashboard />}
          {slug === "productivity-matrices" && <Productivity />}
          {slug === "productivity-rules" && <ProductivityRules />}
          {slug === "moast-used-apps" && <MostUsedApp />}
          {slug === "breaks" && <BreakUI />}
          {slug === "alerts" && <AlertsUi />}
          {slug === "active-trends" && <ActiveTrends />}
        </main>
      )}
    </>
  );
};

export default Capabilities;
