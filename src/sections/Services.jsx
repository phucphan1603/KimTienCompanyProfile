import { motion } from "motion/react";
import DesignLogo from "../assets/images/design-logo.png";
import PrintLogo from "../assets/images/print-logo.png";
import ProductLogo from "../assets/images/product-logo.png";
import { SectionDesc } from "../components/SectionDesc";
import { SectionTitle } from "../components/SectionTitle";
export const Services = ({ refServices }) => {
  return (
    <section ref={refServices} className="relative bg-gray-200/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 relative">
        <div className="text-center mx-auto">
          <div className="space-y-4 w-full lg:w-2/3 mx-auto">
            <SectionTitle title="Dịch vụ" center />
            <SectionDesc
              desc=" Giải pháp in ấn & gia công thành phẩm trọn gói - Nâng tầm thương
              hiệu của bạn"
            />
          </div>
          <div className="space-y-8 my-10">
            <div className="flex flex-col md:flex-row justify-center gap-8 lg:justify-between lg:gap-10">
              <motion.div
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 text-left p-6 rounded-lg bg-white shadow-lg"
                viewport={{ once: true }}
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="space-y-4 text-left p-6 rounded-lg bg-white shadow-lg"
                viewport={{ once: true }}
              >
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
              </motion.div>
              <motion.div
                initial={{ opacity: 1, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-4 text-left p-6 rounded-lg bg-white shadow-lg"
                viewport={{ once: true }}
              >
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
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
//
