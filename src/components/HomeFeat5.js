import React from "react";
import logo from "../image/img (5).jpg";

const HomeFeat5 = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <img
          src={logo}
          alt={HomeFeat5.jpg}
          className="col-md "
          height="350px"
          style={{ objectFit: "cover" }}
        />
        <div className="col-md text-center">
          <h2>​Check Out Our Blog</h2>
          <button className="btn btn-info">Here</button>
        </div>
      </div>
    </section>
  );
};

export default HomeFeat5;
