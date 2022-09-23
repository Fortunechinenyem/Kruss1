import React from "react";
import Heroimage from "../image/hero.jpg";

const Hero = () => {
  return (
    <section>
      <div className="w-75 mx-auto mb-5 text-center">
        <h1 className="">Kruss Automotive Services</h1>
      </div>
      <div className="hero w-75 mx-auto">
        <img src={Heroimage} alt={Hero.png} />
      </div>
    </section>
  );
};

export default Hero;
