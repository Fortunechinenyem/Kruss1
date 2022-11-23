import React from "react";
import Heroimage from "../image/img (10).jpg";
const ContactHero = () => {
  return (
    <section>
      <div className="text-center w-100 mx-auto container">
        <div className="w-75 mx-auto mt-3 mb-3 ">
          <img src={Heroimage} alt={ContactHero.jpg} className="mx-auto" />
        </div>
        <div className="text-center section__title section__title--services">
          <h1>Need Some Help?</h1>
        </div>
        <div>
          <p>
            Tell us your suggestions, ideas and compllains. We are here to serve
            you better.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
