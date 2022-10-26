import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  // for login error
  const [error, setError] = useState("");

  // for go to location it supposed to be
  const location = useLocation();

  //to navigate to the necessary page
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  // for sign in with email and password
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();

        handleUpdateUserProfile(name, photoURL);

        navigate(from, { replace: true });
        window.location.reload();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  //updating the name and photoURL
  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div className="container">
      <Form
        onSubmit={handleSubmit}
        className="border border-dark-50 p-5 mt-5 rounded shadow mx-auto login-container"
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter full name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            name="photoURL"
            type="text"
            placeholder="Enter Photo URL"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <p>
          Already have an Account? Please <Link to="/login">Login</Link>
        </p>

        <Button variant="warning" type="submit">
          Submit
        </Button>
        {/* error showing here */}
        <p className="text-danger mt-2">{error}</p>
      </Form>
    </div>
  );
};

export default Register;
