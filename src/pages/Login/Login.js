import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import login from "./login.css";
const Login = () => {
  // for login error
  const [error, setError] = useState("");

  //context from authInfo
  const { providerLogin, signIn } = useContext(AuthContext);
  //google provider
  const googleProvider = new GoogleAuthProvider();

  //github provider
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();

  //google sign in
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  //github sign in
  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  // for go to location it supposed to be
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  //sign in with email and password
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  return (
    <div className="container">
      <Form
        className="border border-dark-50 p-5 mt-5 rounded shadow mx-auto login-container"
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-5">Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="fs-5">Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p>
          New to this site? Please <Link to="/register">Register</Link>
        </p>

        <button
          className="btn btn-warning fw-bold btn-lg btn-block"
          type="submit"
        >
          Submit
        </button>

        {/* error showing here */}
        <Form.Text className="text-danger ms-5">{error}</Form.Text>
        <p className="text-center fw-bold fs-5">Or</p>
        {/* for google and github sing in */}
        <div className="text-center">
          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="btn btn-primary btn-google"
          >
            <FaGoogle className="me-2 mb-1"></FaGoogle>
            Sign In With Google
          </button>
          <button
            onClick={handleGithubSignIn}
            type="button"
            className="btn btn-dark btn-github"
          >
            <FaGithub className=" me-2"></FaGithub>
            Sign In With Github
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Login;
