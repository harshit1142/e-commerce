import React, { useState } from "react";
import './signup.css'; 
import { Form, Button, Container, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    name: "",
    age: "",
    mobile: "",
    email: "",
    password: "",
    repassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate  = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    
    
    if (!formData.username) newErrors.username = "Username is required";

    
    if (!formData.name) newErrors.name = "Name is required";

    if (formData.age <= 0) newErrors.age = "Please enter a valid age";

   
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(formData.mobile)) newErrors.mobile = "Mobile number must be 10 digits";


    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address";

  
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password must be at least 8 characters, include an uppercase letter, a number, and a special character";
    }

    if (formData.password !== formData.repassword) {
      newErrors.repassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Perform signup logic here
      navigate('/');
      console.log("Form data submitted:", formData);
    }
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
          {errors.username && <Alert variant="danger">{errors.username}</Alert>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
          {errors.name && <Alert variant="danger">{errors.name}</Alert>}
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
          {errors.age && <Alert variant="danger">{errors.age}</Alert>}
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
          {errors.mobile && <Alert variant="danger">{errors.mobile}</Alert>}
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
          {errors.email && <Alert variant="danger">{errors.email}</Alert>}
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
          {errors.password && <Alert variant="danger">{errors.password}</Alert>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRepassword">
          <Form.Label>Re-enter Password:</Form.Label>
          <Form.Control
            type="password"
            name="repassword"
            value={formData.repassword}
            onChange={handleChange}
            placeholder="Re-enter password"
            required
          />
          {errors.repassword && <Alert variant="danger">{errors.repassword}</Alert>}
        </Form.Group>

        <Button className="signup-button" variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
