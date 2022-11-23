import React from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const ContactFeat4 = () => {
  return (
    <section>
      <h2 className="w-50 text-center mx-auto section__title section__title--services">
        Share Your Thoughts with Us
      </h2>
      <Form className="w-75 mx-auto text-center">
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="fullname" placeholder="Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="phonenumber" placeholder="Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Message</Form.Label>
          <Form.Control type="text" placeholder="Message" />
        </Form.Group>

        <Link to="/sevices">
          <Button variant="dark" className="nav-item text-center">
            Submit
          </Button>
        </Link>
      </Form>
    </section>
  );
};

export default ContactFeat4;
