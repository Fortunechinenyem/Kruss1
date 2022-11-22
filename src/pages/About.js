import React from "react";
import AboutFeat1 from "../components/AboutFeat1";
import AboutFeat2 from "../components/AboutFeat2";
import AboutFeat3 from "../components/AboutFeat3";
import AboutFeat4 from "../components/AboutFeat4";

import AboutHero from "../components/AboutHero";

import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <AboutHero />
      <AboutFeat1 />
      <AboutFeat2 />
      <AboutFeat3 />
      <AboutFeat4 />

      <Footer />
    </div>
  );
};

export default About;
