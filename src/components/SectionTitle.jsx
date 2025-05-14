import React from "react";
import triangle from "../assets/images/triangle.svg";
import clsx from "clsx";
import { motion } from "framer-motion";

export const SectionTitle = ({ title = "", center = false }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "text-xl font-medium text-red-500 uppercase flex items-center gap-4",
        center ? "justify-center" : "justify-start"
      )}
    >
      {center && <img src={triangle} alt="triangle" className="-rotate-90" />}
      <span>{title}</span>
      <img src={triangle} alt="triangle" className="rotate-90" />
    </motion.h2>
  );
};
