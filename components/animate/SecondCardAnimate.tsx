"use client";
import React from "react";
import { motion } from "framer-motion";

const SecondCardAnimate = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity:0, y: 20 }}
      whileInView={{ opacity:1, y: 0, transition: { duration:1, delay:0.8, ease: [0.87, 0, 0.13, 1], type:'spring' } }}
      viewport={{once:true}}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

export default SecondCardAnimate;
