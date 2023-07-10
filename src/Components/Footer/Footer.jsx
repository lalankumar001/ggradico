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
                 <a href="https://www.facebook.com/profile.php?id=100094073347799&is_tour_dismissed=true" target="_blank"><FaFacebook /></a>
                </i>
                <i className="fa-brands fa-twitter">
                 <a href="https://twitter.com/gradico1797" target="_blank"><FaTwitter /></a>
                </i>
                <i className="fa-brands fa-instagram">
                 <a href="https://instagram.com/ggradicoca?igshid=NGExMmI2YTkyZg==" target="_blank"><FaInstagram /></a>
                </i>
                <i className="fa-brands fa-linkedin">
                 <a href="https://www.linkedin.com/in/gradico-global-1720a3281/" target="_blank"><FaLinkedinIn /></a>
                </i>
              </div>
            </div>
            {/* Second colom item here */}
            <div className="col-md-6 col-lg-3 col-12 ft-2">
              <h5 className="text-primary fw-semibold">About Company</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/about_us">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/testimonials">
                    Testimonial
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/our_team">
                    Our Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Portfolio
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/privacy">
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
                  <a className="" href="/work_web_dev">
                    Website Development
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/work_web_design">
                    Website Design
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/work_smo">
                    Social Media Optimization
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/work_ppc">
                    Pay per Click
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/work_abroad_education">
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
                  href="https://wa.me/886013800"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  +91 9999555517{" "}
                </a>
              </p>
              <p>
                <i className="fa-solid fa-envelope">
                  <FiMail />{" "}
                </i>{" "}
                <a
                  href="mailto:support@gradicoglobal.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-dark"
                >
                  support@gradicoglobal
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
