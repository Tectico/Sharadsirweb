"use client";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { dataArray } from "../data";
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { FaTasks } from "react-icons/fa";

const MobileNavbar = () => {
  let cat1 = "All Features";
  let cat2 = "Capabilities";
  let cat3 = "Integration";

  return (
    <Sheet>
      <SheetTrigger className="lg:hidden p-3 px-3 bg-primary rounded-xl  hover:bg-opacity-90 transition">
        <FiMenu size={25} />
      </SheetTrigger>

      <SheetContent
        className="w-full max-h-screen overflow-y-auto p-0 bg-backgroundColor"
        side="left"
      >
        <SheetHeader>
          <SheetTitle className="hidden">Are you absolutely sure?</SheetTitle>
        </SheetHeader>

        {/* Main Content */}
        <div className="px-3 py-3 space-y-4">
          <ul className="flex flex-col gap-3">
            <Link href={"/pricing"}>
              <SheetClose className="text-lg w-full text-start font-semibold text-para p-3 bg-primary  rounded-sm  ">
                Pricing
              </SheetClose>
            </Link>

            <li>
              <Accordion
                className="bg-primary rounded-md"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[1rem] text-para px-3 py-2">
                    {cat1}
                  </AccordionTrigger>
                  <AccordionContent className="max-h-[50vh] overflow-y-auto px-3 space-y-2">
                    {dataArray[1].title === cat1 &&
                      dataArray[1].subData?.map((val, ind) => (
                        <Link key={ind} href={`/features/${val?.linKpath}`}>
                          <SheetClose className="common-navlink w-full  text-start flex items-start gap-2 text-sm px-2 py-2 rounded-md hover:bg-muted">
                            <FaTasks size={15} className="mt-1" /> {val?.title}
                          </SheetClose>
                        </Link>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>

            <li>
              {" "}
              {/* Second Subcategory for  capabilities */}
              <Accordion
                className="bg-primary rounded-md"
                type="single"
                collapsible
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-[1rem] text-para px-3 py-3">
                    {cat2}
                  </AccordionTrigger>
                  <AccordionContent className="max-h-[50vh] overflow-y-auto px-3 space-y-4">
                    {dataArray[0].title === cat2 &&
                      dataArray[0].subData?.map((val, ind) => (
                        <div key={ind} className="space-y-1">
                          <h3 className="text-sm text-muted-foreground font-medium">
                            {val?.title}
                          </h3>
                          <div className="flex flex-col gap-2 pl-3">
                            {val?.subCat?.map((value, idx) => (
                              <Link
                                key={idx}
                                href={`/capabilities/${value?.linKpath}`}
                              >
                                <SheetClose className="common-navlink flex items-start gap-2 text-sm px-2 py-1 rounded-md hover:bg-muted">
                                  <FaTasks size={15} className="mt-1" />{" "}
                                  {value?.title}
                                </SheetClose>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
