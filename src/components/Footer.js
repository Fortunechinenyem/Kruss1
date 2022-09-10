import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../image/logo.png";

const Footer = () => {
  return (
    <div>
      <Card>
        <Card.Body>
          <div className="logo mb-3">
            <img src={logo} alt={Footer.png} />
          </div>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>FAQ</Card.Text>
          <Button variant="info">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Footer;
