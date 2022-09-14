import React from "react";

import Card from "react-bootstrap/Card";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <header className="d-flex">
            <div className="logo mb-3">
              <img src={logo} alt={Footer.png} />
            </div>
            <div>
              <a href="mailto:buzzimails@gmail.com" className="footer__link">
                buzzimails@gmail.com
              </a>
            </div>
          </header>

          <Card.Text>
            <footer>
              <div className="footer">
                <ul className="social-list">
                  <li className="social-list__item">
                    <Link
                      to="/about"
                      className="social-list__link"
                      href="http://linkedin.com"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li className="social-list__item">
                    <a className="social-list__link" href="http://linkedin.com">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a
                      className="social-list__link"
                      href="https://whatsapp.com"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a
                      className="social-list__link"
                      href="https://facebook.com"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
