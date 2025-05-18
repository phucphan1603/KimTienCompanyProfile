import React, { useRef } from "react";
import { motion } from "motion/react";
import clsx from "clsx";

export const SectionDesc = ({ desc = "", className = "" }) => {
  const refSectionDesc = useRef(null);
  return (
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      ref={refSectionDesc}
      className={clsx(
        "md:text-4xl text-3xl font-bold uppercase text-blue-900 space-y-4 leading-10 md:leading-12",
        className
      )}
      viewport={{ once: true }}
    >
      {desc}
    </motion.p>
  );
};
