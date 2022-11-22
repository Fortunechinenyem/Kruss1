import React from "react";
import AutoServiceFeat1 from "../components/AutoServiceFeat1";
import AutoServiceFeat2 from "../components/AutoServiceFeat2";
import AutoServiceFeat3 from "../components/AutoServiceFeat3";
import AutoServiceFeat4 from "../components/AutoServiceFeat4";
import AutoServiceFeat5 from "../components/AutoServiceFeat5";
import AutoServiceHero from "../components/AutoServiceHero";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <div>
      <AutoServiceHero />
      <AutoServiceFeat1 />
      <AutoServiceFeat2 />
      <AutoServiceFeat3 />
      <AutoServiceFeat4 />
      <AutoServiceFeat5 />
      <Footer />
    </div>
  );
};

export default Services;
