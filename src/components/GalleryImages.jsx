import LightGallery from "lightgallery/react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

// import styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lightgallery.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import Hanger1 from "../assets/images-gallery/hanger-1.png";
import Hanger2 from "../assets/images-gallery/hanger-2.png";
import Hanger3 from "../assets/images-gallery/hanger-3.png";
import Hanger4 from "../assets/images-gallery/hanger-4.png";
import Hanger5 from "../assets/images-gallery/hanger-5.png";
import Packaging1 from "../assets/images-gallery/packaging-1.png";
import Packaging2 from "../assets/images-gallery/packaging-2.png";
import Packaging3 from "../assets/images-gallery/packaging-3.png";
import Packaging4 from "../assets/images-gallery/packaging-4.png";
import Packaging5 from "../assets/images-gallery/packaging-5.png";
import Packaging6 from "../assets/images-gallery/packaging-6.png";
import clsx from "clsx";

const imageProducts = [
  {
    src: Hanger1,
    type: "hanger",
  },
  {
    src: Hanger2,
    type: "hanger",
  },
  {
    src: Hanger3,
    type: "hanger",
  },
  {
    src: Hanger4,
    type: "hanger",
  },
  {
    src: Hanger5,
    type: "hanger",
  },
  {
    src: Packaging1,
    type: "packaging",
  },
  {
    src: Packaging2,
    type: "packaging",
  },
  {
    src: Packaging3,
    type: "packaging",
  },
  {
    src: Packaging4,
    type: "packaging",
  },
  {
    src: Packaging5,
    type: "packaging",
  },
  {
    src: Packaging6,
    type: "packaging",
  },
];

export const GalleryImages = () => {
  const ref = useRef(null);
  const [activeType, setActiveType] = useState("hanger");

  const imageProductsFiltered = imageProducts.filter(
    (image) => image.type === activeType
  );

  return (
    <div className="mt-4" ref={ref}>
      <div className="flex flex-wrap justify-center gap-2">
        {[
          { name: "hanger", type: "hanger" },
          { name: "bao bì", type: "packaging" },
        ].map((item) => {
          return (
            <div
              key={item.type}
              className={clsx(
                "border-2 py-1 px-2 text-blue-900 rounded-lg border-blue-900 hover:bg-blue-900 hover:text-white cursor-pointer font-semibold",
                {
                  "bg-blue-900 text-white": activeType === item.type,
                }
              )}
              onClick={() => {
                setActiveType(item.type);
              }}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <LightGallery
        elementClassNames="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 "
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        thumbnail={false}
        download
      >
        {imageProductsFiltered.map((image, index) => (
          <motion.a
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            href={image.src}
            className="overflow-hidden rounded-xs shadow-xl cursor-pointer"
            viewport={{ once: true }}
          >
            <img
              src={image.src}
              alt={image.subHtml}
              className="w-full h-auto object-cover"
            />
          </motion.a>
        ))}
      </LightGallery>
    </div>
  );
};
