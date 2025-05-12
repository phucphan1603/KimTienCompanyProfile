import React from "react";
import PhoneSVG from "../assets/images/phone.svg";
import ZaloSVG from "../assets/images/zalo.svg";
import MessengerSVG from "../assets/images/messenger.svg";
import { menus } from "./../constants/menus";

export const Footer = ({ refFooter }) => {
  return (
    <footer ref={refFooter} className="mx-auto bg-gray-800 text-white">
      <div className="max-w-7xl px-4 md:px-6 lg:px-16 py-8 ">
        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div>
            <div>logo</div>
            <div>Địa chỉ</div>
            <div>Giờ làm việc</div>
            <div>Điện thoại</div>
            <div>Email</div>
          </div>
          <div>
            {menus.map((menu) => {
              return (
                <div key={menu.id} className="flex flex-col gap-2">
                  <a
                    href={`#${menu.id}`}
                    className="text-white hover:text-amber-400"
                  >
                    {menu.name}
                  </a>
                </div>
              );
            })}
          </div>
          {/* <div className="flex justify-center text-center">
            <a href="tel:0901234567" title="phone">
              <img src={PhoneSVG} alt="phone" className="w-12 h-12" />
            </a>
            <a href="tel:0901234567" title="zalo">
              <img src={ZaloSVG} alt="phone" className="w-12 h-12" />
            </a>
            <a href="tel:0901234567" title="messenger">
              <img src={MessengerSVG} alt="phone" className="w-12 h-12" />
            </a>
          </div> */}
        </div>
        <div className="border-t mt-2 pt-2">©2025. All rights reserved</div>
      </div>
    </footer>
  );
};
