"use client";
import React from "react";
import { motion } from "framer-motion";

const TextAnimate = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity:0, y: 20 }}
      animate={{ opacity:1, y: 0, transition: { delay:0.6, type:'spring' } }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default TextAnimate;
