import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser, FaSignInAlt, FaSignOutAlt, FaSearch } from "react-icons/fa";

function NAV_BAR() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary text-light sticky-top shadow"
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center"
      >
        <Navbar.Brand href="#">
          <img
            src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png"
            alt="logo"
            className="brand-logo"
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto d-flex align-items-center">
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link">
              About Us
            </Nav.Link>
            <Nav.Link href="#contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
          <div className="d-flex align-items-center right-navbar">
            <NavDropdown
              title={<FaUser />}
              id="navbarScrollingDropdown"
              className="ms-3"
            >
              <NavDropdown.Item href="#editProduct">
                Edit Product
              </NavDropdown.Item>
              <NavDropdown.Item href="#editUserDetails">
                Edit User Details
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
            </NavDropdown>
            <div className="sign-buts">
              <Button
                variant="outline-success"
                className="ms-2 sign-button"
                title="Sign In"
                href="#signIn"
              >
                <FaSignInAlt className="mx-1" />
              </Button>
              <Button
                variant="outline-success"
                className="ms-2 sign-button"
                title="Sign Out"
                href="#logout"
              >
                <FaSignOutAlt className="mx-1" />
              </Button>
            </div>
            <Form className="d-flex ms-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "200px" }}
              />
              <Button variant="outline-success">
                <FaSearch />
              </Button>
            </Form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAV_BAR;
