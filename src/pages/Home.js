import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Homebody from "../components/Homebody";
import Navbar from "../components/Navbar";

import Services from "../components/Services";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Homebody />
      <Footer />
    </div>
  );
};

export default Home;
