import React from "react";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const course = useLoaderData();
  const { title } = course;
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};

export default Checkout;
