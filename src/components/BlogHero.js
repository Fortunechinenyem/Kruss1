import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const BlogHero = () => {
  return (
    <section className="bloghero ">
      <div className="">
        <div className="herotext">
          <h1> Blog </h1>
          <p>Get our updated posts</p>
          <Form className="w-100 mx-auto">
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="fullname" placeholder="Full Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Link to="/sevices">
              <Button variant="light" className="nav-item">
                Subscribe
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
