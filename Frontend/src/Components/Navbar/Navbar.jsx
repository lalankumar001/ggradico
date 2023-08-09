import React from "react";
import "bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Logo from "../../assets/GglobalLogo.png"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top Navbar_bg">
        <div className="container-fluid">
          <Link to="/home" className="navbar-brand"></Link>
          <Link to="/home">
            <img src={Logo} alt="Logo" width='100%' height='75'/>
          </Link>
          <button
            className="navbar-toggler bg-white shadow rounded-3"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
          <span className='text-danger' ><GiHamburgerMenu /></span>
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
            <div className="offcanvas-body text-center text-danger p-0 gap-0">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 fw-semibold fs-4 ">  
              <li className="nav-item btn btn- fs-6">
                 <Link  to='/home'
                    activeClassName="menu_active"
                    className="nav-link text-white "
                  >
                    Home
                   </Link>
                </li>
                <li className="nav-item">
                  <a
                    activeClassName="menu_active"
                    className="nav-link"
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn- dropdown-toggle fs-6 text-white Responsive_Nav_item"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Who We Are
                      </button>
                      <ul className="dropdown-menu ">
                        <li>
                          <Link to='/about_us' className="dropdown-item " href="#">
                            About Us
                          </Link>
                        </li>
                        <li>
                          <Link to='/blog' className="dropdown-item" href="#">
                            Blog
                          </Link>
                        </li>
                        <li>
                          <Link to='/comming_soon' className="dropdown-item" href="#">
                            Testimonials
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>

                <li className="nav-item">
                  <a
                    activeClassName="menu_active"
                    className="nav-link text-dark"
                    
                  >
                    <div className="dropdown">
                      <button
                        className="btn btn- dropdown-toggle fs-6 text-white Responsive_Nav_item"
                        type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        What We Do
                      </button>
                      <ul className="dropdown-menu">
                        <li>
                          <Link to='/comming_soon' className="dropdown-item" href="#">
                          Abroad Education Consultancy
                          </Link>
                        </li>
                        <li>
                          <Link to='/comming_soon' className="dropdown-item" href="#">
                          University Admissions
                          </Link>
                        </li>
                        <li>
                          <Link to='/comming_soon' className="dropdown-item" href="#">
                          Visa Consultancy
                          </Link>
                        </li>
                        <li>
                          <Link to='/comming_soon' className="dropdown-item" href="#">
                          Work Permit
                          </Link>
                        </li>
                        <li>
                          <Link to='/comming_soon' className="dropdown-item" href="#">
                          Immigiration
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </a>
                </li>

                <li className="nav-item btn btn- fs-6">
                 <Link  to='/comming_soon'
                    activeClassName="menu_active "
                    className="nav-link text-white"
                  >
                    Upcoming Events
                   </Link>
                </li>
                
                <li className="nav-item btn btn- fs-6">
                 <Link  to='/careers'
                    activeClassName="menu_active"
                    className="nav-link text-white"
                  >
                    Careers
                   </Link>
                </li>
                                
                <li className="nav-item btn btn- fs-6">
                 <Link to='/pay'
                    activeClassName="menu_active"
                    className="nav-link text-white"
                  >
                    Make a Payment
                   </Link>
                </li>
                                
                <li className="nav-item d-grid gap-3 btn btn-light fw-semibold mb-2 rounded-pill  Contact_btn">
                  <Link
                    activeClassName="menu_active"
                    className="nav-link text-dark"
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
