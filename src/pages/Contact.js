import React from "react";

import ContactFeat1 from "../components/ContactFeat1";
import ContactFeat2 from "../components/ContactFeat2";
import ContactFeat3 from "../components/ContactFeat3";
import ContactFeat4 from "../components/ContactFeat4";
import ContactHero from "../components/ContactHero";

import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <ContactHero />
      <ContactFeat1 />
      <ContactFeat2 />
      <ContactFeat3 />
      <ContactFeat4 />
      <Footer />
    </div>
  );
};

export default Contact;
