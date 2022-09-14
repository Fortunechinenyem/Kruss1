import React from "react";
import ContactBody from "../components/ContactBody";
import ContactHero from "../components/ContactHero";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const Contact = () => {
  return (
    <div>
      <Navbar />
      <ContactHero />
      <ContactBody />
      <Footer />
    </div>
  );
};

export default Contact;
