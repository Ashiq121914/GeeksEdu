import React, { useRef } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload } from "react-icons/fa";

import { useReactToPrint } from "react-to-print";

const Course = () => {
  const course = useLoaderData();
  const { id, title, image, description, course_overview } = course;
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
        <img className="w-50 my-4" src={image} alt="" />
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
