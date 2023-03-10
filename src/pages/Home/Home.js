import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";

// just added the react bootstrap carousel
const Home = () => {
  return (
    <div className="">
      <Carousel>
        <Carousel.Item>
          <img
            style={{ height: "700px" }}
            className="d-block w-100 img-fluid "
            src={require("./asset/one.jpg")}
            alt="First slide"
          />
          <Carousel.Caption
            // this style to take the caption in the middle of the page
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              bottom: "initial",
            }}
          >
            <div className="bg-dark bg-opacity-25 py-5 rounded mx-auto ">
              <h1 className="fw-bold display-1 text-center">
                Better Education for a better World
              </h1>
              <p className="fs-4">limitless learning, more possibilities</p>
              <button className="btn btn-warning btn-lg btn-block mt-4">
                {/* button to take to the courses */}
                <Link
                  to="/category"
                  className="text-decoration-none text-dark fw-bold"
                >
                  Go to Courses Now
                </Link>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "700px" }}
            className="d-block w-100  img-fluid"
            src={require("./asset/two.jpg")}
            alt="Second slide"
          />

          <Carousel.Caption
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              bottom: "initial",
            }}
          >
            <div className="bg-dark bg-opacity-25 py-5 rounded mx-auto ">
              <h1 className="fw-bold display-1 text-center">
                Learn From the best
              </h1>
              <p className="fs-4">limitless learning, more possibilities</p>
              <button className="btn btn-warning btn-lg btn-block mt-4">
                <Link
                  to="/category"
                  className="text-decoration-none text-dark fw-bold"
                >
                  Go to Courses Now
                </Link>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "700px" }}
            className="d-block w-100 img-fluid"
            src={require("./asset/three.jpg")}
            alt="Third slide"
          />

          <Carousel.Caption
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              bottom: "initial",
            }}
          >
            <div className="bg-dark bg-opacity-25 py-5 rounded mx-auto ">
              <h1 className="fw-bold display-1 text-center">
                Learn on your schedule
              </h1>
              <p className="fs-4">Own your future learning new skills online</p>
              <button className="btn btn-warning btn-lg btn-block mt-4">
                <Link
                  to="/category"
                  className="text-decoration-none text-dark fw-bold"
                >
                  Go to Courses Now
                </Link>
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div>
        <AboutUs></AboutUs>
      </div>
    </div>
  );
};

export default Home;
