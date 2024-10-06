import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaSearch, FaHome, FaInfoCircle, FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function NAV_BAR({ setQuery }) {

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary text-light sticky-top shadow"
      style={{ background: "linear-gradient(to right, #4e54c8, #8f94fb)" }}
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
            alt="logo"
            className="brand-logo me-2"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
          <span className="font-weight-bold text-white">E-commerce</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/" className="nav-link text-white">
              <FaHome className="me-1" /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link text-white">
              <FaInfoCircle className="me-1" /> About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link text-white">
              <FaEnvelope className="me-1" /> Contact
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center right-navbar">
            <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search products..."
                className="me-2"
                aria-label="Search"
                style={{ width: "200px", borderRadius: "20px" }}
                onChange={handleSearch}
              />
              <Button variant="light" style={{ borderRadius: "20px" }}>
                <FaSearch />
              </Button>
            </Form>
            <Button
              variant="light"
              className="me-2"
              style={{ borderRadius: "50%" }}
            >
              <FaShoppingCart />
            </Button>
            <NavDropdown
              title={<FaUser />}
              id="navbarScrollingDropdown"
              className="me-3"
            >
              <NavDropdown.Item as={Link} to="#editProduct">
                <FaShoppingCart className="me-2" /> Edit Product
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="#editUserDetails">
                <FaUser className="me-2" /> Edit User Details
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="#settings">
                <FaInfoCircle className="me-2" /> Settings
              </NavDropdown.Item>
            </NavDropdown>
            <div className="sign-buts">
              <Button
                variant="outline-light"
                className="me-2 sign-button"
                title="Sign In"
                as={Link} // Use Link for client-side navigation
                to="/signup" // Navigate to the signup page
                style={{ borderRadius: "20px" }}
              >
                <FaSignInAlt className="me-1" /> Sign In
              </Button>
              <Button
                variant="light"
                className="sign-button"
                title="Sign Out"
                as={Link} // Changed to Link for client-side navigation
                to="/logout" // Navigate to the logout functionality (assuming it exists)
                style={{ borderRadius: "20px" }}
              >
                <FaSignOutAlt className="me-1" /> Sign Out
              </Button>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAV_BAR;
