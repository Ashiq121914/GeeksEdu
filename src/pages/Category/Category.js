import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import LeftCategory from "../LeftCategory/LeftCategory";
import RightCourseCard from "../RightCourseCard/RightCourseCard";

const Category = () => {
  // loading the data
  const courses = useLoaderData();

  return (
    <div>
      <h2 className="text-center fs-1">Courses</h2>
      <Container>
        {/* deviding the row into 2 sections */}
        <Row className="g-2">
          <Col className="border border-dark mt-5 p-3 bg-dark" lg="3">
            {courses.map((course) => (
              <LeftCategory key={course.id} course={course}></LeftCategory>
            ))}
          </Col>
          <Col className="mt-5" lg="8">
            <Row className="g-2 justify-content-center" lg="4" sm="12">
              {courses.map((course) => (
                <RightCourseCard
                  key={course.id}
                  course={course}
                ></RightCourseCard>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
