import React from "react";
import Heroimage from "../image/kruss1.png";

const Hero = () => {
  return (
    <section>
      <div className="d-flex w-75 mx-auto">
        <h2>Kruss Automotive Services</h2>
        <img src={Heroimage} alt={Hero.png} />
      </div>
    </section>
  );
};

export default Hero;
