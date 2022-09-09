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
        <ul>
          <li className="nav__list">
            <Link to="/">Home</Link>
          </li>
          <li className="nav__list">
            <Link to="/about">About</Link>
          </li>
          <li className="nav__list">
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </Nav>
    </header>
  );
}

export default Navbar;
