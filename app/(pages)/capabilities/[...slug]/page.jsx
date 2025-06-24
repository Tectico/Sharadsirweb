import React from "react";
import { dataArray, metadata } from "@/app/data";
import { notFound } from "next/navigation";
import Capabilities from "@/app/components/Capabilities/Capabilities";

//  function for setting metadata
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const value = metadata.find((val) => val?.slug === slug[0]);

  if (value) {
    return {
      title: value?.title,
      description: value?.description,
    };
  }
}

// main page
const page = async ({ params }) => {
  const { slug } = await params;

  const isSlugValidate = async (slugvalue) => {
    const value = dataArray[0].subData.some((val) =>
      val?.subCat?.some((value) => value?.linKpath === slugvalue)
    );

   
    return value;
  };

  if (slug.length === 1 && isSlugValidate(slug[0])) {
    // main page of Features

    return (
      <>
        <Capabilities slug={slug[0]} />
      </>
    );
  } else {
    notFound();
  }
};

export default page;
