"use client";
import React from "react";
import { motion } from "framer-motion";

const EmojiAnimate = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity:0, y: 20 }}
      animate={{ opacity:1, y: 0, transition: { duration:1.5, delay:0.7, ease: [0.87, 0, 0.13, 1], type:'spring' } }}
      className="inline-block max-lg:hidden"
    >
      {children}
    </motion.div>
  );
};

export default EmojiAnimate;
