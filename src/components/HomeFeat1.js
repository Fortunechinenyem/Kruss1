import React from "react";

import data from "./Data";
const Itemcard = (props) => {
  return (
    <div className="col-sm-6 col-md-4  mb-4 ">
      <div className="card  w-75 mx-auto  shadow">
        <img src={props.img} className="card-img" alt="" />
        <div className="card-body text-center">
          <h5>{props.title}</h5>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
};
const HomeFeat1 = () => {
  return (
    <>
      <section className="py-4 container">
        <h2 className="w-50 text-center mx-auto section__title section__title--services">
          Premiumm Auto Services
        </h2>
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default HomeFeat1;
