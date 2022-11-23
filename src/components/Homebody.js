import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Homebody = () => {
  return (
    <section>
      <Card className="text-center text-white">
        <Card.Body>
          <Card.Title>Exciting News!</Card.Title>
          <Card.Text>
            Check out our e-book{" "}
            <span>"How to buy and sell Nigerian Used Cars"</span>
          </Card.Text>
          <Link to="/sevices">
            <Button variant="light" className="nav-item">
              Purchase
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Homebody;
