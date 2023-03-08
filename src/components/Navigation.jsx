import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      {/* <nav>
        <img
          src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
          alt="Star Wars logo"
          className="starwars-logo pt-3"
        />
      </nav> */}
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand href="/home">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png"
              alt="Star Wars logo"
              className="starwars-logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className="text-shine">
              People
            </Nav.Link>
            <Nav.Link href="#features" className="text-shine">
              Films
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-shine">
              Planets
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-shine">
              Species
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-shine">
              Starships
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-shine">
              Vehicles
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
