import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Nav_Bar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbary text-light">
            <Container fluid className="text-light">
                <Navbar.Brand className="text-light" href="#">  Student-Assistant</Navbar.Brand>
                <img className='brand-logo' src="https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png" alt='logo'/>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 text-light"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Button variant="outline-primary" className="text-light  ms-1" href="#action1">Sign In</Button>
                        <Button variant="outline-primary" className="text-light  ms-1" href="#action2">Logout</Button>
                        <NavDropdown className='btn btn-primary ms-1' title="My Profile" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Edit Product</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Edit User Details
                            </NavDropdown.Item>
                          
                        </NavDropdown>
                     
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Nav_Bar;