"use client";

import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { BiCubeAlt } from "react-icons/bi";
import { MdOutlineTask } from "react-icons/md";
import { PiArrowBendRightUpBold } from "react-icons/pi";
import Link from "next/link";
import { FaTasks } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { dataArray } from "../data";
import MobileNavbar from "./MobileNavbar";
import FormSection from "./FormSection";
import WatchVideoSection from "./WatchVideoSection";

const Navbar = () => {
  // use ref for  navbar closing when we click outside
  const divRef = useRef(null);
  const linkref = useRef(null);
  // variables for category
  let cat1 = "All Features";
  let cat2 = "capabilities";
  let cat3 = "Integration";

  // main data array
  const pathname = usePathname();
  // state for nav toggle
  const [navDropToggle, setNavDropToggle] = useState(false);

  const [categorryData, setCategoryData] = useState({
    cat: cat1,
    data: [],
  });

  const handleClickOutside = (event) => {
    if (
      divRef.current &&
      !divRef.current.contains(event.target) &&
      !linkref.current.contains(event.target)
    ) {
      setNavDropToggle(false);
    }
  };

  const Handlecategory = (cat, data = []) => {
    if (cat) {
      setCategoryData({ data, cat });
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed w-full ${
          navDropToggle ? "min-h-screen" : ""
        }  overflow-hidden z-[50]`}
      >
        <nav className=" w-full md:w-[80%]    mx-auto p-3 py-5 flex items-center  justify-between">
          {/* add logo */}
          <Link
            href={"/home"}
            className="  gap-2  flex items-center bg-primary  hover:shadow-sm   p-2  px-4 rounded-xl"
          >
            <img src="\images\lynkLogo.png" className="h-9 w-auto" alt="Logo" />

            <div className="text-[0.7rem] text-para hidden lg:block leading-tight  border-l-[1px] border-gray-700 px-2">
              Developed by
              <br /> Optimize Innovations
            </div>
          </Link>

          {pathname !== "/" && (
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4  p-1 rounded-xl text-para bg-primary    hover:shadow-sm   ">
                <li
                  onClick={() => setNavDropToggle(!navDropToggle)}
                  ref={linkref}
                  className="p-1   flex items-center gap-2 cursor-pointer  lg:p-2 px-7 rounded-lg hover:bg-[#f1f1f9]"
                >
                  Product <IoIosArrowDown />
                </li>
                <Link
                  href={"/pricing"}
                  className="p-1  lg:p-2 px-6 rounded-lg cursor-pointer hover:bg-hoverColor"
                >
                  Pricing
                </Link>
              </ul>
            </div>
          )}

          <div className="flex items-center gap-4 px-2  text-para">
            <FormSection
              title={"Contact Sales"}
              cat={"NavMenu"}
              className={
                "  bg-primary hidden lg:flex  text-sm     hover:shadow-sm   rounded-xl p-3 hover:bg-hoverColor px-4 "
              }
            />

            {/* login signup button */}

            {/* <div className=" flex items-center justify-between gap-1 p-1  bg-primary   rounded-xl">
              <button className="p-3 md:p-2 px-8  text-sm hidden lg:block  rounded-lg hover:bg-hoverColor">
                Login
              </button>
              <AnimateButton className="  primary-btn py-2   ">
                SignUp
              </AnimateButton>
            </div> */}

            <MobileNavbar />
          </div>
        </nav>

        {/* Main  menu start from here  */}

        <AnimatePresence>
          {navDropToggle && (
            <motion.div
              ref={divRef}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeIn" }}
              exit={{ opacity: 0, y: 50 }}
              className="  bg-primary  lg:w-[80%] mx-auto mt-1 space-y-4     rounded-xl p-4 "
            >
              {/*  drop down menu 1  for product section */}
              <div className=" grid grid-cols-5  gap-2 ">
                <div className="col-span-1 ">
                  <ul className="flex flex-col w-full">
                    <li
                      onClick={() => Handlecategory(cat1)}
                      className="flex items-center justify-between p-1 rounded-xl font-medium  text-[#3c3a54] hover:text-black cursor-pointer hover:bg-[#f1f1f9] "
                    >
                      <p className="common-navlink ">
                        <IoSpeedometerOutline size={20} /> {cat1}
                      </p>
                      <MdKeyboardArrowRight size={24} className="mt-1" />
                    </li>

                    <li
                      onClick={() => Handlecategory(cat2)}
                      className="flex items-center justify-between p-1 rounded-xl font-medium  text-[#3c3a54] hover:text-black cursor-pointer hover:bg-[#f1f1f9] "
                    >
                      <p className="common-navlink w-full  ">
                        <BiCubeAlt size={20} />
                        {cat2}
                      </p>
                      <MdKeyboardArrowRight size={24} className="mt-1" />
                    </li>
                    <li
                      onClick={() => Handlecategory(cat3)}
                      className="flex items-center justify-between p-1  rounded-xl  text-[#3c3a54] hover:text-black cursor-pointer hover:bg-[#f1f1f9] "
                    >
                      <p className="common-navlink w-full font-semibold ">
                        <IoSpeedometerOutline size={20} /> {cat3}
                      </p>
                      <MdKeyboardArrowRight size={24} className="mt-1" />
                    </li>
                  </ul>

                  {/* div for your logo */}

                  <div className="h-full w-full"></div>
                </div>

                {/* section for Capabilities */}

                {categorryData.cat === cat2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                    className="col-span-4  grid grid-cols-4"
                  >
                    {dataArray[0].subData?.map((val, ind) => (
                      <div key={ind} className=" flex flex-col gap-1 ">
                        <p className="text-sm px-3 text-black/80 font-semibold">
                          {val?.title}
                        </p>

                        <ul className="flex flex-col primary-para text-sm  ">
                          {val?.subCat?.map((val, index) => (
                            <Link
                              key={index}
                              href={`/capabilities/${val?.linKpath}`}
                              className="flex gap-2 text-para  items-center text-[0.8rem]  hover:bg-[#f1f1f9] p-2 "
                              onClick={() => setNavDropToggle(!navDropToggle)}
                            >
                              <MdOutlineTask size={18} /> {val?.title}
                            </Link>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* type 1 capabilities */}
                  </motion.div>
                )}

                {/* section for All features  */}

                {categorryData.cat === cat1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                    className="col-span-4   grid grid-cols-4"
                  >
                    <div className="col-span-3   grid grid-cols-1">
                      {/* div for nav list  */}

                      <div className=" p-3  columns-2  gap-2 items-start flex-wrap w-full">
                        {dataArray[1].subData?.map((val, ind) => (
                          <Link
                            onClick={() => setNavDropToggle(!navDropToggle)}
                            key={ind}
                            href={`/features/${val?.linKpath}`}
                            className="flex gap-2 text-para  items-center text-[0.8rem]  hover:bg-[#f1f1f9] p-2 "
                          >
                            <FaTasks size={15} /> {val?.title}
                          </Link>
                        ))}
                      </div>

                      <div>
                        <button className="p-3 w-full bg-[#f8f8fc] text-gray-400 rounded-xl">
                          See all features
                        </button>
                      </div>
                    </div>

                    <div className="col-span-1">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col  items-start ">
                          <h1 className="font-bold text-sm">Comming Soon</h1>
                        </div>

                        <div className="flex flex-col gap-6">
                          <ul className="text-md flex flex-col gap-2  text-[#3c3a54]">
                            <li className="flex items-center gap-2">
                              <PiArrowBendRightUpBold color="#8c0b9fff" />
                              Lynk247 Chat
                            </li>
                            <li className="flex items-center gap-2">
                              <PiArrowBendRightUpBold color="#8c0b9fff" />
                              Lynk247 Reminders
                            </li>
                            {/* 
                            <li className="flex items-center gap-2">
                              <PiArrowBendRightUpBold color="#8c0b9fff" />
                              Generate standup
                            </li>
                            <li className="flex items-center gap-2">
                              <PiArrowBendRightUpBold color="#8c0b9fff" />
                              Generate standup
                            </li>
                            <li className="flex items-center gap-2">
                              <PiArrowBendRightUpBold color="#8c0b9fff" />
                              Generate standup
                            </li> */}
                          </ul>
                          {/* 
                          <button className="p-2 rounded-lg mx-auto cursor-pointer ">
                            Learn More
                          </button> */}
                        </div>
                      </div>
                    </div>

                    {/* type 1 capabilities */}
                  </motion.div>
                )}

                {/* section for integration  */}

                {categorryData.cat === cat3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, ease: "easeIn" }}
                    className="col-span-4   grid grid-cols-4"
                  >
                    <div className="col-span-3    grid grid-cols-1">
                      {/* div for nav list  */}

                      <div className=" p-3  columns-3 min-h-[40vh]  items-start flex-wrap w-full">
                        <Link
                          href="#"
                          className="flex gap-2 text-para  items-center text-[0.8rem]  hover:bg-[#f1f1f9] p-2 "
                        >
                          <FaTasks size={18} /> Custom Integerations
                        </Link>
                      </div>

                      {/* <div>
                        <button className="p-3 w-full bg-[#f8f8fc] text-gray-400 rounded-xl">
                          See all Integration 
                        </button>
                      </div> */}
                    </div>
                  </motion.div>
                )}
              </div>
              <div className="w-full flex items-center justify-end text-[#3c3a54] p-3  gap-8">
                <FormSection
                  title={"Contact Sales"}
                  cat={"NavMenu"}
                  className={"flex items-center text-sm gap-2 "}
                />

                <WatchVideoSection />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;
