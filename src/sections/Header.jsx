import React, { useState } from "react";
import { motion } from "motion/react";
import Close from "../assets/images/close.svg";
import { menus } from "../constants/menus";
import { Logo } from "../components/Logo";
import HamburgerIcon from "../assets/images/hamburger-menu.svg";
import clsx from "clsx";

export const Header = ({
  scrollToAbout,
  scrollToTop,
  scrollToServices,
  scrollToProducts,
  scrollToFooter,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header className="fixed shadow-2xl h-16 w-full top-0 left-0 px-4 md:px-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto flex h-full w-full items-center justify-between md:px-8 lg:px-16 text-gray-800">
        <Logo handleClick={scrollToTop} />
        <div
          className={clsx(
            "md:flex transition-opacity duration-300 opacity-0 md:opacity-100 md:flex-row flex-col justify-start gap-4 md:gap-1 z-50 md:h-full items-center bg-white",
            isOpen
              ? "md:relative fixed top-0 bottom-0 left-0 right-0 mt-14 pt-16 flex opacity-100 bg-linear-to-b from-white to-amber-400"
              : "hidden"
          )}
        >
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="md:h-full cursor-pointer font-semibold md:font-medium text-blue-900 hover:bg-gray-200 hover:text-red-500 px-2 py-2 flex items-center text-2xl md:text-base"
              onClick={() => {
                if (menu.scrollTo === "scrollToTop") {
                  scrollToTop();
                } else if (menu.scrollTo === "scrollToAbout") {
                  scrollToAbout();
                } else if (menu.scrollTo === "scrollToServices") {
                  scrollToServices();
                } else if (menu.scrollTo === "scrollToProducts") {
                  scrollToProducts();
                } else if (menu.scrollTo === "scrollToFooter") {
                  scrollToFooter();
                }
                setIsOpen(false);
              }}
            >
              {menu.name}
            </div>
          ))}
        </div>
        <button
          className="md:hidden z-2 size-10 border-2 border-amber-400 cursor-pointer rounded-lg flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <motion.img
            src={`${isOpen ? Close : HamburgerIcon}`}
            initial={{ rotate: 0 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            alt="magic"
            className="size-1/2 object-contain"
          />
        </button>
      </nav>
    </motion.header>
  );
};
