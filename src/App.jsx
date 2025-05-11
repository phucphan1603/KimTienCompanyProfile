import { useRef } from "react";
import { Contact } from "./components/Contact";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Products } from "./sections/Products";
import { Partner } from "./sections/Partner";

function App() {
  const refFooter = useRef(null);
  const refAbout = useRef(null);
  const refServices = useRef(null);
  const refProducts = useRef(null);
  const scrollToFooter = () => {
    refFooter.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    refAbout.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const scrollToServices = () => {
    refServices.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProducts = () => {
    refProducts.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollToAbout={scrollToAbout}
        scrollToServices={scrollToServices}
        scrollToTop={scrollToTop}
        scrollToProducts={scrollToProducts}
      />
      <main>
        <Hero scrollToFooter={scrollToFooter} />
        <Services refServices={refServices} scrollToFooter={scrollToFooter} />
        <About refAbout={refAbout} />
        <Products refProducts={refProducts} />
        <Partner />
      </main>
      <Footer refFooter={refFooter} />
    </>
  );
}

export default App;
