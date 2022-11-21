import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section className="hero ">
      <div className="">
        <div className="herotext">
          <h1>Kruss Automotive Services </h1>
          <Button variant="info" className="nav-item">
            <Link to="/sevices"> Explore</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
