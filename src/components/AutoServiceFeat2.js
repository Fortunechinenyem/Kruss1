import React from "react";
import logo from "../image/img (17).jpg";

const AutoServiceFeat2 = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>​Buy Or Sell A Car</h2>
          <button className="btn btn-info">Learn More</button>
        </div>
        <img
          src={logo}
          alt={AutoServiceFeat2.jpg}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default AutoServiceFeat2;
