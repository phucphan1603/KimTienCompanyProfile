import { GalleryImages } from "../components/GalleryImages";
import { SectionDesc } from "../components/SectionDesc";
import { SectionTitle } from "../components/SectionTitle";

export const Products = ({ refProducts }) => {
  return (
    <section ref={refProducts} className="">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-8 relative">
        <div className="text-center mx-auto">
          <div className="space-y-4 w-full lg:w-2/3 mx-auto">
            <SectionTitle title="Sản phẩm" center />
            <SectionDesc desc="Tự hào từng sản phẩm – Khẳng định uy tín" />
          </div>
          <div className="space-y-8">
            <GalleryImages />
          </div>
        </div>
      </div>
    </section>
  );
};
