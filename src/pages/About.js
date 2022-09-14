import React from "react";
import AboutBody from "../components/AboutBody";
import FAQ from "../components/dashcomponents/FAQ";
import Testimonials from "../components/dashcomponents/Testimonials";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const About = () => {
  return (
    <div>
      <Navbar />
      <AboutBody />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default About;
