import React from "react";
import Heroimage from "../image/img (11).jpg";

const AboutHero = () => {
  return (
    <>
      <section>
        <div className="text-center w-100 mx-auto container">
          <div className="w-75 mx-auto mt-3 mb-3 ">
            <img src={Heroimage} alt={AboutHero.jpg} className="mx-auto" />
          </div>
          <div className="text-center section__title section__title--services">
            <h1>Who We Are</h1>
          </div>
          <div>
            <p>
              Kruss Automotive Services provide premium auto services to clients
            </p>
            <p>
              {" "}
              We bridge the gap between auto artisans and the clients providing
              professional guidiance and services.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
