"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
const MotionLink = motion.create(Link);

const AnimateLink = ({ children, href = "#", className }) => {
  return (
    <>
      <MotionLink
        initial={{ y: 0 }}
        whileHover={{ y: 2 }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        href={href}
        className={className}
      >
        {children}
      </MotionLink>
    </>
  );
};

export default AnimateLink;
