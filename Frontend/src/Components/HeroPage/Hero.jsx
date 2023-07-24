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
import "swiper/css/autoplay"
import "swiper/css/zoom"
import { useTypewriter } from "react-simple-typewriter";


// All services slider images from assets/landing folder 
import WebDesign from '../../assets/LandingPage/WebDev.png';
import Work from '../../assets/LandingPage/workpermite.png';
import tour from '../../assets/LandingPage/tour.png';
import study from '../../assets/LandingPage/Studyabroad.png';
import Ecomm from '../../assets/LandingPage/Ecomm.png';
import cyberSecurity from '../../assets/LandingPage/cyberSecurity.png';

// Hero page slider images of Destination here from assets/landing  folder
import germany from '../../assets/LandingPage/Germany.png';
import Dubai from '../../assets/LandingPage/Dubai.png';
import Australia from '../../assets/LandingPage/Australia-images.png';
import Canada from '../../assets/LandingPage/Canada-Images.png';
import Ireland from '../../assets/LandingPage/Ireland.png';
import Japan from '../../assets/LandingPage/Newzeland.png'
import singapoore from '../../assets/LandingPage/Singapoor.png';
import Usa from '../../assets/LandingPage/USA-Images.png'

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
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

import {
  MdLocationOn,
} from "react-icons/md";
import {
  BsFillRocketTakeoffFill,
  BsUsbC,
} from "react-icons/bs";
import {
  FaAngleDoubleRight,
} from "react-icons/fa";
// Quries page popup modal on HOme page imported here
import HeroPageModal from "./HeroPageModal";

const Hero = () => {
  
  const [typeEffect] = useTypewriter({
    words: [
      "Website Designing and Development !",
      "Study Abroad !",
      "Tour And Travel !",
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Landing page */}
      <div className="HEROPAGE">
      <div className="position-absolute" data-aos="zoom-in"><HeroPageModal /></div>
        <div className="main-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1">
                <div className="header-text">
                  <span className="fs-2 fw-semibold text-white">
                  <span className="text-info"> <span className="Blinking text-white">"</span> Step into a World of Infinite Possibilities : </span>Where Dreams Transcend into Reality ! <span className="Blinking"> "</span> 
                  </span>
                  <p>
                    <span className="fs-2 text-white">
                      <RiDoubleQuotesL/>
                    </span>
                    Unlock Limitless Possibilities. Empower Your Journey to
                    Success. Seamless Solutions for Growth. Discover, Innovate,
                    Succeed. Experience Excellence in Every Service.
                    Transforming Dreams into Reality. Your Success Starts Here.
                    Unleash Your Potential Today!{" "}
                    <span className="fs-2 text-white">
                      <RiDoubleQuotesR />
                    </span>
                  </p>  
                  <div className="buttons">
                    <div className="big-border-button">
                      <a href="/home">Explore More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- ***** Main Banner Area End ***** --> */}
        {/* Swiperjs start from here for sliding services*/}
        <div className="Landing_page_services shadow">
        <div className="mx-2 p-3">
          <span className="text-info p-5 fw-bold fs-2"><span className="text-white fs-1">Our Offerings</span> {typeEffect}</span>
        </div>
          <Swiper className="mx-5"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            navigation ={true}
            autoplay={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            zoom={true}
          >
            <SwiperSlide>
              {" "}
              <img src={WebDesign} alt="" className="rounded-5 border" width='300' />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={cyberSecurity} alt="" className="rounded-5 border" width='300'/>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Ecomm} alt="" className="rounded-5 border" width='300'/>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={study} alt="" className="rounded-5 border" width='300'/>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={tour} alt="" className="rounded-5 border" width='300'/>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Work} alt="" className="rounded-5 border" width='300'/>
            </SwiperSlide>

            <br />
          </Swiper>
        </div>
      </div>
        {/* Swiperjs end here  */}
        <br />
{/* Destinations Section start form here */}
<div className="p-2">
  <h1 className="fs-1 fw-bold text-center text-dark"><BsUsbC/></h1>
  <h1 className="text-center fw-bold">Destinations</h1>
<Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={10}
            slidesPerView={5}
            navigation={true}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={true}
          >
            <SwiperSlide>
              {" "}
              <img src={germany} alt="" className="rounded" width='300' />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Usa} alt="" className="rounded" width='300'/>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={singapoore} alt="" className="rounded" width='300'/>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Ireland} alt="" className="rounded" width='300' />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Dubai} className="rounded" width='300' />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Japan} alt="" className="rounded" width='300' />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Canada} alt="" className="rounded" width='300' />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Australia} alt="" className="rounded" width='300' />
            </SwiperSlide>
<br />
<br />
          </Swiper>
</div>
{/* Destinations Section end  here */}
      {/* Our Working Process*/}
      <div className="Working_Process">
        <h1 className="text-secondary fw-bold mx-4 p-3">
          Our <span className="text-dark">Working</span> Process
        </h1>
        <div className="p-3">
          <div className="row Working_process_landingpage">
            <h5 className="text-success fs-5 Working_process_Title">
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
              Release <BsFillRocketTakeoffFill className="fs-1 mx-2"/>
            </h5>
            <div className="col shadow rounded">
              <img src={PlaningSvg} alt="svg" />
              <h1 className="text-center fw-bold text-secondary p-3">1
              <br />
             <b className="Working_step_title">Planing</b></h1>
            </div>
            <div className="col shadow rounded">
              <img src={DesigningSvg} alt="svg" />
              <h1 className="text-center fw-bold text-secondary p-3">2
              <br />
              <b className="Working_step_title">Ui Design & Development</b>
              </h1>
            </div>
            <div className="col shadow rounded">
              <img src={OptamizeSvg} alt="svg" />
              <h1 className="text-center fw-bold text-secondary p-3">3
              <br />
              <b className="Working_step_title">Quality Analysis</b>
              </h1>
            </div>
            <div className="col shadow rounded">
              <img src={resultSvg} alt="svg" />
              <h1 className="text-center fw-bold text-secondary p-3">4
              <br />
              <b className="Working_step_title">Result</b></h1>
            </div>
            <div className="col shadow rounded">
              <img src={FeedbacSvg} alt="svg" />
              <h1 className="text-center fw-bold text-secondary p-3">5
              <br />
              <b className="Working_step_title">Client Feedback</b></h1>
            </div>
            <h1 className="Working_step_product_release">Product Release <BsFillRocketTakeoffFill className="fs-1 mx-2"/></h1>
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
