import React from "react";
import logo from "../image/img (5).jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

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
          <Link to="/sevices">
            <Button variant="dark" className="nav-item">
              Here <BsArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeat5;
