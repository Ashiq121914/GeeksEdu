import React from "react";
import Accordion from "react-bootstrap/Accordion";

// used accordion here
const FAQs = () => {
  return (
    <Accordion className="container mt-5" defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          01. Is there any number to contact for query?
        </Accordion.Header>
        <Accordion.Body>
          You may call us on our toll-free number: +91-7838223507 or Drop us an
          email at courses@geeksEdu.org
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          02. Do we have doubt support in this program?
        </Accordion.Header>
        <Accordion.Body>
          You may get additional feature of doubt support. While purchasing this
          course, click on "Get premium Access" for Doubt Support and
          Assistance.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>
          03. How can I register for the course?
        </Accordion.Header>
        <Accordion.Body>
          You need to sign up for the course. After signing up, you need to pay
          when the payment link opens.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          04. What type of certificate will be offered in this program?
        </Accordion.Header>
        <Accordion.Body>
          Once the course is completed. You'll be getting a course completion
          certificate.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          05.Will the course content be available after the course end date??
        </Accordion.Header>
        <Accordion.Body>
          Course content comes with lifetime validity.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>
          06. Can I make the payment through PayPal??
        </Accordion.Header>
        <Accordion.Body>
          Yes. Mail us with your details at courses@geeksEdu.org
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FAQs;
