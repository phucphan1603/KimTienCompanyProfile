import { motion } from "motion/react";
import HeroPattern1 from "../assets/images/hero-pattern-1.png";
import { ContactButtonCTA } from "../components/ContactButtonCTA";

export const Hero = ({ scrollToFooter }) => {
  return (
    <section className="hero-section relative h-dvh overflow-hidden min-h-[500px]">
      <div className="absolute top-0 left-0 z-20 w-full h-full text-black bg-black/60">
        <div className="flex items-center justify-end w-full h-full max-w-7xl mx-auto text-white">
          <div className="max-w-7xl flex flex-col items-center justify-center relative p-4 md:p-8 lg:p-24 md:space-y-6 space-y-2 w-full mx-2">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-2xl md:text-5xl font-semibold"
              viewport={{ once: true }}
            >
              Thương hiệu bạn <br />
              Sứ mệnh chúng tôi
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }}
              className="md:text-lg w-full md:w-2/3"
              viewport={{ once: true }}
            >
              <span className="font-medium text-lg md:text-xl">KIM TIỀN</span>{" "}
              chuyên in ấn, thiết kế POSM, hộp cứng, quà tặng & bao bì – phục vụ
              đa ngành nghề với chất lượng vượt trội & giá cạnh tranh.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 1 }}
              viewport={{ once: true }}
            >
              <ContactButtonCTA scrollToFooter={scrollToFooter} />
            </motion.div>
          </div>
          <img
            src={HeroPattern1}
            alt="hero-pattern-1"
            className="absolute bottom-0 left-0 h-2/3 -z-10"
          />
        </div>
      </div>
    </section>
  );
};
