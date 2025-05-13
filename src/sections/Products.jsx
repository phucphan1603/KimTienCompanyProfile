import React from "react";
import triangle from "../assets/images/triangle.svg";
import { GalleryImages } from "../components/GalleryImages";

export const Products = ({ refProducts }) => {
  
  return (
    <section ref={refProducts} className="">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 relative">
        <div className="text-center mx-auto">
          <div className="space-y-4 w-full lg:w-2/3 mx-auto">
            <h2 className="text-xl font-medium text-red-500 uppercase flex justify-center items-center gap-4">
              <img src={triangle} alt="triangle" className="-rotate-90" />
              <span>Sản phẩm</span>
              <img src={triangle} alt="triangle" className="rotate-90" />
            </h2>
            <p className="md:text-5xl text-3xl font-extrabold text-blue-900 uppercase space-y-4 leading-10 md:leading-16">
              Tự hào từng sản phẩm – Khẳng định uy tín
            </p>
          </div>
          <div className="space-y-8">
            <GalleryImages/>
          </div>
        </div>
      </div>
    </section>
  );
};
