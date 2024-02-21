import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import AllRoutes from "./router/AllRoutes";
import ScrollToTop from "./components/ScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import "photoswipe/dist/photoswipe.css";
import "bootstrap/dist/js/bootstrap";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  window.addEventListener("load", AOS.refresh);

  return (
    <>
      <Helmet>
        <title>Clique Decision - App</title>
        <meta property="og:site_name" content="deski" />
        <meta
          property="og:url"
          content="https://cliquedecision.com/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Deski: Creative Saas & Software React Template"
        />
        <meta
          name="keywords"
          content="decision, maker, business"
        />
        <meta
          name="description"
          content="Deski is a decision making app."
        />
        <meta name="description" content="Decision making App" />
      </Helmet>
      {/* End Seo Helmt */}

      <ScrollToTop />
      {/* End Scroll top */}

      <AllRoutes />
    </>
  );
};

export default App;