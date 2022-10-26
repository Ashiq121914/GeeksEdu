import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

import { FaGoogle, FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
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
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p>
          New to this site? Please <Link to="/register">Register</Link>
        </p>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className="text-danger ms-5">{error}</Form.Text>
        <p>Or</p>
        {/* for google and github sing in */}
        <button
          onClick={handleGoogleSignIn}
          type="button"
          className="btn btn-primary"
        >
          <FaGoogle className="me-2 mb-1"></FaGoogle>
          Sign In With Google
        </button>
        <button
          onClick={handleGithubSignIn}
          type="button"
          className="btn btn-dark ms-3"
        >
          <FaGithub className=" me-2 mb-1"></FaGithub>
          Sign In With Github
        </button>
      </Form>
    </div>
  );
};

export default Login;
