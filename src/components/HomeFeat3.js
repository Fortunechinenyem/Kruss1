import React from "react";
import logo from "../image/image1.jpg";

const HomeFeat3 = () => {
  return (
    <section className="container ">
      <img
        src={logo}
        alt={HomeFeat3.jpg}
        className="col-md "
        height="350px"
        style={{ objectFit: "cover" }}
      />
    </section>
  );
};

export default HomeFeat3;
