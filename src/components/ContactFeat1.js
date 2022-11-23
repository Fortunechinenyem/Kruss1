import React from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactFeat1 = () => {
  return (
    <section>
      <div className="d-flex container contactfeat1 ">
        <div>
          <FaEnvelope />
          <p>Email Us </p>
          info@krussauto
        </div>

        <div>
          <FaPhone />
          <p>Call Us </p>
          07030984805
        </div>
        <div>
          <BsChatLeftDotsFill />
          <p>Chat with Us </p>
          09025301696
        </div>
      </div>
    </section>
  );
};

export default ContactFeat1;
