"use client";

import React, { useEffect, useState } from "react";
import AnimateContent from "../utils/AnimateContent";
import AnimateButton from "../utils/AnimateButton";
import { motion } from "motion/react";
import { Switch } from "@/components/ui/switch";
import { CornerDownRight } from "lucide-react";
import FormSection from "./FormSection";

const features = [
  "Task Creation",
  "Task Assignment",
  "Due Date Tracking",
  "Basic Reporting",
  "Team Collaboration",
  "Commenting on Tasks",
  "Project Dashboard",
  "Priority Management",
  "File Attachments",
  "Progress Tracking",
];

const freefeatures = [
  "Upto 2 users",
  "Attendence capture",
  "Dashboard (Most active team,acitvity trend)",
  "Screenshot capture (frequency 2 in an hour)",
  "Data retention upto (3 weeks)",
];

const basicfeatures = [
  "White labeling",
  "Detailed dashboard",
  "Dashboard report",
  "Project management (Basic features)",
  "Screenshot capture (frequency 4 in an hour)",
  "Productivity rules 2",
  "2 configured breaks",
  "Auto alerts",
  "Data retention upto (4 weeks)",
];

const profeatures = [
  "Advanced dashboard",
  "Advanced productivity metrics",
  "Workload management",
  "All reports (Configurable)",
  "Advanced project & task management",
  "Screenshot capture (Configurable frequency)",
  "Goal Setting (Configurable)",
  "Unlimited breaks",
  "Productivity Rules (Configurable)",
  "Video live streaming (As per additional cost)",
  "Geo tracking",
  "2 Integerations",
  "Timesheet autofill",
  "Data retention upto (1 year)",
];

const enterprisefeatures = [
  "Integerations",
  "Custom feature development",
  "Dedicated team for support",
  "Personalised trainings",
  "Access to advance upcoming features",
  "Live onboarding training",
];

const PaymentSection = () => {
  // state for money change
  const [timeQnt, setTimeQnt] = useState("year");
  // state for money value
  const [amount, setamount] = useState({
    amount1: "",
    amount2: "",
  });
  // state for money switch value
  const [moneychange, setMoneyChange] = useState("USD");

  useEffect(() => {
    if (moneychange === "USD") {
      // set amount according to USD
      if (timeQnt === "year") {
        setamount({
          amount1: 2.99,
          amount2: 4.59,
        });
      } else {
        setamount({
          amount1: 3.59,
          amount2: 5.89,
        });
      }
    } else {
      //  set ampont according to rupees
      if (timeQnt === "year") {
        setamount({
          // amount1: 30 * 85,
          // amount2: 12 * 85,
          amount1: 249,
          amount2: 389,
        });
      } else {
        setamount({
          //  amount1: 3 * 85,
          // amount2: 5 * 85,
          amount1: 299,
          amount2: 499,
        });
      }
    }
  }, [timeQnt, moneychange]);

  return (
    <>
      <section className="p-3 py-6  mx-auto common-section   rounded-xl">
        <AnimateContent className="flex  items-center md:items-start flex-col gap-3">
          <span className=" text-sm lg:text-xs text-[#9049fe] p-2 bg-[#f1e7fe] rounded-full">
            100% Money-BackGuarantee
          </span>

          <div className="flex items-center  w-full justify-between ">
            <div className="flex items-center gap-2 px-3 p-1    rounded-full ">
              <Switch
                onCheckedChange={(e) =>
                  e ? setMoneyChange("INR") : setMoneyChange("USD")
                }
              />
              <span className="primary-para  font-medium">
                {moneychange == "INR" ? "USD" : "INR"}
              </span>
            </div>

            <div className="flex items-center  common-border  bg-primary overflow-hidden rounded-full  ">
              <motion.button
                animate={{
                  background: timeQnt === "year" ? "#7612fa" : "#f1f1f9",
                  color: timeQnt === "year" ? "#f1f1f9" : "#7612fa",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onClick={() => setTimeQnt("year")}
                className="p-2 px-3  text-sm font-medium "
              >
                Yearly
              </motion.button>
              <motion.button
                animate={{
                  background: timeQnt === "month" ? "#9049fe" : "#f1f1f9",
                  color: timeQnt === "month" ? "#f1f1f9" : "#9049fe",
                }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                onClick={() => setTimeQnt("month")}
                className="p-2 px-3 text-sm font-medium "
              >
                Monthly
              </motion.button>
            </div>
          </div>

          {/* section for payment  */}
        </AnimateContent>

        <AnimateContent className="grid grid-cols-1  mt-4  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4   gap-5 lg:gap-0 rounded-lg overflow-hidden">
          {/* payment div 1 */}
          <div className="flex   common-border  bg-primary  rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="space-y-[-6px] md:space-y-1 text-center">
              <h1 className="text-[1.8rem] font-bold ">Free Tier</h1>
              <p className="primary-para text-center">
                Preferred by individuals
              </p>
            </div>

            <div className="space-y-3  text-center ">
              <h2 className="text-6xl uppercase font-bold ">Free</h2>

              <FormSection
                title="Free forever"
                className="p-2 secondary-btn text-lg text-white font-bold rounded-lg w-full"
              />
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-[1rem]  font-bold">Features </h1>

              <ul className="flex flex-col gap-2 mt-2  primary-para ">
                {freefeatures.map((val, indx) => (
                  <li
                    key={indx}
                    className="text-para text-[1rem]  flex items-center gap-3"
                  >
                    <CornerDownRight color="#7612fa" /> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* payment  div 2 */}

          <div className="flex    common-border bg-primary   rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="space-y-[-6px] md:space-y-1 text-center">
              <h1 className="text-[1.8rem] font-bold ">Basic</h1>
              <p className="primary-para text-center">
                Preferred by small teams
              </p>
            </div>

            <div className="space-y-3  text-center ">
              <h2 className="text-6xl uppercase font-bold ">
                {" "}
                {moneychange === "USD"
                  ? `$${amount.amount1}`
                  : `₹${amount.amount1}`}
              </h2>
              {/* <AnimateButton >
                Get Started
              </AnimateButton> */}

              <FormSection
                title={"Get Started Free (15 days)"}
                cat={"pricing"}
                className="p-2 secondary-btn text-lg text-white font-bold rounded-lg w-full"
              />
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-[1rem] font-bold">
                Everything in Free Forever plus:
              </h1>

              <ul className="flex flex-col gap-2 mt-2  primary-para ">
                {basicfeatures.map((val, indx) => (
                  <li
                    key={indx}
                    className="text-para text-[1rem]  flex items-center gap-3"
                  >
                    <CornerDownRight color="#7612fa" /> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* payment  div 3 */}
          <div className="flex  common-border bg-primary rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="space-y-[-6px] md:space-y-1 text-center">
              <h1 className="text-[1.8rem] flex items-center justify-center gap-2 font-bold ">
                Pro{" "}
                <span className="text-xs   secondary-btn p-1 px-3  font-semibold rounded-full text-white ">
                  Popular
                </span>
              </h1>
              <p className="primary-para ">Preferred by mid-sized teams</p>
            </div>

            <div className="space-y-3 text-center  ">
              <h2 className="text-6xl uppercase font-bold ">
                {moneychange === "USD"
                  ? `$${amount.amount2}`
                  : `₹${amount.amount2}`}
              </h2>
              <FormSection
                title={"Get Started Free (15 days)"}
                cat="pricing"
                className="p-2 secondary-btn text-lg text-white font-bold rounded-lg w-full"
              />
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-[1rem] font-bold">
                Everything in Basic, plus:
              </h1>

              <ul className="flex flex-col gap-2 mt-2 primary-para ">
                {profeatures.map((val, indx) => (
                  <li
                    key={indx}
                    className="text-para text-[1rem]  flex items-center gap-3"
                  >
                    <CornerDownRight color="#7612fa" /> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* payment  div 4 */}

          <div className="flex   common-border bg-primary rounded-xl  lg:rounded-none px-6 py-8 gap-5 flex-col ">
            <div className="space-y-[-6px] md:space-y-1 text-center">
              <h1 className="text-[1.8rem] font-bold ">Enterprise</h1>
              <p className="primary-para text-center">
                Preferred by large teams
              </p>
            </div>

            <div className="flex flex-col gap-12 text-center ">
              <p className="text-para text-sm">
                Get a personalised demo to align with your business needs.
              </p>
              <FormSection
                title={"Contact Sales"}
                cat={"pricing"}
                className="p-2 secondary-btn text-lg text-white font-bold rounded-lg w-full"
              />
            </div>

            {/* lsit of features  */}

            <div className="py-5 px-1">
              <h1 className="text-[1rem] font-bold">
                Everything in pro, plus:
              </h1>

              <ul className="flex flex-col gap-2 mt-2 text-gray-600 ">
                {enterprisefeatures.map((val, indx) => (
                  <li
                    key={indx}
                    className="text-para text-[1rem]  flex items-center gap-3"
                  >
                    <CornerDownRight color="#7612fa" /> {val}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimateContent>
      </section>
    </>
  );
};

export default PaymentSection;
