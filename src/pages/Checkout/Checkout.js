import React from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();

  const toasterPop = () => {
    toast.success("Course buying successfull");
  };
  const { title } = course;
  return (
    <div className="text-center">
      <h3 className="border border-dark-50 mt-5">{title}</h3>
      <button onClick={toasterPop} className="btn btn-success">
        Please Buy
      </button>
    </div>
  );
};

export default Checkout;
