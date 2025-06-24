"use client";
import React from "react";
import { motion } from "motion/react";
const AnimateButton = ({ children, className }) => {
  return (
    <>
      <motion.button
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
        {children}
      </motion.button>
    </>
  );
};

export default AnimateButton;
