import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Homebody = () => {
  return (
    <section>
      <div className=" w-50 mx-auto mb-4 ">
        <Button variant="info">Sign Up</Button>
        <Button variant="info">Sign In</Button>
      </div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Exciting News!</Card.Title>
          <Card.Text>
            Check out our e-book{" "}
            <bold>"How to buy and sell Nigerian Used Cars"</bold>
          </Card.Text>
          <Button variant="info">Purchase</Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Homebody;
