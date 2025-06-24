"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AnimateButton from "../utils/AnimateButton";
import { GoArrowRight } from "react-icons/go";
import { motion } from "motion/react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import toast from "react-hot-toast";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import AnimateImage from "../utils/AnimateImage";
import { SelectGroup } from "@radix-ui/react-select";

//import { useState } from "react";

const MotionButton = motion.create(DialogTrigger);

const FormSection = ({ title, className, cat }) => {
  const [userdata, setUserdata] = useState({
    name: null,
    organizationName: null,
    location: null,
    linkedinurl: null,
    email: null,
    phoneNo: null,
    teamsize: null,
    message: null,
  });

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (
      !userdata?.name ||
      !userdata?.organizationName ||
      !userdata?.location ||
      !userdata?.linkedinurl ||
      !userdata?.email ||
      !userdata?.email ||
      !userdata?.phoneNo ||
      !userdata?.teamsize ||
      !userdata?.message
    ) {
      toast.error("please fill all the filled");
    } else {
      try {
        const SendMailResponse = await axios.post("/api/sendMail", userdata);

        const { success } = SendMailResponse?.data;
        if (success) {
          toast.success("form submit successfully");
          setUserdata({
            name: null,
            organizationName: null,
            location: null,
            linkedinurl: null,
            email: null,
            phoneNo: null,
            teamsize: null,
            message: null,
          });
        } else {
          toast.error("Internal Server Error");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  console.log(userdata);
  return (
    <>
      <Dialog>
        <MotionButton
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.6,
          }}
          viewport={{ once: true, amount: 0.2 }}
          className={className}
        >
          {title}{" "}
          {cat === "pricing" || cat === "NavMenu" ? (
            ""
          ) : (
            <GoArrowRight size={20} />
          )}
          {cat === "landing" && <MdOutlineArrowRightAlt size={30} />}
        </MotionButton>

        <DialogContent
          className={
            " w-[95vw] sm:-[70vw] md:w-[75vw] p-2 px-3  !max-w-none  outline-none  border-none"
          }
        >
          <div className="hidden">
            <DialogHeader>
              <DialogTitle>Contact Us</DialogTitle>
            </DialogHeader>
          </div>

          {/* form of data  */}

          <div className=" flex flex-col gap-3">
            <div className="  flex items-center gap-4">
              {/* logo */}

              {/* <div className="h-[6vh] w-[20vh] relative">
                <Image
                  src="/images/lynkLogo.png"
                  alt="logo"
                  fill
                  className="object-contain object-center" // changed from object-cover to object-contain for logo clarity
                  priority // optional: preload image for faster display if it's above the fold
                />
              </div> */}

              {/* <div className="flex flex-col items-center ">
                <h2 className="text-xl px-0 ">Inquiry Form</h2>
              </div> */}

              {/* <div className="flex flex-col items-start text-sm   text-para">
                <p>Lynk247 team will get in touch with you shortly</p>
              </div> */}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative rounded-lg overflow-hidden ">
                <Image
                  src="https://images.unsplash.com/photo-1571573750055-39cfc5545c23?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="logo"
                  fill
                  className="object-cover object-center " // changed from object-cover to object-contain for logo clarity
                  priority // optional: preload image for faster display if it's above the fold
                />
              </div>

              <form
                onSubmit={HandleSubmit}
                action=""
                className="flex flex-col gap-2   rounded-lg  bg-primary "
              >
                <div className="flex flex-col gap-2   md:h-full  overflow-y-scroll md:overflow-hidden   ">
                  <div className="grid grid-cols-1  md:grid-cols-2 gap-1 ">
                    <div className="flex flex-col gap-1 p-1 ">
                      <label
                        htmlFor=""
                        className="text-para text-sm md:text-md  after:ml-0.5 after:text-red-500 after:content-['*']"
                      >
                        Name
                      </label>
                      <Input
                        type="text"
                        className="common-input "
                        onChange={(e) =>
                          setUserdata({ ...userdata, name: e.target.value })
                        }
                        value={userdata?.name || ""}
                        placeholder="Enter your Name"
                      />
                    </div>

                    <div className="flex flex-col gap-1 p-1 ">
                      <label
                        htmlFor=""
                        className="text-para text-sm md:text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                      >
                        Organization Name
                      </label>
                      <Input
                        type="text"
                        className="common-input "
                        onChange={(e) =>
                          setUserdata({
                            ...userdata,
                            organizationName: e.target.value,
                          })
                        }
                        value={userdata?.organizationName || ""}
                        placeholder="Enter organization Name"
                      />
                    </div>

                    <div className="flex flex-col gap-1 p-1 ">
                      <label
                        htmlFor=""
                        className="text-para text-sm md:text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                      >
                        Location
                      </label>
                      <Input
                        type="text"
                        onChange={(e) =>
                          setUserdata({ ...userdata, location: e.target.value })
                        }
                        value={userdata?.location || ""}
                        className="common-input "
                        placeholder="Enter your location"
                      />
                    </div>

                    <div className="flex flex-col gap-1 p-1 ">
                      <label htmlFor="" className="text-para text-sm">
                        Linkedin Url
                      </label>
                      <Input
                        type="text"
                        onChange={(e) =>
                          setUserdata({
                            ...userdata,
                            linkedinurl: e.target.value,
                          })
                        }
                        value={userdata?.linkedinurl || ""}
                        className="common-input "
                        placeholder="Enter your location"
                      />
                    </div>

                    <div className="flex flex-col gap-1 p-1 ">
                      <label
                        htmlFor=""
                        className="text-para text-sm md:text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                      >
                        Email
                      </label>
                      <Input
                        type="text"
                        onChange={(e) =>
                          setUserdata({ ...userdata, email: e.target.value })
                        }
                        value={userdata?.email || ""}
                        className="common-input common-border"
                        placeholder="Enter your Email"
                      />
                    </div>

                    <div className="flex flex-col gap-1 p-1">
                      <label
                        htmlFor="phone"
                        className="text-para text-sm md:text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                      >
                        Phone No
                      </label>

                      <div className="flex items-center common-input common-border rounded-md overflow-hidden">
                        {/* Country Code Dropdown */}
                        <Select
                          onValueChange={(e) =>
                            setUserdata({
                              ...userdata,
                              countryCode: e,
                            })
                          }
                          value={userdata?.countryCode || "+1"}
                          className="bg-transparent text-sm px-3 py-2 outline-none"
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="+91" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectItem value="+1">+1</SelectItem>
                              <SelectItem value="+91">+91</SelectItem>
                              <SelectItem value="+44">+44</SelectItem>
                              <SelectItem value="+61">+61</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>

                        {/* Phone Number Input */}
                        <Input
                          type="text"
                          id="phone"
                          placeholder="Enter your Phone No"
                          value={userdata?.phoneNo || ""}
                          onChange={(e) =>
                            setUserdata({
                              ...userdata,
                              phoneNo: e.target.value,
                            })
                          }
                          className="flex-1 px-3 py-2 outline-none bg-transparent"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1  p-1 ">
                      <label
                        htmlFor=""
                        className="text-para text-sm md:text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                      >
                        Team Size
                      </label>
                      <Select
                        onValueChange={(e) =>
                          setUserdata({ ...userdata, teamsize: e })
                        }
                        value={userdata?.teamsize || ""}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select team Size " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">1–10 employees</SelectItem>
                          <SelectItem value="11-50">11–50 employees</SelectItem>
                          <SelectItem value="51-200">
                            51–200 employees
                          </SelectItem>
                          <SelectItem value="200+">200+ employees</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col gap-2  p-1 ">
                      <label
                        htmlFor=""
                        className="text-para text-sm md:text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                      >
                        Preferred Plan
                      </label>
                      <Select
                        onValueChange={(e) =>
                          setUserdata({ ...userdata, teamsize: e })
                        }
                        value={userdata?.teamsize || ""}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select preferred plan " />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-10">Free</SelectItem>
                          <SelectItem value="11-50">Basic</SelectItem>
                          <SelectItem value="51-200">Pro</SelectItem>
                          <SelectItem value="200+">Enterprise</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2   p-1">
                    <label
                      htmlFor=""
                      className="text-para  text-sm md:text-md after:ml-0.5 after:text-red-500 after:content-['*']"
                    >
                      Please enter your query
                    </label>
                    <Textarea
                      type="text"
                      onChange={(e) =>
                        setUserdata({ ...userdata, message: e.target.value })
                      }
                      value={userdata?.message || ""}
                      className="common-input common-border  h-30"
                      placeholder="Enter your Name"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <button className="secondary-btn py-2 mt-3 px-8 shadow-none">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FormSection;
