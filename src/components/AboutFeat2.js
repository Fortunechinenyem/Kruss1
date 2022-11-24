import React from "react";
import { BsHddNetwork } from "react-icons/bs";
import { FaNetworkWired, FaPeopleCarry } from "react-icons/fa";
import logo from "../image/img (13).jpg";

const AboutFeat2 = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>​Our Values</h2>
          <div>
            <FaPeopleCarry />
            <BsHddNetwork />
          </div>
        </div>
        <img
          src={logo}
          alt={AboutFeat2.jpg}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default AboutFeat2;
