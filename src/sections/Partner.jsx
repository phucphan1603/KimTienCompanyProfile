import React from "react";
import triangle from "../assets/images/triangle.svg";
import acecookLogo from "../assets/images/acecook-logo.png";
import masanLogo from "../assets/images/masan-group-logo.png";
import unibeenLogo from "../assets/images/unibeen-logo.png";
import kunLogo from "../assets/images/kun-logo.png";
import nutifoodLogo from "../assets/images/nutifood-logo.svg";
import nabatiLogo from "../assets/images/nabati-logo.png";

export const Partner = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 relative">
        <div className="text-center mx-auto">
          <div className="space-y-4 w-full lg:w-2/3 mx-auto">
            <h2 className="text-xl font-medium text-red-500 uppercase flex justify-center items-center gap-4">
              <img src={triangle} alt="triangle" className="-rotate-90" />
              <span>Đối tác</span>
              <img src={triangle} alt="triangle" className="rotate-90" />
            </h2>
            <p className="md:text-5xl text-3xl font-extrabold text-blue-900 uppercase space-y-4 leading-10 md:leading-16">
              Hợp tác vững bền – Thành công dài lâu
            </p>
          </div>
          <div className="flex justify-center items-center gap-4 lg:gap-8 flex-wrap mt-8">
            <img
              src={acecookLogo}
              alt="acecook-vn"
              className="w-32 h-20 md:w-40 md:h-32 object-contain"
            />
            <img
              src={masanLogo}
              alt="masan-group"
              className="w-32 h-20 md:w-40 md:h-32 object-contain"
            />
            <img
              src={unibeenLogo}
              alt="unibeen"
              className="w-32 h-20 md:w-40 md:h-32 object-contain"
            />
            <img
              src={kunLogo}
              alt="kun"
              className="w-32 h-20 md:w-40 md:h-32 object-contain"
            />
            <img
              src={nutifoodLogo}
              alt="nutifood"
              className="w-32 h-20 md:w-40 md:h-32 object-contain"
            />
            <img
              src={nabatiLogo}
              alt="nabati"
              className="w-32 h-20 md:w-40 md:h-32 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
