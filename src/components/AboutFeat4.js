import React from "react";
import logo1 from "../image/img (20).jpg";
import logo2 from "../image/5236.jpg";

const AboutFeat4 = () => {
  return (
    <div>
      <div>
        <h3 className="text-center mt-3 mb-3 section__title section__title--services">
          Our Partners
        </h3>
      </div>
      <div className="w-50 mx-auto">
        <img src={logo1} alt={AboutFeat4.jpg} />
        <p className="text-center">Joshua Aribido</p>
      </div>
      <div>
        <h3 className="text-center mt-3 mb-3 section__title section__title--services">
          Meet Our Team
        </h3>
      </div>
      <div className="w-50 mx-auto">
        <img src={logo2} alt={AboutFeat4.jpg} />
        <p className="text-center">Joshua Aribido</p>
      </div>
    </div>
  );
};

export default AboutFeat4;
