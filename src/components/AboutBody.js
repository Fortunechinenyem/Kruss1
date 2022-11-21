import React from "react";
import Heroimage from "../image/car.png";
import Founder from "../image/5236.jpg";

import Services from "./HomeFeat1";

const AboutBody = () => {
  return (
    <section>
      <div className="text-center section__title section__title--services">
        <h1>Who We Are</h1>
      </div>
      <div className="w-75 ms-auto">
        <img src={Heroimage} alt={AboutBody.png} />
      </div>
      <div className="text-center">
        <p>
          Kruss Automotive Services provide premium auto services to clients
        </p>
        <p>
          {" "}
          We bridge the gap between auto artisans and the clients providing
          professional guidiance and services.
        </p>
        <Services />
      </div>
      <div>
        <h3 className="text-center section__title section__title--services">
          Our Story
        </h3>
        <p className="text-center">
          Kruss Automotive Services started from a need to provide professional
          services to clients who might not have the time to go to auto
          workshops themselves considering the times and society where everyone
          has things to do, we understood the pain of looking for trustworthy
          auto-technicians and the service they render.
        </p>
      </div>
      <div>
        <h3 className="text-center mt-3 mb-3 section__title section__title--services">
          Meet Our Founder
        </h3>
      </div>
      <div className="w-50 mx-auto">
        <img src={Founder} alt={AboutBody.jpg} />
        <p className="text-center">Joshua Aribido</p>
      </div>
    </section>
  );
};

export default AboutBody;
