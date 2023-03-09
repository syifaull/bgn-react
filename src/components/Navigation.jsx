import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
              alt="Star Wars logo"
              className="starwars-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/people" className="text-shine">
                People
              </Nav.Link>
              <Nav.Link href="/films" className="text-shine">
                Films
              </Nav.Link>
              <Nav.Link href="/planets" className="text-shine">
                Planets
              </Nav.Link>
              <Nav.Link href="/species" className="text-shine">
                Species
              </Nav.Link>
              <Nav.Link href="/starships" className="text-shine">
                Starships
              </Nav.Link>
              <Nav.Link href="/vehicles" className="text-shine">
                Vehicles
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
