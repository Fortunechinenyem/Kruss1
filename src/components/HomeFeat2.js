import React from "react";
import logo from "../image/img (1).jpg";
const HomeFeat2 = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>​BeSpoke Auto Services</h2>
          <button className="btn btn-dark">Explore</button>
        </div>
        <img
          src={logo}
          alt={HomeFeat2.jpg}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default HomeFeat2;
