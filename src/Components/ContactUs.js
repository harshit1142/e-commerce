import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./ContactUs.css"; // Ensure you have corresponding CSS for styling

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    category: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted: ", formData);
    // Perform submission logic here
  };

  return (
    <Container className="contact-us-container mt-5">
      <Row>
        <Col md={6}>
          <h2 className="font">Have questions? Get in touch.</h2>
          <p>We are here to help! Reach out to us by filling out the form below or find answers in the FAQ section.</p>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="categorySelect" className="mb-3">
              <Form.Label>How can we help?</Form.Label>
              <Form.Control
                as="select"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select a category</option>
                <option value="product-inquiry">Product Inquiry</option>
                <option value="order-support">Order Support</option>
                <option value="technical-issue">Technical Issue</option>
                <option value="returns">Returns & Refunds</option>
                <option value="other">Other</option>
              </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Your Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="contact-us-button">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h2 className="font">Frequently Asked Questions</h2>
          <ul className="faq-list">
            <li><strong>1. How can I track my order?</strong></li>
            <p>Once your order has shipped, you will receive a tracking number via email.</p>
            <li><strong>2. What is the return policy?</strong></li>
            <p>Items can be returned within 30 days of purchase in their original condition.</p>
            <li><strong>3. How do I apply a discount code?</strong></li>
            <p>Discount codes can be applied at checkout in the “promo code” section.</p>
            <li><strong>4. I need help with a technical issue.</strong></li>
            <p>For technical assistance, please select the 'Technical Issue' category in the form above.</p>
            <li><strong>5. What payment methods are accepted?</strong></li>
            <p>We accept credit/debit cards, PayPal, and other major payment options.</p>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactUs;
