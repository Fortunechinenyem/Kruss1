import React from "react";
import logo from "../image/img (6).jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const AutoServiceFeat3 = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>​Car Diagnostics</h2>
          <Link to="/sevices">
            <Button variant="dark" className="nav-item">
              Learn More <BsArrowRight />
            </Button>
          </Link>
        </div>
        <img
          src={logo}
          alt={AutoServiceFeat3.jpg}
          className="col-md "
          height="250px"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
};

export default AutoServiceFeat3;
