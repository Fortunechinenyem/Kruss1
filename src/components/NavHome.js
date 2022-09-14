import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";

function NavHome() {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));
  return (
    <header className="d-flex">
      <div className="logo bg-light">
        <Link to="/">
          <img src={logo} alt={NavHome.png} />
        </Link>
      </div>
      <div className="toggle">
        {navbarState ? (
          <VscChromeClose onClick={() => setNavbarState(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={(e) => {
              e.stopPropagation();
              setNavbarState(true);
            }}
          />
        )}
      </div>
      <Nav defaultActiveKey="/home">
        <ul className="nav__list">
          <li
            onClick={() => setCurrentLink(1)}
            className={currentLink === 1 ? "active" : "none"}
          >
            <Link to="/" className="">
              <span> Home</span>
            </Link>
          </li>
          <li
            onClick={() => setCurrentLink(2)}
            className={currentLink === 2 ? "active" : "none"}
          >
            <Link to="/about" className="sides">
              <span> About</span>
            </Link>
          </li>
        </ul>
      </Nav>
    </header>
  );
}

export default NavHome;
