import React from "react";
import Aboutus from "../../../assets/Aboutus.jpg";

import PlanningImg from "../../../assets/PlaningImg.jpg";
import UiDesignImg from "../../../assets/UiDesign.jpg";
import OptamizeImg from "../../../assets/optamize.jpg";
import ResultImg from "../../../assets/Results.jpg";

import ContactUs from "../../ContactUs/ContactUs";

import "./AboutUs.css";
import OurTeam from "../OurTeam/OurTeam";

const AboutUs = () => {
  return (
    <div>
      <div className="mt-5 bg-primary">
        <div>
          <img src={Aboutus} alt="img" width="100%" />
        </div>
        <h1 className="Open_Vacance_Heading container w-50 text-center text-light fw-bold p-4 bg-dark rounded">
          About Us
        </h1>
        <br />

        <div className="container">
          {/* first row  */}
          <div className="row">
            <div className="col">
              <div className="vision">
                <div className="vision_card">
                  <div className="vision_box">
                    <div className="vision_content">
                      <span className="vision_heading">01</span>
                      <span className="vision_content">Vision </span>
                      <p>
                        {" "}
                        " Our vision is to foster strong client relationships by
                        consistently delivering exceptional solutions and
                        unparalleled service. "
                      </p>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* second row 1 coloumn */}
            <div className="row">
              <div className="col">
                <div className="vision">
                  <div className="vision_card">
                    <div className="vision_box">
                      <div className="vision_content">
                        <span className="vision_heading">02</span>
                        <span className="vision_content">Mission </span>
                        <p>
                          {" "}
                          "Our mission is to revolutionize industries by
                          leveraging technology and creativity, pushing
                          boundaries and redefining what's possible."
                        </p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*2 nd row 2 nd colomn  */}
              <div className="col">
                <div className="vision">
                  <div className="vision_card">
                    <div className="vision_box">
                      <div className="vision_content">
                        <span className="vision_heading">03</span>
                        <span className="vision_content">Values </span>
                        <p>
                          {" "}
                          "We strive to be a catalyst for change, guiding
                          businesses towards sustainable success by embracing
                          digital innovation and harnessing its full potential."
                        </p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About  */}
        <hr />
        <div className="bg-danger p-4">
          <h1 className="text-dark fw-bold p-4 mt-3">
            <span className=" text-decoration-underline fs-1 fw-bold">Ab</span>
            out
          </h1>
          <span className="text-dark fw-semibold">
            {" "}
            <p className="mx-5 my-2">
             " At Gradico global Management and Services Pvt.Ltd , we understand the demands of today's fast-paced
              world, where efficiency and productivity are paramount. That's why
              we have assembled a team of skilled professionals who possess a
              diverse range of talents and expertise. Whether it's project
              management, administrative support, creative design, or technical
              assistance, we have the skills and resources to handle it all. "
            </p>
          </span>
        </div>
        {/* Our Working Process */}
        <div className="Working_process bg-primary">
          <h1 className="text-white text-center p-4 fw-bold">
            Our Working Process
          </h1>
          <div className="Planing">
            <img src={PlanningImg} alt="" width="50%" />{" "}
            <span className="btn btn-dark mx-2 fs-1">01</span>
          </div>
          <div className="Designing  rounded">
            {" "}
            <img src={UiDesignImg} alt="" width="55%" />{" "}
            <span className="btn btn-dark mx-2 fs-2">02</span>{" "}
          </div>
          <div className="Optamize  rounded">
            {" "}
            <img src={OptamizeImg} alt="" width="62%" />{" "}
            <span className="btn btn-dark mx-2 fs-3">03</span>
          </div>
          <div className="Result  rounded">
            {" "}
            <img src={ResultImg} alt="" width="78%" />{" "}
            <span className="btn btn-dark mx-2 fs-4">04</span>
          </div>
        </div>
        <br />
        <br />
      </div>
      <hr />
      {/* Ourteam page */}
      <div>
        <OurTeam />
      </div>
    </div>
  );
};

export default AboutUs;
