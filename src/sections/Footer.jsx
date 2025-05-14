import ZaloSVG from "../assets/images/zalo.svg";
import { Logo } from "../components/Logo";
import { menus } from "./../constants/menus";

export const Footer = ({
  refFooter,
  scrollToAbout,
  scrollToTop,
  scrollToServices,
  scrollToProducts,
  scrollToFooter,
}) => {
  return (
    <footer ref={refFooter} className="mx-auto bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-16 py-8 ">
        <Logo />
        <div className="mt-8 flex flex-wrap flex-col gap-20 md:flex-row justify-start text-gray-300 font-medium">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <b>Xưởng In:</b>{" "}
              <span className="text-gray-400">
                21 thạnh Lộc 18, phường Thạnh Lộc, quận 12, Tp. Hồ Chí Minh
              </span>
            </div>
            <div>
              <b>Xưởng Thành Phẩm:</b>{" "}
              <span className="text-gray-400">
                100/1/3 đường an Phú đông 25, Phương an Phú đông, Quận 12, Tp.Hồ
                Chí Minh
              </span>
            </div>
            <div>
              <b>Phân Xưởng Sắt:</b>{" "}
              <span className="text-gray-400">
                E15/19B Âp 5, Kênh Trung Ương, Vĩnh Lộc B, Bình Chánh, Tp.Hồ Chí
                Minh
              </span>
            </div>
            <div>
              <b>Giờ làm việc:</b>{" "}
              <span className="text-gray-400">8h - 17h (Thứ 2 - Thứ 7)</span>
            </div>
            <div>
              <b>Điện thoại:</b>{" "}
              <span className="text-gray-400">+84919.535.525</span>
            </div>
            <div>
              <b>Email:</b> <span className="text-gray-400">abc@gmail.com</span>
            </div>
          </div>
          <div className="space-y-6">
            {menus.map((menu) => {
              return (
                <div
                  key={menu.id}
                  className="flex flex-col gap-2 hover:text-red-500 cursor-pointer"
                  onClick={() => {
                    if (menu.scrollTo === "scrollToTop") {
                      scrollToTop();
                    } else if (menu.scrollTo === "scrollToAbout") {
                      scrollToAbout();
                    } else if (menu.scrollTo === "scrollToServices") {
                      scrollToServices();
                    } else if (menu.scrollTo === "scrollToProducts") {
                      scrollToProducts();
                    } else if (menu.scrollTo === "scrollToContact") {
                      scrollToFooter();
                    }
                  }}
                >
                  {menu.name}
                </div>
              );
            })}
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="font-medium text-gray-300">
                Liên hệ với chúng tôi
              </div>
              <div className="flex gap-2">
                {/* <img
                  src={PhoneSVG}
                  alt="phone"
                  className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform duration-300"
                />
                <img
                  src={MessengerSVG}
                  alt="messenger"
                  className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform duration-300"
                /> */}
                <div onClick={() => window.open("https://zalo.me/0919535525", "_blank")}>
                  <img
                    src={ZaloSVG}
                    alt="zalo"
                    className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t mt-4 pt-4 text-gray-400 font-medium">
          Copyright ©2025 Kim Tien. All rights reserved
        </div>
      </div>
    </footer>
  );
};
