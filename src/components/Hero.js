import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="hero ">
      <div className="">
        <div className="herotext">
          <h1>Kruss Automotive Services </h1>

          <Link to="/sevices">
            <Button variant="light" className="nav-item">
              Explore <BsArrowRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
