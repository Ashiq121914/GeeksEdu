import React from "react";
import "./Footer.css";
import logo from "../../../asset/logo.png";

const Footer = () => {
  return (
    <div>
      <div className="mt-5">
        <footer className="bg-dark text-center text-lg-start text-white mb-0">
          <div className=" p-4">
            <div className="my-4">
              <div
                className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                style={{ width: "250px", height: "250px" }}
              >
                <img
                  src={logo}
                  height="240"
                  alt=""
                  loading="lazy"
                  className="rounded-circle"
                />
              </div>
            </div>
          </div>

          <div className="text-center p-3">
            <p>
              GeeksEdu Industries Ltd.
              <br />© GeeksEdu 2022 Carpentra Inc. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
