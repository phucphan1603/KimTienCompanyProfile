import AboutShape1 from "../assets/images/about-shape-1.png";
import BorderShape2 from "../assets/images/border-shape-2.png";
import MagicIcon from "../assets/images/magic.svg";
import PhanXuong1 from "../assets/images/phan-xuong-1.png";
import PhanXuong3 from "../assets/images/phan-xuong-3.png";
import { SectionDesc } from "../components/SectionDesc";
import { SectionTitle } from "../components/SectionTitle";
import { motion } from "motion/react";

export const About = ({ refAbout }) => {
  return (
    <section ref={refAbout} className="section-about relative overflow-hidden">
      <div className="flex flex-col gap-4 lg:gap-20 lg:flex-row justify-between items-center max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-12 lg:pt-8 pb-8">
        <div className="relative w-96 h-96 pt-10 lg:mb-2 mb-24 px-6">
          <img
            src={BorderShape2}
            alt="icon-bg"
            className="absolute -left-12 z-0 top-20 h-1/2"
          />
          <img
            src={AboutShape1}
            alt="icon-bg"
            className="absolute -right-10 z-0 -bottom-10"
          />
          <img
            src={PhanXuong1}
            alt="Phan xuong 1"
            className="object-cover w-52 h-32 z-10 absolute -top-10 -right-10"
          />
          <img
            src={PhanXuong1}
            alt="Phan xuong 1"
            className="object-cover w-44 h-44 z-10 absolute -bottom-20 -left-16"
          />
          <img
            src={PhanXuong3}
            alt="Phan xuong 3"
            className="object-cover w-full h-full absolute"
          />
        </div>
        <div className="space-y-4 lg:w-1/2 w-full">
          <SectionTitle title="Giới thiệu" />
          <SectionDesc desc="In chuẩn – Gia công đẹp – Thể hiện đẳng cấp" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="space-y-2 md:space-y-4 text-gray-800">
              <span className="font-bold">
                Công ty TNHH MTV In Ấn Quảng Cáo Kim Tiền
              </span>{" "}
              là đơn vị chuyên nghiệp trong lĩnh vực thiết kế, in ấn và sản xuất
              vật phẩm quảng cáo. Chúng tôi hiểu rằng, trong thời đại cạnh tranh
              thương hiệu khốc liệt hiện nay, hình ảnh doanh nghiệp chính là yếu
              tố then chốt giúp định vị vị thế trên thị trường.
              <br />
              <br /> Với đội ngũ nhân sự trẻ trung, sáng tạo, giàu kinh nghiệm,
              Kim Tiền mang đến cho khách hàng những giải pháp toàn diện về in
              ấn, bao bì và POSM, đảm bảo chất lượng cao, ý tưởng độc đáo và
              dịch vụ tận tâm.
              <br />
              <br /> Chúng tôi tự hào sở hữu quy trình sản xuất khép kín, kết
              hợp hệ thống máy móc hiện đại, giúp rút ngắn thời gian, kiểm soát
              chất lượng và tối ưu chi phí cho khách hàng.
            </p>
            <div className="space-y-4">
              <div className="flex justify-start items-start">
                <img src={MagicIcon} alt="" />
                <p>
                  <span className="font-medium">&nbsp; POSM quảng cáo: </span>{" "}
                  Poster, hanger, kệ trưng bày, bảng hiệu, banner...
                </p>
              </div>
              <div className="flex justify-start items-start">
                <img src={MagicIcon} alt="" />
                <p>
                  <span className="font-medium">
                    &nbsp; Bao bì – Hộp cứng:{" "}
                  </span>{" "}
                  Hộp mỹ phẩm, hộp quà, túi giấy, màng metalize, tem nhãn...
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
