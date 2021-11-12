import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";


const NavBar = (props) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      style={{ opacity: "80%", color: "red", fontSize: 20 }}
      variant="dark"
      sticky="top" 
    >
      {console.log("NavBar :", props.user)}
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {props.isLoggedIn && (
              <Nav.Link href="/home" user={props.user}>
                Home
              </Nav.Link>
            )}
            {props.isLoggedIn && (
              <Nav.Link href="/routines" user={props.user}>
                {" "}
                myRoutine
              </Nav.Link>
            )}
            {props.isLoggedIn && (
              <NavDropdown title="Resources" id="collasible-nav-dropdown">
                <NavDropdown.Item
                  href="https://www.myplate.gov/"
                  target="_blank"
                >
                  Nutrition
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.myfitnesspal.com/"
                  target="_blank"
                >
                  My Fitness Pal
                </NavDropdown.Item>
                <NavDropdown.Item
                  href="https://www.youtube.com/watch?v=U4Jr-123Sdo"
                  target="_blank"
                >
                  Squat University
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
          <Nav>
            {!props.isLoggedIn && <Nav.Link href="/login">Login</Nav.Link>}
            {props.isLoggedIn && (
              <Nav.Link
                onClick={props.userLogOut}
                user={props.user}
                href="/login"
              >
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
