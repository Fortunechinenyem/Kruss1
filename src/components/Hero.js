import React from "react";
import Heroimage from "../image/car.png";

const Hero = () => {
  return (
    <section>
      <div className=" hero d-flex w-75 mx-auto">
        <h2 className="m-2">Kruss Automotive Services</h2>
        <img src={Heroimage} alt={Hero.png} />
      </div>
    </section>
  );
};

export default Hero;
