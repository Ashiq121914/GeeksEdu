import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload, FaStar } from "react-icons/fa";

import { useReactToPrint } from "react-to-print";

const Course = () => {
  const course = useLoaderData();
  const { id, title, image, description, course_overview, price, rating } =
    course;
  console.log(course);

  // for download pdf
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "course-details",
    onAfterPrint: () => alert("print success"),
  });

  return (
    <div
      // for printing
      ref={componentRef}
      style={{ width: "100%", height: window.innerHeight }}
      className="container text-center"
    >
      <h2 className="d-inline-block me-4 my-4">{title}</h2>
      {/* for printing */}
      <button onClick={handlePrint}>
        <FaDownload></FaDownload>
      </button>
      <div>
        <img className="w-50 my-4 " src={image} alt="" />
        <p className="fs-4">Course Price: {price}</p>
        <p className="fs-4">
          Course Rating:
          <FaStar className="text-warning mb-2 me-1 ms-2"></FaStar>
          <span>{rating}</span>
        </p>
      </div>

      <p>{description}</p>
      <p>{course_overview}</p>

      <Link className="text-white" to={`/checkout/${id}`}>
        <button className="btn btn-lg btn-primary mb-5">
          Get premium access
        </button>
      </Link>
    </div>
  );
};

export default Course;
