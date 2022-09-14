import React from "react";
import Navbar from "../components/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <section>
      <Navbar />
      <div className="text-center mt-4 mb-3 section__title section__title--services">
        <h1>Sign Up</h1>
      </div>
      <Form className="w-75 mx-auto">
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
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="info" type="submit" className="">
          <Link to="/dashboard">Submit</Link>
        </Button>
      </Form>
    </section>
  );
};

export default SignUp;
