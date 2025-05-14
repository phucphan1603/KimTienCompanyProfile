import React from "react";

export const Logo = ({ handleClick = () => {} }) => {
  return (
    <div
      onClick={handleClick}
      className="font-semibold text-2xl lg:text-4xl tracking-wide text-red-500 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]"
    >
      Kim
      <span className="text-blue-900 drop-shadow-[2px_2px_2px_rgba(0,0,0,0.3)]">
        Tien
      </span>
    </div>
  );
};
