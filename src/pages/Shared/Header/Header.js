import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import logo from "../../../asset/logo.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="fw -bold">
          <Link className=" text-decoration-none" to="/">
            <img
              className="me-2 rounded"
              src={logo}
              alt=""
              style={{ height: "50px" }}
            />
            <span className="fs-2  fw-bold text-white">GeeksEdu</span>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-3">
            <Link
              className="text-white text-decoration-none me-4 "
              to="/category"
            >
              Courses
            </Link>
            <Link className="text-white text-decoration-none me-4" to="/faq">
              FAQ
            </Link>
            <Link className="text-white text-decoration-none me-4" to="blog">
              Blog
            </Link>
            <p className="text-white">toggle</p>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
