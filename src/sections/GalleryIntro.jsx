import React from "react";
import MayIn1 from "../assets/images/mayin1.jpg";
import MayIn2 from "../assets/images/may-in-1.png";

export const GalleryIntro = () => {
  return (
    <div className="w-screen h-96 bg-red-300 overflow-hidden">
      <img
        src={MayIn2}
        alt="img-gallery"
        className="w-full h-full object-cover object-center filter grayscale-50"
      />
    </div>
  );
};
