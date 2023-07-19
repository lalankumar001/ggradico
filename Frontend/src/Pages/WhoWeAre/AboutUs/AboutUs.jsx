import React from "react";
import Aboutus from "../../../assets/Aboutus.jpg";

import ContactUs from "../../ContactUs/ContactUs";

import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="AboutUs_bg">
      <div className="mt-5">
        <div>
          <img src={Aboutus} alt="img" width="100%" />
        </div>
        <h1 className="Open_Vacance_Heading container w-50 text-center text-light fw-bold p-4 bg-dark rounded">
          About Us
        </h1>
          {/* About */}
           <div className="p-3 ">
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
        <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
