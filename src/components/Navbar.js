import React from "react";
import Nav from "react-bootstrap/Nav";

import { Link } from "react-router-dom";
import logo from "../image/logo.png";

function Navbar() {
  return (
    <header className="d-flex">
      <div className="logo bg-light">
        <Link to="/">
          <img src={logo} alt={Navbar.png} />
        </Link>
      </div>
      <Nav defaultActiveKey="/home">
        <ul className="nav__list">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="">
            <Link to="/about">About</Link>
          </li>
          <li className="">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </Nav>
    </header>
  );
}

export default Navbar;
