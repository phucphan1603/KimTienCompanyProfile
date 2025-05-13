import React from "react";
import DesignLogo from "../assets/images/design-logo.png";
import PrintLogo from "../assets/images/print-logo.png";
import ProductLogo from "../assets/images/product-logo.png";
import triangle from "../assets/images/triangle.svg";
import { motion } from "framer-motion";
export const Services = ({ refServices }) => {
  return (
    <section ref={refServices} className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 relative">
        <div className="text-center mx-auto">
          <div className="space-y-4 w-full lg:w-2/3 mx-auto">
            <h2 className="text-xl font-medium text-red-500 uppercase flex justify-center items-center gap-4">
              <img src={triangle} alt="triangle" className="-rotate-90" />
              <span>Dịch vụ</span>
              <img src={triangle} alt="triangle" className="rotate-90" />
            </h2>
            <p className="md:text-5xl text-3xl font-extrabold text-blue-900 uppercase space-y-4 leading-10 md:leading-16">
              Giải pháp in ấn & gia công thành phẩm trọn gói - Nâng tầm thương
              hiệu của bạn
            </p>
          </div>
          <div className="space-y-8 my-10">
            <div className="flex flex-col md:flex-row justify-center gap-8 lg:justify-between lg:gap-10">
              <div className="space-y-4 text-left p-6 rounded-lg bg-white shadow-lg">
                <img
                  src={DesignLogo}
                  alt=""
                  className="mx-auto bg-amber-500 p-4 rounded-3xl w-20 h-20"
                />
                <h3 className="text-center text-2xl font-semibold text-blue-900">
                  Thiết kế
                </h3>
                <p className="text-gray-800">
                  Chúng tôi mang đến những ý tưởng sáng tạo, phù hợp với từng
                  thương hiệu – từ logo, bao bì đến các ấn phẩm quảng cáo, giúp
                  bạn nổi bật ngay từ cái nhìn đầu tiên.
                </p>
              </div>
              <div className="space-y-4 text-left p-6 rounded-lg bg-white shadow-lg">
                <img
                  src={PrintLogo}
                  alt=""
                  className="mx-auto bg-blue-500 p-4 rounded-3xl w-20 h-20"
                />
                <h3 className="text-center text-2xl font-semibold text-blue-900">
                  In ấn
                </h3>
                <p className="text-gray-800">
                  Sở hữu hệ thống máy in hiện đại, chúng tôi cam kết chất lượng
                  in sắc nét, màu sắc trung thực trên đa dạng chất liệu – từ
                  giấy, nhựa, đến vải và mica.
                </p>
              </div>
              <div className="space-y-4 text-left p-6 rounded-lg bg-white shadow-lg">
                <img
                  src={ProductLogo}
                  alt=""
                  className="mx-auto bg-green-500 p-4 rounded-3xl w-20 h-20"
                />
                <h3 className="text-center text-2xl font-semibold text-blue-900">
                  Thành phẩm
                </h3>
                <p className="text-gray-800">
                  Sở hữu hệ thống máy in hiện đại, chúng tôi cam kết chất lượng
                  in sắc nét, màu sắc trung thực trên đa dạng chất liệu – từ
                  giấy, nhựa, đến vải và mica.
                </p>
              </div>
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
      </div>
    </section>
  );
};
//
