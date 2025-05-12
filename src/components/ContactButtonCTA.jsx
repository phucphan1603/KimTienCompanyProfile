import React from "react";

export const ContactButtonCTA = ({ scrollToFooter }) => {
  return (
    <button
      onClick={scrollToFooter}
      className="p-3 bg-orange-400 rounded-full cursor-pointer font-medium lg:text-lg hover:bg-orange-500 transition duration-300 ease-in-out text-white"
    >
      Liên hệ ngay
    </button>
  );
};
