import React from "react";

export const Products = ({ refProducts }) => {
  return (
    <section ref={refProducts} className="bg-blue-100">
      <div className="max-w-7xl px-4 md:px-6 lg:px-16 py-8 ">
        Sản phẩm
      </div>
    </section>
  );
};
