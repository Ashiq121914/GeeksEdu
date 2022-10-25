import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Category from "../../pages/Category/Category";
import Course from "../../pages/Course/Course";
import Checkout from "../../pages/Checkout/Checkout";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category",
        element: <Category></Category>,
        loader: () => fetch("http://localhost:5000/category"),
      },
      {
        path: "/course/:id",
        element: <Course></Course>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: "/checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/course/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);
