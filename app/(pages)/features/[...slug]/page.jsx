import React from "react";

import Features from "@/app/components/Features/Features";
import { dataArray, metadata } from "@/app/data";
import { notFound } from "next/navigation";

// function for setting metadata
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

const page = async ({ params }) => {
  const { slug } = await params;

  const isSlugValidate = (slugvalue) => {
    const value = dataArray[1].subData.some(
      (val) => val.linKpath === slugvalue
    );

   

    return value;
  };

  if (slug.length === 1 && isSlugValidate(slug[0])) {
    // main page of Features
    return (
      <>
        <Features slug={slug[0]} />
      </>
    );
  } else {
    notFound();
  }
};

export default page;
