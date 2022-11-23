import React from "react";
import logo from "../image/pic (7).jpg";

const AutoServiceFeat5 = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>​Pre-Purchase Inspection</h2>
          <button className="btn btn-dark">Learn More</button>
        </div>
        <img
          src={logo}
          alt={AutoServiceFeat5.jpg}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default AutoServiceFeat5;
