import React from "react";

export const About = ({ refAbout }) => {
  return (
    <section
      ref={refAbout}
      className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-8 "
    >
      <div className="flex flex-col gap-4 lg:gap-20 lg:flex-row justify-between items-center">
        <div className="relative mb-20">
          <div className="absolute w-36 h-36 rounded-4xl overflow-hidden rotate-45 bg-blue-300/25 -top-12 -left-6 z-50" />
          <div className="bg-blue-100 w-[400px] h-[400px] relative rounded-4xl rotate-45 overflow-hidden">
            <div className="absolute w-80 h-44 rounded-4xl overflow-hidden bg-amber-300 top-2 right-2">
              <img
                src="/images/phan-xuong-1.png"
                alt="About Us"
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="absolute w-24 h-24 rounded-2xl overflow-hidden bg-amber-300 right-2 bottom-2">
              <img
                src="/images/phan-xuong-2.png"
                alt="About Us"
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="absolute w-24 h-24 rounded-2xl overflow-hidden bg-amber-300 right-2 bottom-28">
              <img
                src="/images/phan-xuong-3.png"
                alt="About Us"
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
            <div className="absolute w-60 h-50 rounded-2xl overflow-hidden bg-amber-300 right-28 bottom-2">
              <img
                src="/images/phan-xuong-4.png"
                alt="About Us"
                className="w-full h-full object-cover -rotate-45 scale-150"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 space-y-4">
          <h2 className="text-2xl font-medium">Giới thiệu</h2>
          <p className="text-4xl font-semibold">Tại sao lại chọn chúng tôi?</p>
          <p className="text-lg  space-y-4">
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
        </div>
      </div>
    </section>
  );
};
