import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const getClass = (isActive) => (isActive ? "active nav-link" : "nav-link");
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <NavLink to={"/"} className={"navbar-brand"}>
          React Router Dom
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to={"/"} className="nav-link">
              Home
            </NavLink>
            <NavLink to={"/categories"} className="nav-link">
              Categories
            </NavLink>
            <NavLink to={"/products"} className="nav-link">
              Products
            </NavLink>
            <NavLink to={"/contact"} className="nav-link">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
