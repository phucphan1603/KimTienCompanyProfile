import React from "react";
import { ContactButtonCTA } from "../components/ContactButtonCTA";
import DesignLogo from "../assets/images/design-logo.png";
import PrintLogo from "../assets/images/print-logo.png";
import ProductLogo from "../assets/images/product-logo.png";
import MagicIcon from "../assets/images/magic.svg";
import BackgroundImage from "../assets/images/bg-1.jpg";
import { motion } from "framer-motion";
export const Services = ({ refServices, scrollToFooter }) => {
  return (
    <section
      ref={refServices}
      className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 relative"
    >
      <div className="flex lg:flex-row flex-col justify-between gap-10">
        <div className="space-y-4 w-full lg:w-1/2">
          <h2 className="text-2xl font-medium mb-4">Dịch vụ</h2>
          <p className="text-4xl font-semibold">
            Làm thế nào chúng tôi có thể góp phần nâng tầm thương hiệu của bạn?
          </p>
          <p className="text-lg text-gray-600">
            Với kinh nghiệm lâu năm trong lĩnh vực thiết kế – in ấn – quảng cáo,
            chúng tôi mang đến giải pháp toàn diện từ POSM, bao bì đến quà tặng
            thương hiệu, giúp doanh nghiệp của bạn nổi bật, nhất quán và ghi dấu
            trong tâm trí khách hàng.
          </p>
          <div className="text-center lg:text-left">
            <ContactButtonCTA scrollToFooter={scrollToFooter} />
          </div>
        </div>
        <div className="lg:max-w-1/2 space-y-8 lg:mt-11">
          <div className="flex justify-center gap-8 lg:justify-between lg:gap-10">
            <div className="space-y-4 text-center ">
              <img
                src={DesignLogo}
                alt=""
                className="text-center mx-auto w-10 h-10 lg:h-24 lg:w-24 md:h-16 md:w-16 object-contain"
              />
              <h3 className="text-xl font-semibold uppercase">Thiết kế</h3>
            </div>
            <div className="space-y-4 text-center ">
              <img
                src={PrintLogo}
                alt=""
                className="text-center mx-auto w-10 h-10 lg:h-24 lg:w-24 md:h-16 md:w-16 object-contain"
              />
              <h3 className="text-xl font-semibold uppercase">In ấn</h3>
            </div>
            <div className="space-y-4 text-center">
              <img
                src={ProductLogo}
                alt=""
                className="text-center mx-auto w-10 h-10 lg:h-24 lg:w-24 md:h-16 md:w-16 object-contain"
              />
              <h3 className="text-xl font-semibold uppercase">Thành phẩm</h3>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex lg:justify-start justify-center items-start">
              <img src={MagicIcon} alt="" />
              <p>
                <span className="font-medium">&nbsp; POSM quảng cáo: </span>{" "}
                Poster, hanger, kệ trưng bày, bảng hiệu, banner...
              </p>
            </div>
            <div className="flex lg:justify-start justify-center items-start">
              <img src={MagicIcon} alt="" />
              <p>
                <span className="font-medium">&nbsp; Bao bì – Hộp cứng: </span>{" "}
                Hộp mỹ phẩm, hộp quà, túi giấy, màng metalize, tem nhãn...
              </p>
            </div>
            <img
              src={BackgroundImage}
              alt="may-in-1"
              className="h-52 w-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        {/* <img
          src="/images/background.svg"
          alt="background"
          className="w-full object-cover"
        /> */}
      </div>
    </section>
  );
};
//
