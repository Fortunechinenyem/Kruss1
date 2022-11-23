import React from "react";

const BlogFeat1 = () => {
  return (
    <section>
      <div className="dropdown text-center">
        <button
          className="btn btn-dark dropdown-toggle "
          type="button"
          id="dropdownMenu2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Menu
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
          <li>
            <button className="dropdown-item" type="button">
              Car Talks
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              Learning Zone
            </button>
          </li>
          <li>
            <button className="dropdown-item" type="button">
              The Market
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default BlogFeat1;
