import React from "react";
import logo from "../image/img (13).jpg";

const AutoServiceFeat1 = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>​Auto Errand As A Service</h2>
          <button className="btn btn-info">Learn More</button>
        </div>
        <img
          src={logo}
          alt={AutoServiceFeat1.jpg}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default AutoServiceFeat1;
