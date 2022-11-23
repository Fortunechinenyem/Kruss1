import React from "react";
import logo from "../image/img (1).jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
const HomeFeat2 = () => {
  return (
    <section className="container ">
      <div className="d-flex row g-5 mx-auto ">
        <div className="col-md text-center">
          <h2>​BeSpoke Auto Services</h2>
          <Link to="/sevices">
            <Button variant="dark" className="nav-item">
              Explore
            </Button>
          </Link>
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
