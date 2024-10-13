import React, { useState } from "react";
import './signup.css'; 
import { Form, Button, Container } from "react-bootstrap";

function Signup() {
  const [formData, setFormData] = useState({
		username: "",
		age: "",
		mobile: "",
		email: "",
		password: "",
		repassword: "",
	});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform signup logic here
    console.log("Form data submitted:", formData);
  };

  return (
    <Container className="signup-container mt-5">
      <h2 className="font">Sign Up</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="Name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAge">
          <Form.Label>Age:</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMobile">
          <Form.Label>Mobile Number:</Form.Label>
          <Form.Control
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formrepassword">
          <Form.Label>Re enter Password:</Form.Label>
          <Form.Control
            type="password"
            name="repassword"
            value={formData.repassword}
            onChange={handleChange}
            placeholder="Enter mobile number"
            required
          />
        </Form.Group>

        <Button className="signup-button" variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
