import React from "react";
import logo1 from "../image/pic (2).jpg";
import logo2 from "../image/pic (6).jpg";
import logo3 from "../image/pic (7).jpg";
import logo4 from "../image/img (3).jpg";

const BlogFeat2 = () => {
  return (
    <section>
      <div className="text-center w-100 mx-auto container">
        <div className="w-75 mx-auto mt-3 mb-3 ">
          <img
            src={logo1}
            alt={BlogFeat2.jpg}
            className="mx-auto col-md"
            height="200px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="text-center section__title section__title--services">
          <h1>Basic Car Maintenance</h1>
        </div>
        <div>
          <p>By Joshua Aribido</p>
          <p>
            {" "}
            We bridge the gap between auto artisans and the clients providing
            professional guidiance and services.
          </p>
        </div>
      </div>
      <div className="text-center w-100 mx-auto container">
        <div className="w-75 mx-auto mt-3 mb-3 ">
          <img
            src={logo2}
            alt={BlogFeat2.jpg}
            className="mx-auto col-md"
            height="200px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="text-center section__title section__title--services">
          <h1>The Importance of Coolant</h1>
        </div>
        <div>
          <p>By Joshua Aribido</p>
          <p>
            {" "}
            We bridge the gap between auto artisans and the clients providing
            professional guidiance and services.
          </p>
        </div>
      </div>
      <div className="text-center w-100 mx-auto container">
        <div className="w-75 mx-auto mt-3 mb-3 ">
          <img
            src={logo3}
            alt={BlogFeat2.jpg}
            className="mx-auto col-md"
            height="200px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="text-center section__title section__title--services">
          <h1>Car oil, why the fuss?</h1>
        </div>
        <div>
          <p>By Joshua Aribido</p>
          <p>
            {" "}
            We bridge the gap between auto artisans and the clients providing
            professional guidiance and services.
          </p>
        </div>
      </div>
      <div className="text-center w-100 mx-auto container">
        <div className="w-75 mx-auto mt-3 mb-3 ">
          <img
            src={logo4}
            alt={BlogFeat2.jpg}
            className="mx-auto col-md"
            height="200px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="text-center section__title section__title--services">
          <h1>DashBoard Lights</h1>
        </div>
        <div>
          <p>By Joshua Aribido</p>
          <p>
            {" "}
            We bridge the gap between auto artisans and the clients providing
            professional guidiance and services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogFeat2;
