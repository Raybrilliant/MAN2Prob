"use client";
import React, { useEffect, useRef } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";

const CounterAnimate = ({ target }: { target: number }) => {
  const ref = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const observer = new IntersectionObserver((enter) => {
      if (enter[0].isIntersecting) {
        animate(count, target, { duration: 4 });
        observer.disconnect();
      }
    });
  
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [target]);
  return (
    <motion.div ref={ref} viewport={{ once: true }} className="inline-block">
      {rounded}
    </motion.div>
  );
};

export default CounterAnimate;
