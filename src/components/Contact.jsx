import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import PhoneSVG from "../assets/images/phone.svg";
import ZaloSVG from "../assets/images/zalo.svg";
import MessengerSVG from "../assets/images/messenger.svg";

export const Contact = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed bottom-0 right-0 text-center px-4 pb-4">
        <motion.a href="tel:0901234567" title="phone">
          <img src={PhoneSVG} alt="phone" className="w-12 h-12" />
        </motion.a>
        <a href="tel:0901234567" title="zalo">
          <img src={ZaloSVG} alt="phone" className="w-12 h-12" />
        </a>
        <a href="tel:0901234567" title="messenger">
          <img src={MessengerSVG} alt="phone" className="w-12 h-12" />
        </a>
      </div>
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showScrollToTop ? 1 : 0,
          scale: showScrollToTop ? 1 : 0.8,
          cursor: showScrollToTop ? "pointer" : "default",
        }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 right-18 mb-4 hidden md:block w-12 h-12 rounded-full p-3 bg-blue-100"
        onClick={scrollToTop}
      >
        <img
          src="/images/arrow-up.svg"
          alt="arrow-up"
          className="w-full h-full"
        />
      </motion.div> */}
    </>
  );
};
