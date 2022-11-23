import React from "react";
import { BsChatLeftDotsFill } from "react-icons/bs";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const ContactFeat1 = () => {
  return (
    <section>
      <div className="d-flex container row contactfeat1 mx-auto ">
        <div className="col-md">
          <FaEnvelope />
          <p>Email Us </p>
          info@krussauto
        </div>

        <div className="col-md">
          <FaPhone />
          <p>Call Us </p>
          07030984805
        </div>
        <div className="col-md">
          <BsChatLeftDotsFill />
          <p>Chat with Us </p>
          09025301696
        </div>
      </div>
    </section>
  );
};

export default ContactFeat1;
