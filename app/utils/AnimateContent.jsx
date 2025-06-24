"use client";

import React from "react";
import { motion } from "motion/react";

const AnimateContent = ({ children, className = "" }) => {
  return (
    <>
      <motion.div
        className={className}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 18,
          duration: 0.3,
        }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default AnimateContent;
