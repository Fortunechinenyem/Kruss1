import React from "react";
import logo from "../image/img (24).jpg";

const AboutFeat3 = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>​Our Journey</h2>
        </div>
        <img
          src={logo}
          alt={AboutFeat3.jpg}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="col-md text-center">
        <h2>​So Far, So Good</h2>
      </div>
    </section>
  );
};

export default AboutFeat3;
