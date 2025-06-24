"use client";
import React from "react";
import { motion } from "motion/react";

const AnimateSubHeading = ({ children, className = "" }) => {
  return (
    <motion.h2
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        duration: 0.6,
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.h2>
  );
};

export default AnimateSubHeading;
