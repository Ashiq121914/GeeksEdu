import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import logo from "../../../asset/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  // using context here
  const { user } = useContext(AuthContext);
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
          <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
