import React from "react";
import logo from "../image/img (4).jpg";

const HomeFeat4 = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo}
          alt={HomeFeat4.jpg}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
        <div className="col-md text-center">
          <h2>​We Leverage</h2>
          <button className="btn btn-info">About Us</button>
        </div>
      </div>
    </section>
  );
};

export default HomeFeat4;
