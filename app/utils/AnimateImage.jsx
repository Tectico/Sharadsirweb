"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
const MotionImage = motion.create(Image);

const AnimateImage = ({ className, src }) => {
  return (
    <>
      <MotionImage
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 15,
        }}
        priority
        className={className}
        fill
        src={src}
        alt="Image is Loading"
        sizes="(max-width: 640px) 100vw,
       (max-width: 768px) 100vw,
       (max-width: 1024px) 100vw,
       (max-width: 1280px) 80vw,
       60vw"
      

      //  note that if you want to increase image quality than use below property 
        // sizes="100vw"
      />
    </>
  );
};

export default AnimateImage;
