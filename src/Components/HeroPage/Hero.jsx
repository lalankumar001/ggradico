import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTypewriter } from "react-simple-typewriter";
import img12 from "../../assets/featured-01.jpg";

// Hero page slider images here from assets folder
import WebDevImg from "../../assets/HeroPageImg/WebDev.jpg";
import WebDesignImg from "../../assets/HeroPageImg/WebsiteDesingin.jpg";
import CyberSecImg from "../../assets/HeroPageImg/cyber.jpg";
import abroadeduImg from "../../assets/HeroPageImg/abroadedu.jpg";

// Working process images from assets/heropages folder
import PlaningSvg from "../../assets/HeroPageImg/Discussion.svg";
import DesigningSvg from "../../assets/HeroPageImg/Design.svg";
import OptamizeSvg from "../../assets/HeroPageImg/Optamize.svg";
import resultSvg from "../../assets/HeroPageImg/result.svg";
import FeedbacSvg from "../../assets/HeroPageImg/Feedback.svg";

// Cities Map Img
import Map from "../../assets/HeroPageImg/CitiesMap.png";

import ContactUs from "../../Pages/ContactUs/ContactUs";
import "./Hero.css";

// React icons
import { ImProfile } from "react-icons/im";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import {
  MdSecurity,
  MdOutlineLanguage,
  MdLockOpen,
  MdOutlineAdb,
  MdLocationOn,
} from "react-icons/md";
import {
  BsWordpress,
  BsPcDisplay,
  BsGlobe,
  BsFiletypeHtml,
  BsEyeFill,
  BsCast,
  BsFillAirplaneEnginesFill,
  BsFillRocketTakeoffFill,
} from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import {
  FaColumns,
  FaBoxTissue,
  FaRegNewspaper,
  FaQuoteLeft,
  FaQuoteRight,
  FaFigma,
  FaPeopleCarry,
  FaUniversity,
  FaFunnelDollar,
  FaPassport,
  FaAngleDoubleRight,
} from "react-icons/fa";
// Quries page popup modal on HOme page imported here
import HeroPageModal from "./HeroPageModal";

const Hero = () => {
  
  const [typeEffect] = useTypewriter({
    words: [
      "Website Designing and Development !",
      "Study Abroad !",
      "Tour And Traivel !",
      "Ecommerce !",
      "Cyber Security Services !",
      "Immigration Permanent residency Work permit!",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40,
  });
  const [displayText, setDisplayText] = useState([]);
  const MapHandler = () => {
    if (displayText.length > 0) {
      setDisplayText([]);
    } else {
      setDisplayText([
        "Address : 1/123 First Floor Shankar Road  Old Rajendar Nagar New Delhi 110060 , Gmail: support@ggradico.com Mob : +91 1140631397",
      ]);
    }
  };

  return (
    <div>
      {/* Hero page Popup Modal start here */}
      {/* <div className="position-relative  container w-75"  data-aos="zoom-in">
      <div className="position-absolute p-5">
      <span><HeroPageModal /></span>
      </div>
      </div>   */}
      {/* popup modal end here */}
      {/* Landing page */}
      <div className="BlogFile">
        <div className="LandingPage_nav">
          <img
            src={img12}
            alt="img"
            width="50"
            data-aos="fade-right"
            data-aos-anchor="#example-anchor"
            data-aos-offset="700"
            data-aos-duration="1000"
          />
          <ul
            className="container w-25 nav nav-pills nav-fill p-2 small  rounded-5 shadow-sm"
            id="pillNav2"
            role="tablist"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="700"
            data-aos-duration="1000"
          >
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active rounded-5"
                id="home-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="true"
              >
                Home
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link rounded-5"
                id="contact-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Blog
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link rounded-5"
                id="contact-tab2"
                data-bs-toggle="tab"
                type="button"
                role="tab"
                aria-selected="false"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
        <div class="main-banner">
          <div class="container">
            <div class="row">
              <div class="col-lg-10 offset-lg-1">
                <div class="header-text">
                  <span className="fs-2 fw-semibold text-white">
                  <span className="text-info"> <span className="Blinking">"</span> Step into a World of Infinite Possibilities : </span> Where Dreams Transcend into Reality !<span className="Blinking"> "</span> 
                  </span>
                  <p data-aos="zoom-in">
                    <span className="fs-2 text-secondary ">
                      <RiDoubleQuotesL className="Blinking"/>
                    </span>{" "}
                    Unlock Limitless Possibilities. Empower Your Journey to
                    Success. Seamless Solutions for Growth. Discover, Innovate,
                    Succeed. Experience Excellence in Every Service.
                    Transforming Dreams into Reality. Your Success Starts Here.
                    Unleash Your Potential Today!{" "}
                    <span className="fs-2 text-secondary">
                      <RiDoubleQuotesR  className="Blinking"/>
                    </span>
                  </p>
                  <div class="buttons">
                    <div class="big-border-button">
                      <a href="contests.html">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ***** Main Banner Area End ***** --> */}
        {/* Swiperjs start from here for sliding services*/}
        <div className="container Landing_page_services">
        <div className="mx-3 p-3">
          <span className="text-primary p-5 fw-bold fs-2">Our Offerings {typeEffect}</span>
        </div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={100}
            slidesPerView={3}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={true}
          >
            <SwiperSlide>
              {" "}
              <img src={img12} alt="" className="rounded" />
            </SwiperSlide>
            <div className="Img_hover">
              <ul>
                <li>
                  <span>Contest Winner:</span> Vincent Adam
                </li>
                <li>
                  <span>Contest Author:</span> Anthony Soft
                </li>
                <li>
                  <span>Awards:</span> $1,200 + Canon EOS R10
                </li>
              </ul>
            </div>
            <SwiperSlide>
              {" "}
              <img src={img12} alt="" className="rounded" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={img12} alt="" className="rounded" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={img12} alt="" className="rounded" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={img12} alt="" className="rounded" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={img12} alt="" className="rounded" />
            </SwiperSlide>
          </Swiper>
        </div>
        {/* Swiperjs end here  */}
        <br />
        <br />
        <br />
        {/* type writer from typewrite */}
        <div>
          <span className="text-info p-5 fw-bold fs-2">i'm a {typeEffect}</span>
        </div>
      </div>
      {/* Our Working Process*/}
      <div className="Working_Process">
        <h1 className="text-secondary fw-bold mx-4 p-3">
          Our <span className="text-dark">Working</span> Process
        </h1>
        <div className="p-3">
          <div className="row">
            <h5 className="text-success fs-5">
              <span className="spinner-grow" role="status"></span> Planning{" "}
              <span className="fs-4">
                <FaAngleDoubleRight />
                <FaAngleDoubleRight />
              </span>
              <span className="spinner-grow" role="status"></span> Ui Design &
              Development{" "}
              <span className="fs-4">
                <FaAngleDoubleRight />
                <FaAngleDoubleRight />
              </span>
              <span className="spinner-grow" role="status"></span> Quality
              Analysis
              <span className="fs-4">
                <FaAngleDoubleRight />
                <FaAngleDoubleRight />
              </span>
              <span className="spinner-grow" role="status"></span> Result{" "}
              <span className="fs-4">
                <FaAngleDoubleRight />
                <FaAngleDoubleRight />
              </span>
              <span className="spinner-grow" role="status"></span> Client
              Feedback
              <span className="fs-4">
                <FaAngleDoubleRight />
                <FaAngleDoubleRight />
              </span>
              <span className="spinner-grow" role="status"></span>Product
              Release <BsFillRocketTakeoffFill />
            </h5>
            <div className="col shadow rounded">
              <img src={PlaningSvg} alt="svg" />
              <h1 className="text-center fw-bold text-secondary p-3">1</h1>
            </div>
            <div className="col shadow rounded">
              <img src={DesigningSvg} alt="svg" />
              <h1 className="text-center fw-bold text-secondary p-3">2</h1>
            </div>
            <div className="col shadow rounded">
              <img src={OptamizeSvg} alt="svg" />
              <h1 className="text-center fw-bold text-secondary p-3">3</h1>
            </div>
            <div className="col shadow rounded">
              <img src={resultSvg} alt="svg" />
              <h1 className="text-center fw-bold text-secondary p-3">4</h1>
            </div>
            <div className="col shadow rounded">
              <img src={FeedbacSvg} alt="svg" />
              <h1 className="text-center fw-bold text-secondary p-3">5</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Find Us / our branch*/}
      <h1 className="text-secondary fw-bold mx-4 p-4">
        Find <span className="text-dark text-decoration-underline">Us</span>
      </h1>
      <div className="FindUs">
        <div className="container">
          <div className="row">
            <div className="col p-5 mt-3">
              <button
                className="btn btn-dark  fw-semibold w-75 shadow"
                onClick={MapHandler}
              >
                {" "}
                New Delhi [ Head Office ] <MdLocationOn />
              </button>
            </div>
            <div className="col">
              <img src={Map} alt="" />
              {/* display text when we click on button  */}
              <div className="Office_address">
                <p className="text-info card w-50 border">{displayText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contactus page */}
      <h1 className="text-secondary fw-bold mx-4 p-3">
        Need any <span className="text-dark">Help</span> Contact Us
      </h1>
      <ContactUs />
    </div>
  );
};

export default Hero;
