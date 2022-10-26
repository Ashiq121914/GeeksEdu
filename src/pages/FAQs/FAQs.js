import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQs = () => {
  return (
    <Accordion className="container mt-5" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Do you support Refund?</Accordion.Header>
        <Accordion.Body>No, We don't usually do any refund</Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How can i Contact you?</Accordion.Header>
        <Accordion.Body>
          Please contact us in this mail if you have any query:
          ashiq1219@gmail.com
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FAQs;
