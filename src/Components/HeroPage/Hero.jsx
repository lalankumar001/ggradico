import React from "react";
import "./Hero.css";
import Services from "../Services/Services";

const Hero = () => {
  return (
    <div>
      <div className="mt-5">
      <Services />
      </div>
      <div className="container text-center mt-5">
        {/* First row  */}
        <div className="row">
          <div className="col-5 container text-center fs-3 mt-1 p-4 bg-info rounded ">
            <span className="fw-bold">Website Development</span>
          </div>
          <div className="row mt-2 gap-3 mx-1">
            <div className="col  text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Wordpress Web Development</span>
            </div>
            <div className="col text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Custom Web Development</span>
            </div>
            <div className="col  text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">CMS Web Development</span>
            </div>
            <div className="col text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">eCommerce Web Development</span>
            </div>
          </div>
        </div>
        {/* Second row of Services  */}
        <div className="row">
          <div className="row mt-2 gap-3 mx-1">
            <div className="col  text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Web Design</span>
            </div>
            <div className="col text-center mt-1 p-4 bg-info rounded ">
              <div className="dropdown">
                <button
                  className="btn btn- dropdown-toggle fw-semibold"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Website Converting
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      PSD / Figma to HTML
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      PSD / Figma to Bootstrap
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      PSD / Figma to Wordpress
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      PSD / Figma to Reactjs
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col  text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Static Website Design</span>
            </div>
            <div className="col text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Dynamic Website Design</span>
            </div>
          </div>
        </div>

        {/* Third row of Services  */}
        <div className="row">
          <div className="row mt-2 gap-3 mx-1">
            <div className="col  text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">eCommerce Website Design</span>
            </div>
            <div className="col text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Mobile Website Design</span>
            </div>
            <div className="col  text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Banner Design</span>
            </div>
            <div className="col text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Graphic Design</span>
            </div>
          </div>
        </div>

        {/* Forth row of Services  */}
        <div className="row">
          <div className="row mt-2 gap-3 mx-1">
            <div className="col  text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Logo Design</span>
            </div>
            <div className="col text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Website Maintenance Services</span>
            </div>
            <div className="col  text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Static Website Design</span>
            </div>
            <div className="col text-center mt-1 p-4 bg-info rounded ">
              <span className="fw-semibold">Dynamic Website Design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
