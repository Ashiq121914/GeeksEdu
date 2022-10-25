import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Category = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg="4">this is sidebar</Col>
          <Col lg="8">this is course page</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Category;
