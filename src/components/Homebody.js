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
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="info">Go somewhere</Button>
        </Card.Body>
      </Card>
    </section>
  );
};

export default Homebody;
