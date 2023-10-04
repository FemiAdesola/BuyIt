import React from "react";
import { Navbar, Nav, Container} from "react-bootstrap";

const FooterBottom = () => {
  return (
    <div>
      <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">
            <div className="copyright">
              <p>
                Femi Adesola &copy; {new Date().getFullYear()}{" "}
                <strong>
                  <span> All Rights Reserved</span>{" "}
                </strong>{" "}
              </p>{" "}
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                href="https://www.linkedin.com/in/femi-adesola-oyinloye-106454145/"
                target="_blank"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </Nav.Link>
              <Nav.Link href="https://github.com/FemiAdesola" target="_blank">
                <i className="fab fa-github fa-2x"></i>
              </Nav.Link>
              <Nav.Link href="/" target="_blank">
                <i className="fab fa-facebook fa-2x"></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default FooterBottom;
