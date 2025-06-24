"use client";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { LuCalendarClock } from "react-icons/lu";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, PhoneForwarded } from "lucide-react";
const Footer = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/" ? (
        <footer className=" py-5 lg:mt-30 mt-10  px-10  w-full lg:w-[80%] bg-primary  mx-auto gap-2   flex  flex-col  md:flex-row lg:justify-between       ">
          <div className="flex items-center gap-1 justify-center">
            <img className="h-4" src="/images/landingImages/SS10.png" alt="" />{" "}
            <span className="text-sm font-bold">
              Unlock insights boost productivity
            </span>
          </div>

          <ul className="flex text-gray-500 text-sm flex-row-reverse  items-center  justify-center md:text-sm  gap-4 ">
            <li>@ 2025 Lynk247</li>
            <li>Security</li>
            <li>Privacy</li>
            <li>terms</li>
          </ul>
        </footer>
      ) : (
        <footer className="bg-primary">
          <div className="flex common-border bg-primary">
            <div className="w-[80%] mx-auto flex justify-between items-center text-sm py-8">
              <span className="flex items-center gap-1 font-bold text-sm ">
                <img
                  className="h-5 "
                  src="/images/landingImages/SS10.png"
                  alt=""
                />{" "}
                Unlock insights boost productivity
              </span>

              <div className="lg:flex items-center justify-between gap-25  hidden">
                <span className="flex items-center gap-1 ">
                  {" "}
                  <LuCalendarClock size={20} />
                  24/7 support
                </span>
                <span className="flex items-center gap-1 ">
                  {" "}
                  <MdOutlineTipsAndUpdates size={20} />
                  Weekly updates
                </span>
                <span className="flex items-center gap-1 ">
                  {" "}
                  <CiLock size={20} />
                  Secure and compliant
                </span>
                <span className="flex items-center gap-1 ">
                  <MdOutlineAccessTime size={20} />
                  99.9% uptime
                </span>
              </div>
            </div>
          </div>

          <div className=" md:w-[90%] lg:w-[80%] flex md:flex-row  mx-auto gap-5   flex-col  ">
            <div className="md:w-[30%] w-full    flex-col gap-3   p-2    flex ">
              <h3 className="  font-bold ">Contact Us</h3>
              <div className="flex flex-col gap-3">
                <p className="flex text-[#504a80] items-start gap-3 text-sm">
                  <PhoneForwarded size={18} /> <span>4656464446</span>
                </p>
                <p className="flex text-[#504a80] items-start gap-3 text-sm">
                  <MapPin size={20} />{" "}
                  <span>
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                  </span>
                </p>

                <p className="flex text-[#504a80] items-start gap-3 text-sm">
                  <Mail size={18} />
                  <span>mohit@gmail.com</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 w-full  sm:grid-cols-4 md:w-[65%] lg:p-2  md:gap-10  gap-4 mx-auto   p-3 lg:grid-cols-4">
              <div className="flex flex-col gap-2  ">
                <h4 className="text-start">Lynk247</h4>

                <ul className="text-[#504a80] text-sm  flex flex-col gap-4  font-semibold">
                  <li>Download</li>
                  <li>About Us</li>
                  {/* <li>Careers</li>
                <li>Customers</li>
                <li>Community</li>
                <li>Affilate & Referrals</li>
                <li>Reviews</li>
                <li>Press</li>
                <li>Brand</li> */}
                </ul>
              </div>

              {/* <div className="flex flex-col gap-2 ">
              <h4 className="text-start">Resources</h4>

              <ul className="text-[#504a80] text-sm flex flex-col gap-4  font-semibold">
                <li>Download</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Customers</li>
                <li>Community</li>
                <li>Affilate & Referrals</li>
                <li>Reviews</li>
                <li>Press</li>
                <li>Brand</li>
              </ul>
            </div> */}

              <div className="flex flex-col gap-2 ">
                <h4 className="text-start">Features</h4>
                <ul className="text-[#504a80] text-sm flex flex-col gap-4  font-semibold">
                  <li>Attendence Management</li>
                  <li>Live User Activity Monitoring</li>
                  <li>Smart Classification of Productive App</li>
                  <li>User Activity Status</li>
                  <li>The Real Productivity Algo</li>
                  <li>Interactive App For Desktop</li>
                  <li>Screenshots</li>
                  <li>Live video streaming</li>
                  <li>All-in-One Project & Task Management</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2 ">
                <h4 className="text-start">Compare</h4>

                <ul className="text-[#504a80] text-sm flex flex-col gap-4  font-semibold">
                  <li>vs we360.ai</li>
                  <li>vs Hubstaff</li>
                  <li>vs TimeDoctor</li>
                  <li>vs DeskTime</li>
                </ul>
              </div>

              <div className="flex flex-col gap-2 ">
                <h4 className="text-start">Industries</h4>

                <ul className="text-[#504a80] text-sm flex flex-col gap-4  font-semibold">
                  <li>Download</li>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Customers</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="py-10 border-t-[0.5px] border-b-[0.5px] border-gray-300 ">
            <div className="lg:w-[80%] mx-auto flex flex-col gap-2 lg:flex-row items-center justify-between">
              <div className="flex flex-col gap-3 ">
                <div className="flex  gap-3">
                  <Link href={"#"}>
                    <FaLinkedin size={25} />
                  </Link>

                  <Link href={"#"}>
                    <FaFacebookSquare size={25} />
                  </Link>

                  <Link href={"#"}>
                    <FaInstagram size={25} />
                  </Link>

                  <Link href={"#"}>
                    <FaSquareXTwitter size={25} />
                  </Link>
                </div>
              </div>
              {/* <div className="flex items-center gap-2 ">
                <img
                  src="https://clickup.com/assets/badges/v3/app-store-badge-black.svg"
                  alt=""
                />
                <img
                  src="https://clickup.com/assets/badges/v3/google-play-badge-black.svg"
                  alt=""
                />
                <img
                  className="hidden lg:block"
                  src="https://clickup.com/assets/badges/v3/app-store-microsoft-badge-black.svg"
                  alt=""
                />
              </div> */}

              <div className="text-sm flex items-center gap-3 lg:gap-10 text-[#504a80]">
                <span>@2025 Lynk247</span>
                <span>Security</span>
                <span>Privacy</span>
                <span>Terms</span>
              </div>
            </div>
          </div>
        </footer>
      )}
    </>
  );
};

export default Footer;
