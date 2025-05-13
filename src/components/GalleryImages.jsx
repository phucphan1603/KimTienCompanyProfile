import React, { useMemo, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import clsx from "clsx";

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

const imageProducts = [
  {
    src: Hanger1,
  },
  {
    src: Hanger2,
  },
  {
    src: Hanger3,
  },
  {
    src: Hanger4,
  },
  {
    src: Hanger5,
  },
  {
    src: Packaging1,
  },
  {
    src: Packaging2,
  },
  {
    src: Packaging3,
  },
  {
    src: Packaging4,
  },
  {
    src: Packaging5,
  },
  {
    src: Packaging6,
  },
];

export const GalleryImages = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-250px 0px" });

  return (
    <div className="mt-4">
      <LightGallery
        elementClassNames="grid grid-cols-2 md:grid-cols-4 gap-3 p-4 "
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        thumbnail={false}
        download
      >
        {imageProducts.map((image, index) => (
          <motion.a
            key={index}
            ref={ref}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.3 } }}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            href={image.src}
            className="overflow-hidden rounded-xs shadow-xl cursor-pointer"
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
