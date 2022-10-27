import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const course = useLoaderData();

  // taking the user to show here
  const { user } = useContext(AuthContext);

  // adding a toast here
  const toasterPop = () => {
    toast.success("Course purchase successful");
  };
  const { title } = course;
  return (
    <div className="text-center">
      <h3 className="border border-dark-50 mt-5 bg-dark text-white fw-bold d-inline-block p-3 rounded">
        Course Name: {title}
      </h3>
      <p className="fs-5">User Name: {user.displayName}</p>
      <button
        onClick={toasterPop}
        className="btn btn-success btn-lg d-block mx-auto"
      >
        Please Buy
      </button>
    </div>
  );
};

export default Checkout;
