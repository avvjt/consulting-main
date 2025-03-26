"use client";

import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Statistics: React.FC = () => {
  const stats = [
    {
      title: "Ideas Delivered",
      value: 500,
      description: "That didn't just stay on paper, they made an impact.",
    },
    {
      title: "Campaigns Launched",
      value: 1000,
      description: "That reached the right people, at the right time, with the right message.",
    },
    {
      title: "Engagement Hours",
      value: 20000,
      description: "Spent understanding what clicks, what sticks, and what truly connects.",
    },
    {
      title: "Client Satisfaction",
      value: 98,
      description: "Because good work isn't just delivered, it's remembered.",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      controls.start("visible");

      // Animate the values incrementally
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000; // 2 seconds
        const incrementTime = duration / end;

        const timer = setInterval(() => {
          start += 1;
          setAnimatedValues((prev) => {
            const newValues = [...prev];
            newValues[index] = start;
            return newValues;
          });

          if (start >= end) clearInterval(timer);
        }, incrementTime);
      });
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger the animations of children
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  const valueVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <div className="bg-white py-16 px-6">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-4 md:grid-cols-4 gap-10 text-black"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center w-full" // Ensure consistent width
            variants={itemVariants}
          >
            <h3 className="text-2xl mb-5 font-medium text-start">{stat.title}</h3>
            <hr />
            <motion.p
              className="text-8xl my-3 font-semibold ml-2 mt-3 text-start mb-4 overflow-hidden truncate" // Prevent overflow
              variants={valueVariants}
            >
              {animatedValues[index]}+
            </motion.p>
            <p className="text-gray-600 text-lg tracking-tight text-start line-clamp-2">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Statistics;