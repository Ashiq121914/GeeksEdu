import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";
import Category from "../../pages/Category/Category";
import Course from "../../pages/Course/Course";
import Checkout from "../../pages/Checkout/Checkout";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../../pages/Blog/Blog";
import WrongRoute from "../../pages/WrongRoute/WrongRoute";
import FAQs from "../../pages/FAQs/FAQs";

//creating the route
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
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/category",
        element: <Category></Category>,
        loader: () =>
          fetch(
            "https://b610-lerning-platform-server-side-theta.vercel.app/category"
          ),
      },
      {
        path: "/course/:id",
        element: <Course></Course>,
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-theta.vercel.app/course/${params.id}`
          ),
      },
      // private route
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://b610-lerning-platform-server-side-theta.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faqs",
        element: <FAQs></FAQs>,
      },
      // for 404 route
      {
        path: "*",
        element: <WrongRoute></WrongRoute>,
      },
    ],
  },
]);
