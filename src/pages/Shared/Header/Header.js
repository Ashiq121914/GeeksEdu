import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";
import logo from "../../../asset/logo.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Form from "react-bootstrap/Form";
import { FaUserAlt } from "react-icons/fa";
import toast from "react-hot-toast";

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
  // showing toast the user name when clickled
  const toasterPop = () => {
    toast.success(user.displayName);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={!checked ? "bg-dark" : "bg-white"}
    >
      <Container>
        <Navbar.Brand className="fw -bold">
          <NavLink className=" text-decoration-none" to="/home">
            <img
              className="me-2 rounded"
              src={logo}
              alt=""
              style={{ height: "60px", width: "70px" }}
            />
            <span
              className={
                !checked
                  ? "text-white fs-2  fw-bold "
                  : "text-dark fs-2  fw-bold "
              }
              style={{ marginTop: "10px" }}
            >
              GeeksEdu
            </span>
          </NavLink>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mt-2 " style={{ marginLeft: "200px" }}>
            <NavLink
              className={
                !checked
                  ? "text-white  text-decoration-none me-4 fs-5"
                  : "text-dark  text-decoration-none me-4 fs-5"
              }
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={
                !checked
                  ? "text-white  text-decoration-none me-4 fs-5"
                  : "text-dark  text-decoration-none me-4 fs-5"
              }
              to="/category"
            >
              Courses
            </NavLink>
            <NavLink
              className={
                !checked
                  ? "text-white  text-decoration-none me-4 fs-5"
                  : "text-dark  text-decoration-none me-4 fs-5"
              }
              to="/faqs"
            >
              FAQs
            </NavLink>
            <NavLink
              to="/blog"
              className={
                !checked
                  ? "text-white  text-decoration-none me-4 fs-5"
                  : "text-dark  text-decoration-none me-4 fs-5"
              }
            >
              Blog
            </NavLink>

            <Form.Check
              className={
                !checked
                  ? "text-white  text-decoration-none me-4 fs-5"
                  : "text-dark  text-decoration-none me-4 fs-5"
              }
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
                  onClick={toasterPop}
                />
              ) : (
                <FaUserAlt
                  onClick={toasterPop}
                  className="text-white fs-2"
                ></FaUserAlt>
              )}

              <button onClick={handleLogOut} className="btn btn-dark ms-2 fs-5">
                Sign Out
              </button>
            </>
          ) : (
            <button className={!checked ? "btn btn-light" : "btn btn-dark"}>
              <NavLink
                className={
                  !checked
                    ? "text-dark  text-decoration-none me-4 fs-5"
                    : "text-white  text-decoration-none me-4 fs-5"
                }
                to="/login"
              >
                Login
              </NavLink>
            </button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
