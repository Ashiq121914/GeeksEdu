import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import logo from "../../../asset/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Form from "react-bootstrap/Form";

const Header = () => {
  // for toogle option
  const [checked, setChecked] = useState(false);

  const handleToogle = (event) => {
    setChecked(event.target.checked);
  };

  // using context here
  const { user, logOut } = useContext(AuthContext);

  // logout
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
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
            <span className="fs-2  fw-bold text-white ">GeeksEdu</span>
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-2">
            <Link
              className="text-white text-decoration-none me-4 "
              to="/category"
            >
              Courses
            </Link>
            <Link className="text-white text-decoration-none me-4" to="/faq">
              FAQ
            </Link>
            <Link to="/blog" className="text-white text-decoration-none me-4">
              Blog
            </Link>

            <Form.Check
              className="text-white"
              onClick={handleToogle}
              type="switch"
              id="custom-switch"
              label={<>{!checked ? "dark" : "light"}</>}
            />
          </Nav>
          {/* for showing the user info */}
          {user?.uid ? (
            <>
              <img
                className="rounded-circle"
                style={{ width: "40px", height: "40px", cursor: "pointer" }}
                src={user.photoURL}
                alt=""
                title={user.displayName}
              />
              <button onClick={handleLogOut} className="btn btn-dark ms-2">
                Sign Out
              </button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
