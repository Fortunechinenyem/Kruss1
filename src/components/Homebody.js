import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Homebody = () => {
  return (
    <section>
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
