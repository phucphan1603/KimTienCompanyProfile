import React from "react";
import { ContactButtonCTA } from "../components/ContactButtonCTA";
import HeroImage from "../assets/images/hero1.jpg";
import HeroIcon from "../assets/images/hero-icon.png";
import HeroPattern2 from "../assets/images/hero-pattern-2.png";
import HeroPattern1 from "../assets/images/hero-pattern-1.png";

export const Hero = ({ scrollToFooter }) => {
  return (
    <section className="relative h-dvh mt-16 overflow-hidden">
      <img
        src={HeroImage}
        className="h-full w-full object-cover object-left-center"
        alt="hero"
      />
      <div className="absolute top-0 left-0 z-20 w-full h-full bg-black/20 text-white">
        <div className="flex items-center justify-end w-full h-full max-w-7xl mx-auto">
          <div className="max-w-7xl hero-content flex flex-col items-center justify-center relative p-4 md:p-8 lg:p-24 md:space-y-6 space-y-2 text-blue-900 w-full md:w-2/3 lg:w-1/2 max-h-2/3 md:mr-16 mx-2">
            <img src={HeroIcon} alt="hero-icon" />
            <h1 className="text-2xl md:text-4xl font-semibold">
              Thương hiệu bạn <br />
              Sứ mệnh chúng tôi
            </h1>

            <p className="mt-4 md:text-lg">
              <span className="font-medium text-lg md:text-xl">KIM TIỀN</span>{" "}
              chuyên in ấn, thiết kế POSM, hộp cứng, quà tặng & bao bì – phục vụ
              đa ngành nghề với chất lượng vượt trội & giá cạnh tranh.
            </p>

            <ContactButtonCTA scrollToFooter={scrollToFooter} />
            <img
              src={HeroPattern2}
              alt="hero-pattern-2"
              className="absolute -top-2 -left-2 -z-10"
            />
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
