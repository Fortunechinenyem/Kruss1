import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Homebody from "../components/Homebody";
import HomeFeat1 from "../components/HomeFeat1";
import HomeFeat2 from "../components/HomeFeat2";
import HomeFeat3 from "../components/HomeFeat3";
import HomeFeat4 from "../components/HomeFeat4";
import HomeFeat5 from "../components/HomeFeat5";

const Home = () => {
  return (
    <div>
      <Hero />
      <HomeFeat1 />
      <HomeFeat2 />
      <HomeFeat3 />
      <HomeFeat4 />
      <HomeFeat5 />
      <Homebody />
      <Footer />
    </div>
  );
};

export default Home;
