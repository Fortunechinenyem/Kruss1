import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const Homebody = () => {
  return (
    <section>
      <div className=" w-50 mx-auto mb-4 text-center">
        <Button variant="info" className="m-2">
          <Link to="/signup"> Sign Up</Link>
        </Button>
        <Button variant="info">
          <Link to="/signin"> Sign In</Link>
        </Button>
      </div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Exciting News!</Card.Title>
          <Card.Text>
            Check out our e-book{" "}
            <span>"How to buy and sell Nigerian Used Cars"</span>
          </Card.Text>
          <Button variant="info">Purchase</Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Homebody;
