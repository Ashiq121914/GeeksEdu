import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import "./Home.css";

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
            style={{
              top: "50%",
              transform: "translateY(-50%)",
              bottom: "initial",
            }}
          >
            <div className="bg-dark bg-opacity-25 py-5 rounded w-75 mx-auto">
              <h1 className="fw-bold" style={{ fontSize: "70px" }}>
                Better Education for a better World
              </h1>
              <p className="fs-5">limitless learning, more possibilities</p>
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
            <div className="bg-dark bg-opacity-25 py-5 rounded w-75 mx-auto">
              <h1 className="fw-bold" style={{ fontSize: "70px" }}>
                Get personalized recommendations
              </h1>
              <p className="fs-5">GeeksEdu is here all the time</p>
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
            <div className="bg-dark bg-opacity-25 py-5 rounded w-75 mx-auto">
              <h1 className="fw-bold" style={{ fontSize: "70px" }}>
                ONLINE COURSES TO LEARN
              </h1>
              <p className="fs-5">Own your future learning new skills online</p>
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
    </div>
  );
};

export default Home;
