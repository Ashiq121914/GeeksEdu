import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const RightCourseCard = ({ course }) => {
  const { id, title, image, price, rating } = course;
  //here making card for each particular course
  return (
    <Card className="m-2 p-0 shadow">
      <Card.Img variant="top" className="w-100" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div className="d-flex justify-content-between align-items-center">
          <div className="border border-dark rounded p-1 border-opacity-25">
            <FaStar className="text-warning mb-2 me-1"></FaStar>
            <span>{rating}</span>
          </div>
          <div>{price}</div>
        </div>
        {/* explore course will take user to the details page */}
        <div className="text-center">
          <Link to={`/course/${id}`} className="btn btn-primary mt-4 ">
            Explore Course
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RightCourseCard;
