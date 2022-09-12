import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Homebody from "../components/Homebody";

import NavHome from "../components/NavHome";
import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <NavHome />
      <Hero />
      <Services />
      <Homebody />
      <Footer />
    </div>
  );
};

export default Home;
