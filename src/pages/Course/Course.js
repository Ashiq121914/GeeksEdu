import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaDownload, FaStar } from "react-icons/fa";

import Pdf from "react-to-pdf";

const Course = () => {
  const course = useLoaderData();
  const { id, title, image, description, course_overview, price, rating } =
    course;
  console.log(course);

  // for download pdf
  const ref = React.createRef();
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [11, 8],
  };

  return (
    <div
      // for printing

      className="container text-center"
    >
      <h2 className="d-inline-block me-4 my-4 fw-bold">{title}</h2>
      {/* button for printing*/}
      <Pdf
        targetRef={ref}
        filename="Course-details.pdf"
        options={options}
        x={0.5}
        y={0.5}
        scale={0.7}
      >
        {({ toPdf }) => (
          <button onClick={toPdf}>
            <FaDownload></FaDownload>
          </button>
        )}
      </Pdf>
      <img className="w-50 my-4 shadow-lg d-block mx-auto" src={image} alt="" />

      <div ref={ref}>
        <div>
          <p className="fs-4">Course Price: {price}</p>
          <p className="fs-4">
            Course Rating:
            <FaStar className="text-warning mb-2 me-1 ms-2"></FaStar>
            <span>{rating}</span>
          </p>
        </div>

        <div className="border border-dark-50 p-3 fs-5 rounded shadow">
          <p className="fs-2">Description</p>
          <p>{description}</p>

          <p>{course_overview}</p>
        </div>

        <Link className="text-white " to={`/checkout/${id}`}>
          <button className="btn btn-lg btn-primary mb-5 mt-4">
            Get premium access
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Course;
