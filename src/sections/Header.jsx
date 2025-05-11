import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export const Header = ({
  scrollToAbout,
  scrollToTop,
  scrollToServices,
  scrollToProducts,
}) => {
  const [prevScroll, setPrevScroll] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const { scrollY } = useScroll();

  const height = useTransform(scrollY, [0, 100], [80, 60]);
  const background = useTransform(
    scrollY,
    [0, 100],
    ["transparent", "rgba(0,0,0,0.8)"]
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 100],
    ["", "0px 4px 12px rgba(0,0,0,0.5)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > prevScroll && currentScroll > 100) {
        setVisible(false); // Cuộn xuống
      } else {
        setVisible(true); // Cuộn lên
      }
      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <motion.header
      animate={{ y: visible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      style={{
        height,
        background,
        boxShadow,
      }}
      className="fixed top-0 left-0 z-50 w-full px-4 md:px-0"
    >
      <nav className="max-w-7xl mx-auto flex h-full w-full items-center justify-between md:px-8 lg:px-16 text-white">
        <div>Logo</div>
        <div className="hidden md:flex space-x-8">
          <div className="sub-menu" onClick={scrollToTop}>
            Trang chủ
          </div>
          <div className="sub-menu" onClick={scrollToAbout}>
            Giới thiệu
          </div>
          <div className="sub-menu" onClick={scrollToServices}>
            Dịch vụ
          </div>
          <div className="sub-menu" onClick={scrollToProducts}>
            Sản phẩm
          </div>
        </div>
        <button
          className="md:hidden z-2 size-10 border-2 border-blue-300 cursor-pointer rounded-full flex justify-center items-center"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          <motion.img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
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
