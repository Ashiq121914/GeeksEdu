import React from "react";
import { Link } from "react-router-dom";

const LeftCategory = ({ course }) => {
  const { title, id } = course;

  return (
    <div className="mt-3">
      <Link className=" text-dark" to={`/course/${id}`}>
        <li>{title}</li>
      </Link>
    </div>
  );
};

export default LeftCategory;
