import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();

  // adding a toast here
  const toasterPop = () => {
    toast.success("Course purchase successful");
  };
  const { title } = course;
  return (
    <div className="text-center">
      <h3 className="border border-dark-50 mt-5 bg-dark text-white fw-bold d-inline-block p-3 rounded">
        {title}
      </h3>
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
