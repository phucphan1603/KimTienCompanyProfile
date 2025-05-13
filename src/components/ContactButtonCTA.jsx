import React from "react";

export const ContactButtonCTA = ({ scrollToFooter }) => {
  return (
    <button
      onClick={scrollToFooter}
      className="p-3 bg-red-500 rounded-full cursor-pointer font-medium lg:text-lg hover:bg-red-600 transition duration-300 ease-in-out text-white"
    >
      Liên hệ ngay
    </button>
  );
};
