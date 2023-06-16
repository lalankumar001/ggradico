import React from "react";
import {
  FaRegCopyright,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMapPin, FiPhoneForwarded, FiMail } from "react-icons/fi";
import { MdWhatsapp } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="mx-4">
          <div className="row">
            {/* Fist Colom items here */}
            <div className="col-md-6 col-lg-4 col-12 ft-1">
              <h3>
                <span className="text-danger">GRADICO</span>GLOBAL PVT.LTD
              </h3>
              <p>
                {" "}
                Join us on this exhilarating journey as we revolutionize the way
                businesses connect, engage, and thrive in the digital and crypto
                landscape.
              </p>
              <div className="footer-icons">
                <i className="fa-brands fa-facebook">
                  <FaFacebook />{" "}
                </i>
                <i className="fa-brands fa-twitter">
                  <FaTwitter />{" "}
                </i>
                <i className="fa-brands fa-instagram">
                  <FaInstagram />{" "}
                </i>
                <i className="fa-brands fa-linkedin-in">
                  <FaLinkedinIn />{" "}
                </i>
              </div>
            </div>
            {/* Second colom item here */}
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5 className="text-primary fw-semibold">About Company</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Our Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            {/* third colom items here */}
            <div className="col-md-6 col-lg-3 col-12 col-text-center ft-2">
              <h5 className="text-primary fw-semibold">Our Services</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    Website Development
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Website Design
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Search Engine Optimization
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Pay per Click
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Abroad Education Consultancy
                  </a>
                </li>
              </ul>
            </div>
            {/* forth colom itmes here */}
            <div className="col-md-6 col-lg-2 col-12">
              <h5 className="text-primary fw-semibold">Contact Details</h5>
              <p>
                <i className="fa-solid fa-phone-volume">
                  <FiPhoneForwarded />{" "}
                </i>{" "}
                +91 1140631397
              </p>
              <p>
                <i className="fa-solid fa-envelope">
                  <MdWhatsapp />{" "}
                </i>{" "}
                <a
                  href="https://wa.me/9896549691"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  +91 9896549691{" "}
                </a>
              </p>
              <p>
                <i className="fa-solid fa-envelope">
                  <FiMail />{" "}
                </i>{" "}
                <a
                  href="mailto:support@ggradico.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  {" "}
                  support@ggradico.com{" "}
                </a>
              </p>
              <p>
                <i className="fa-solid fa-paper-plane">
                  <FiMapPin />{" "}
                </i>{" "}
                New Delhi, INDIA.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="shadow p-4 w-100 border bg-dark">
        <p className="text-danger text-center fw-bold">
          COPYRIGHT <FaRegCopyright /> 2023 | Gradico Global Managements &
          Services Pvt . Ltd | All Rights Reserved.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
