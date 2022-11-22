import React from "react";
import logo from "../image/img (13).jpg";

const AutoServiceFeat4 = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>​Fleet Management</h2>
          <button className="btn btn-info">Learn More</button>
        </div>
        <img
          src={logo}
          alt={AutoServiceFeat4.jpg}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default AutoServiceFeat4;
