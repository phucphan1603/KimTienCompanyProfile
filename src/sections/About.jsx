import React from "react";
import PhanXuong1 from "../assets/images/phan-xuong-1.png";
import PhanXuong3 from "../assets/images/phan-xuong-3.png";
import BorderShape2 from "../assets/images/border-shape-2.png";
import AboutShape1 from "../assets/images/about-shape-1.png";
import triangle from "../assets/images/triangle.svg";
import MagicIcon from "../assets/images/magic.svg";

export const About = ({ refAbout }) => {
  return (
    <section
      ref={refAbout}
      className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-8 overflow-hidden"
    >
      <div className="flex flex-col gap-4 lg:gap-20 lg:flex-row justify-between items-center">
        <div className="relative w-96 h-96 pt-10 lg:mb-2 mb-24 px-6">
          <img
            src={BorderShape2}
            alt="icon-bg"
            className="absolute -left-12 -z-10 top-20 h-1/2"
          />
          <img
            src={AboutShape1}
            alt="icon-bg"
            className="absolute -right-10 -z-10 -bottom-10"
          />
          <img
            src={PhanXuong1}
            alt="Phan xuong 1"
            className="object-cover w-52 h-32 absolute -top-10 -right-10"
          />
          <img
            src={PhanXuong1}
            alt="Phan xuong 1"
            className="object-cover w-44 h-44 absolute -bottom-20 -left-16"
          />
          <img
            src={PhanXuong3}
            alt="Phan xuong 3"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="space-y-4 lg:w-1/2 w-full">
          <h2 className="text-xl font-medium text-red-500 uppercase flex justify-start items-center gap-4">
            <span>Giới thiệu</span>
            <img src={triangle} alt="triangle" className="rotate-90" />
          </h2>
          <p className="md:text-5xl text-3xl font-extrabold text-blue-900 uppercase space-y-4 leading-10 md:leading-16">
            In chuẩn – Gia công đẹp – Thể hiện đẳng cấp
          </p>
          <p className="text-lg space-y-2 md:space-y-4 text-gray-800">
            <span className="font-bold">
              Công ty TNHH MTV In Ấn Quảng Cáo Kim Tiền
            </span>{" "}
            là đơn vị chuyên nghiệp trong lĩnh vực thiết kế, in ấn và sản xuất
            vật phẩm quảng cáo. Chúng tôi hiểu rằng, trong thời đại cạnh tranh
            thương hiệu khốc liệt hiện nay, hình ảnh doanh nghiệp chính là yếu
            tố then chốt giúp định vị vị thế trên thị trường.
            <br />
            <br /> Với đội ngũ nhân sự trẻ trung, sáng tạo, giàu kinh nghiệm,
            Kim Tiền mang đến cho khách hàng những giải pháp toàn diện về in ấn,
            bao bì và POSM, đảm bảo chất lượng cao, ý tưởng độc đáo và dịch vụ
            tận tâm.
            <br />
            <br /> Chúng tôi tự hào sở hữu quy trình sản xuất khép kín, kết hợp
            hệ thống máy móc hiện đại, giúp rút ngắn thời gian, kiểm soát chất
            lượng và tối ưu chi phí cho khách hàng.
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
                <span className="font-medium">&nbsp; Bao bì – Hộp cứng: </span>{" "}
                Hộp mỹ phẩm, hộp quà, túi giấy, màng metalize, tem nhãn...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
