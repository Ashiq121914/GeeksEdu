import React from "react";
import { Link } from "react-router-dom";

const LeftCategory = ({ course }) => {
  const { title, id } = course;

  // just showing the title here
  return (
    <div className="mt-4 text-center">
      <Link className=" text-white fs-5 fw-semi-bold" to={`/course/${id}`}>
        <li className="fs-5" style={{ listStyle: "none" }}>
          {title}
        </li>
      </Link>
    </div>
  );
};

export default LeftCategory;
