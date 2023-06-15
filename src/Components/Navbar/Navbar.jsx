import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/GradicoLogo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-warning shadow fixed-top">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand"></Link>
          <Link to="/home">
            <img src={Logo} alt="Logo" width='140' height='90' />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon shadow"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-5 fw-semibold fs-4 pt-3">  
                <li className="nav-item">
                  <a
                    activeClassName="menu_active"
                    className="nav-link text-dark"
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn- dropdown-toggle fs-5"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Who We Are
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to='/about_us' className="dropdown-item" href="#">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to='/our_team' className="dropdown-item" href="#">
                            Our team
                          </Link>
                        </li>
                        <li>
                          <Link to='/testimonials' className="dropdown-item" href="#">
                            Our Testimonials
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <Link
                    activeClassName="menu_active"
                    className="nav-link text-dark"
                    to="/About"
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn- dropdown-toggle fs-5"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        What We Do
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Web Development
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                          Custom Web Development
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Web Designing
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Digital Marketing
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Social Media Optimization 
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                           Pay Per Click (PPC)
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Cyber Security & Ethical Hacking
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                          IT Consultant Services
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                          Abroad Education Consultancy
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                         Data Recovery
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link
                    activeClassName="menu_active"
                    className="nav-link text-dark"
                    to="/Contact"
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn- dropdown-toggle fs-5"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Courses
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            Cyber Security
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Ethical Hacking
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                          Data Recovery
                          </a>
                        </li>
                      </ul>
                    </div>
                  </Link>
                </li>

                <li className="nav-item btn btn- fs-5">
                 <Link  to='/careers'
                    activeClassName="menu_active"
                    className="nav-link"
                  >
                    Careers
                   </Link>
                </li>
                <li className="nav-item btn btn- fs-5">
                 <Link  to='/blog'
                    activeClassName="menu_active"
                    className="nav-link"
                  >
                    Blog
                   </Link>
                </li>

                
                <li className="nav-item d-grid gap-3 btn btn-dark fw-semibold mb-2">
                  <Link
                    activeClassName="menu_active"
                    className="nav-link text-info"
                    to="/Contact"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
