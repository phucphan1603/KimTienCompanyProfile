import { delay } from "motion";
import acecookLogo from "../assets/images/acecook-logo.png";
import kunLogo from "../assets/images/kun-logo.png";
import masanLogo from "../assets/images/masan-group-logo.png";
import nabatiLogo from "../assets/images/nabati-logo.png";
import nutifoodLogo from "../assets/images/nutifood-logo.svg";
import unibeenLogo from "../assets/images/unibeen-logo.png";
import { SectionDesc } from "../components/SectionDesc";
import { SectionTitle } from "../components/SectionTitle";
import { motion } from "motion/react";

const dataPartner = [
  {
    id: 1,
    logo: acecookLogo,
    alt: "acecook-vn",
  },
  {
    id: 2,
    logo: masanLogo,
    alt: "masan-group",
  },
  {
    id: 3,
    logo: unibeenLogo,
    alt: "unibeen",
  },
  {
    id: 4,
    logo: kunLogo,
    alt: "kun",
  },
  {
    id: 5,
    logo: nutifoodLogo,
    alt: "nutifood",
  },
  {
    id: 6,
    logo: nabatiLogo,
    alt: "nabati",
  },
];

export const Partner = () => {
  return (
    <section className="">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 relative">
        <div className="text-center mx-auto">
          <div className="space-y-4 w-full lg:w-2/3 mx-auto">
            <SectionTitle title="Đối tác" center />
            <SectionDesc desc="Hợp tác vững bền – Thành công dài lâu" />
          </div>
          <div className="flex justify-center items-center gap-4 lg:gap-8 flex-wrap mt-8">
            {dataPartner.map((partner, index) => (
              <motion.div
                key={partner.id}
                className="w-32 h-20 md:w-40 md:h-32 object-contain"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.2 },
                }}
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
