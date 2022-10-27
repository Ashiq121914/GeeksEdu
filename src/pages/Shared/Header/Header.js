import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";
import logo from "../../../asset/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Form from "react-bootstrap/Form";
import { FaUserAlt } from "react-icons/fa";

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
              className="text-white text-decoration-none me-4 fs-5"
              to="/category"
            >
              Courses
            </Link>
            <Link
              className="text-white text-decoration-none me-4 fs-5"
              to="/faqs"
            >
              FAQs
            </Link>
            <Link
              to="/blog"
              className="text-white text-decoration-none me-4 fs-5"
            >
              Blog
            </Link>

            <Form.Check
              className="text-white fs-5"
              onClick={handleToogle}
              type="switch"
              id="custom-switch"
              label={<>{!checked ? "dark" : "light"}</>}
            />
          </Nav>
          {/* for showing the conditional user info  or login*/}
          {user?.uid ? (
            <>
              {user.photoURL ? (
                <img
                  className="rounded-circle"
                  style={{ width: "40px", height: "40px", cursor: "pointer" }}
                  src={user.photoURL}
                  alt=""
                  title={user.displayName}
                />
              ) : (
                <FaUserAlt className="text-white fs-2"></FaUserAlt>
              )}

              <button onClick={handleLogOut} className="btn btn-dark ms-2 fs-5">
                Sign Out
              </button>
            </>
          ) : (
            <button className="btn btn-dark">
              <Link
                className="text-decoration-none text-white fs-5"
                to="/login"
              >
                Login
              </Link>
            </button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
