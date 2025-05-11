import React from "react";

export const ContactButtonCTA = ({ scrollToFooter }) => {
  return (
    <button
      onClick={scrollToFooter}
      className="px-12 py-4 mt-8 bg-blue-400 rounded-lg cursor-pointer font-semibold text-lg hover:bg-blue-500 transition duration-300 ease-in-out text-white"
    >
      Liên hệ ngay
    </button>
  );
};
