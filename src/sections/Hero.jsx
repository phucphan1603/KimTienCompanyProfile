import React from "react";
import { motion } from "motion/react";
import { ContactButtonCTA } from "../components/ContactButtonCTA";
export const Hero = ({ scrollToFooter }) => {
  return (
    <section className="relative h-dvh w-screen overflow-hidden">
      <motion.img
        animate={{ scale: [1, 1.5, 1] }}
        transition={{
          duration: 120,
          ease: "linear",
          repeat: Infinity,
        }}
        src="/images/hero1.jpg"
        className="h-full w-full object-cover object-left-center"
        alt="hero"
      />
      <div className="absolute top-0 left-0 flex h-full w-full items-cneter justify-start bg-black/50 text-white">
        <div className="mx-auto flex h-full w-full max-w-7xl flex-col items-start justify-center px-4 text-left md:px-8 lg:px-16 md:space-y-6 space-y-2">
          <h1 className="text-4xl md:text-7xl font-bold uppercase">
            Thương hiệu bạn
          </h1>
          <h1 className="text-4xl md:text-7xl font-bold uppercase w-full md:text-right">
            Sứ mệnh chúng tôi
          </h1>
          <p className="mt-4 text-lg md:text-xl md:w-[50%]">
            <span className="font-bold text-xl md:text-2xl">KIM TIỀN</span>{" "}
            chuyên in ấn, thiết kế POSM, hộp cứng, quà tặng & bao bì – phục vụ
            đa ngành nghề với chất lượng vượt trội & giá cạnh tranh.
          </p>

          <ContactButtonCTA scrollToFooter={scrollToFooter} />
        </div>
      </div>
    </section>
  );
};
