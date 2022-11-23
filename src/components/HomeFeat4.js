import React from "react";
import { FaPeopleCarry } from "react-icons/fa";
import logo from "../image/img (4).jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
          <div>
            <div>
              <FaPeopleCarry />
              <p>We work together to achieve awesome goals!</p>
            </div>
          </div>
          <Link to="/sevices">
            <Button variant="dark" className="nav-item">
              About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeFeat4;
