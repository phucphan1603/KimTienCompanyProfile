import React, { useRef } from "react";
import { motion } from "motion/react";

export const SectionDesc = ({ desc = "" }) => {
  const refSectionDesc = useRef(null);
  return (
    <motion.p
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      ref={refSectionDesc}
      className="md:text-4xl text-3xl font-extrabold text-blue-900 uppercase space-y-4 leading-10 md:leading-12"
    >
      {desc}
    </motion.p>
  );
};
