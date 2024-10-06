// ContactUs.js
import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style.css";

const ContactUs = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <Container fluid className="contact-us-section py-5">
      <Row className="justify-content-center">
        <Col md={6} className="contact-form-wrapper p-4 shadow">
          <motion.h2
            className="text-center mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h2>
          {!formSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Your Name</Form.Label>
                  <motion.input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control"
                    whileFocus={{ scale: 1.05 }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <motion.input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                    whileFocus={{ scale: 1.05 }}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <motion.textarea
                    rows={4}
                    placeholder="Enter your message"
                    className="form-control"
                    whileFocus={{ scale: 1.05 }}
                    required
                  />
                </Form.Group>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="primary" type="submit" className="w-100 contact-submit-btn">
                    Submit
                  </Button>
                </motion.div>
              </Form>
            </motion.div>
          ) : (
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="mb-3 text-success">Thank you for reaching out!</h4>
              <p>We will get back to you shortly.</p>
            </motion.div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
