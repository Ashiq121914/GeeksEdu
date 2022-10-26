import React from "react";

const Blog = () => {
  return (
    <div className="container mt-5">
      <div>
        <p className="mb-0 fs-3 fw-bold">1. what is `cors`?</p>=
        <p>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources.
        </p>
      </div>
      <div>
        <p className="mb-0 fs-3 fw-bold">
          2. Why are you using `firebase`? What other options do you have to
          implement authentication?
        </p>
        =
        <p>
          Because firebase Authentication provides backend services, easy-to-use
          SDKs, and ready-made UI libraries to authenticate users to your app.
          It supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. Some other options to implement authentication would be: Auth0,
          MongoDB, Okta,Azure etc.
        </p>
      </div>
      <div>
        <p className="mb-0 fs-3 fw-bold">3. How does the private route work</p>=
        <p>
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in).
        </p>
      </div>
      <div>
        <p className="mb-0 fs-3 fw-bold">
          4. What is Node? How does Node work?
        </p>
        =
        <p>
          Node.js is an open-source, cross-platform, back-end JavaScript runtime
          environment that runs on a JavaScript Engine and executes JavaScript
          code outside a web browser, which was designed to build scalable
          network applications. It is a used as backend service where javascript
          works on the server-side of the application. This way javascript is
          used on both frontend and backend. Node. js runs on chrome v8 engine
          which converts javascript code into machine code, it is highly
          scalable, lightweight, fast, and data-intensive.
        </p>
      </div>
    </div>
  );
};

export default Blog;
