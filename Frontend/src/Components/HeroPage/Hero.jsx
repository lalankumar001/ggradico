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
import "swiper/css/autoplay";
import "swiper/css/zoom";

// Hero page slider images of Destination here from assets/landing  folder
import germany from "../../assets/LandingPage/Germany.png";
import Dubai from "../../assets/LandingPage/Dubai.png";
import Australia from "../../assets/LandingPage/Australia-images.png";
import Canada from "../../assets/LandingPage/Canada-Images.png";
import Ireland from "../../assets/LandingPage/Ireland.png";
import Japan from "../../assets/LandingPage/Newzeland.png";
import singapoore from "../../assets/LandingPage/Singapoor.png";
import Usa from "../../assets/LandingPage/USA-Images.png";

// All images imported here
import HeroImg from "../../assets/HeroPageImg/Hero.png";

// University IMages imported here
import University01 from "../../assets/HeroPageImg/berkeley.png";
import University02 from "../../assets/HeroPageImg/Bristol.jpg";
import University03 from "../../assets/HeroPageImg/Mc.jpg";
import University04 from "../../assets/HeroPageImg/Monash.png";
import University05 from "../../assets/HeroPageImg/nsu.jpg";
import University06 from "../../assets/HeroPageImg/Queensland.png";
import University07 from "../../assets/HeroPageImg/Technical.jpg";
import University08 from "../../assets/HeroPageImg/unsw.png";

import BestDestinationImg from "../../assets/HeroPageImg/OurBestDestination.svg";
// countries Images
import AustraliaIcon from "../../assets/HeroPageImg/CountryIcons/Australia.png";
import CanadaIcon from "../../assets/HeroPageImg/CountryIcons/canada.png";
import ChainaIcon from "../../assets/HeroPageImg/CountryIcons/China.png";
import GermanyIcon from "../../assets/HeroPageImg/CountryIcons/Germany.png";
import IndiaIcon from "../../assets/HeroPageImg/CountryIcons/india.png";
import JapanIcon from "../../assets/HeroPageImg/CountryIcons/japan.png";
import NepalIcon from "../../assets/HeroPageImg/CountryIcons/nepal.png";
import RussiaIcon from "../../assets/HeroPageImg/CountryIcons/Russia.png";
import SingaporeIcon from "../../assets/HeroPageImg/CountryIcons/Singapore.png";
import SwitzerlandIcon from "../../assets/HeroPageImg/CountryIcons/Switzerland.png";
import UKIcon from "../../assets/HeroPageImg/CountryIcons/Uk.png";
import UsaIcon from "../../assets/HeroPageImg/CountryIcons/usa.png";

// Cities Map Img
import Map from "../../assets/HeroPageImg/CitiesMap.png";
import ContactUs from "../../Pages/ContactUs/ContactUs";
import "./Hero.css";

// React icons
import { FaUserGraduate, FaUniversity, FaCcVisa } from "react-icons/fa";
import {
  MdWhatsapp,
  MdWorkHistory,
  MdLocationOn,
  MdOutlineNaturePeople,
  MdInput,
} from "react-icons/md";
import { BsUsbC, BsLayersFill, BsArrowRight } from "react-icons/bs";

// Quries page popup modal on HOme page imported here
import HeroPageModal from "./HeroPageModal";

const Hero = () => {
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
        <div className="position-absolute" data-aos="zoom-in">
          <HeroPageModal />
        </div>
        {/* Study abroad and visa consultancy */}
        <div className="w-100 p-4 HeroPage_heroSection">
          <div className="row">
            <div className="col Hero_left_side">
              <h1 className=" HeroPage_title">
                Study Around the Globe in Few Steps
                <br />
                More than 700+ Universities including Usa , Canada , UK and Australia etc.
              </h1>
              <p className="fs-6 mx-5 my-2 text-light">
                We at Gradiglobal Global Education, are committed to assisting
                students in realizing their desire to pursue a course in any
                International Destination. We have been providing comprehensive
                assistance in the Study Abroad process, right from doing Student
                Profile analysis to completing Post Arrival support.
              </p>
              <div className="mt-5 mx-5">
                <Link to="/home" className="btn btn-dark p-3 Explore_btn">
                  Explore More
                </Link>{" "}
                &nbsp;
                <a
                  href="https://wa.me/9350634931"
                  target="_blank"
                  className="btn btn-warning p-3 Enquire_btn"
                >
                  Enquire Now <MdWhatsapp className="fs-5" />
                </a>
              </div>
            </div>
            <div className="col mt-5">
              <img
                src={HeroImg}
                alt="Img"
                width="100%"
                height="113%"
                className="HeroImg"
              />
            </div>
          </div>
        </div>
         {/*TieUp University */}
         <div className="container text-center">
          <h1 className="text-center mt-5 fw-semibold">
            Gradico Global eminent university tie-ups
          </h1>
          <p className="text-center">
            We represent 66 of World’s Top 300 Universities according to QS
            World Rankings 2024
          </p>
          <div className="row">
            <div className="col">
              <img
                src={University01}
                alt="img"
                width="100%"
                data-aos="zoom-in-up"
              />
            </div>
            <div className="col">
              <img
                src={University02}
                alt="img"
                width="100%"
                data-aos="zoom-in-up"
              />
            </div>
            <div className="col">
              <img
                src={University03}
                alt="img"
                width="100%"
                data-aos="zoom-in-up"
              />
            </div>
            <div className="col">
              <img
                src={University04}
                alt="img"
                width="100%"
                data-aos="zoom-in-up"
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <img
                src={University05}
                alt="img"
                width="100%"
                data-aos="zoom-in-up"
              />
            </div>
            <div className="col">
              <img
                src={University06}
                alt="img"
                width="100%"
                data-aos="zoom-in-up"
              />
            </div>
            <div className="col">
              <img
                src={University07}
                alt="img"
                width="100%"
                data-aos="zoom-in-up"
              />
            </div>
            <div className="col">
              <img
                src={University08}
                alt="img"
                width="100%"
                data-aos="zoom-in-up"
              />
            </div>
          </div>
          <span className="btn btn- text-danger mt-4">
            More Universities <MdInput />{" "}
          </span>
        </div>
        <div className="text-center After_hero_section">
          <h1 className="fw-bold text-center Our_offering_title">
            Our Offerings & Services
          </h1>
          <p className="text-center fs-5 text-primary">
            "Unlock Your Global Potential: Empowering Dreams, Inspiring Futures"
          </p>
          <div className="container">
            {/* first row  */}
            <div className="row">
              {/* second row 1 coloumn */}
              <div className="row">
              <div className="col" data-aos="fade-right">
                <div className="vision">
                  <div className="vision_card">
                    <div className="vision_box">
                      <div className="vision_content">
                        <span className="vision_heading">
                          <FaUserGraduate />
                        </span>
                        <span className="vision_content fs-3">
                          Study Abroad{" "}
                        </span>
                        <p>
                          "Expand your horizons, gain a world-class education,
                          and empower your future with us! Study abroad with
                          excellence, unlocking limitless possibilities."
                        </p>
                        <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col" data-aos="fade-right">
                <div className="vision">
                  <div className="vision_card">
                    <div className="vision_box">
                      <div className="vision_content">
                      <span className="vision_heading">
                            <FaUniversity />
                          </span>
                          <span className="vision_content">
                            University Admissions
                          </span>
                          <p>
                            "Let us guide your university selection, ensuring
                            the perfect match for your goals. Explore our
                            expertise and discover the ideal path to success
                            abroad."
                          </p>
                          <a href="#">Read More</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <div className="col" data-aos="fade-right">
                  <div className="vision">
                    <div className="vision_card">
                      <div className="vision_box">
                        <div className="vision_content">
                        <span className="vision_heading">
                              <MdOutlineNaturePeople />
                            </span>
                            <span className="vision_content">Immigiration</span>
                            <p>
                              "Experience seamless immigration services with us.
                              Let our immigration experts handle the
                              complexities, making your transition to a new
                              country stress-free and fulfilling."
                            </p>
                            <a href="#">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col" data-aos="fade-right">
                  <div className="vision">
                    <div className="vision_card">
                      <div className="vision_box">
                        <div className="vision_content">
                          <span className="vision_heading">
                            <FaCcVisa />
                          </span>
                          <span className="vision_content">
                            Visa Consultancy
                          </span>
                          <p>
                            "Navigate the visa process effortlessly with our
                            expert consultancy. Trust our dedicated team to
                            ensure a smooth and successful visa application for
                            your study abroad journey."
                          </p>
                          <a href="#">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*2 nd row 2 nd colomn  */}
                <div className="col" data-aos="fade-right">
                  <div className="vision">
                    <div className="vision_card">
                      <div className="vision_box">
                        <div className="vision_content">
                          <span className="vision_heading">
                            <MdWorkHistory />
                          </span>
                          <span className="vision_content">Work Permit</span>
                          <p>
                            "Unlock international career opportunities with our
                            work permit assistance. Trust our experienced team
                            to pave the way for your professional success
                            abroad."
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
        </div>
       
        <div className="bg-light p-3">
          <div className="container OurTopDestinations">
            <div className="row">
              <div className="col">
                <img src={BestDestinationImg} alt="desImg" width="100%" />
              </div>
              <div className="col">
                <h1 className="mt-5 fw-semibold">
                  Our Multi Country Advantage
                </h1>
                <p className="mt-3">
                  "Study abroad in top destinations like UK, US, and Canada.
                  Experience world-class education and enriching cultural
                  exposure. Achieve your academic goals with our expert
                  guidance."
                </p>
                <div className="container row text-center text-dark fw-bold">
                  <div className="col">
                    <p>
                      <BsLayersFill /> Study in top destinations (UK, US,
                      Canada)
                    </p>
                    <p>
                      <BsLayersFill /> Cultural exposure and personal growth
                    </p>
                    <p>
                      <BsLayersFill /> Global recognition and career
                      opportunities
                    </p>
                  </div>
                  <div className="col">
                    <p>
                      <BsLayersFill /> World-class education and diverse
                      programs
                    </p>
                    <p>
                      <BsLayersFill /> Language proficiency and communication
                      skills
                    </p>
                    <p>
                      <BsLayersFill /> Expert guidance and support
                    </p>
                  </div>
                </div>
                <div className="Countries">
                  <div className="row text-center p-5 ">
                    <div className="col">
                      <img src={AustraliaIcon} alt="Img" title="Austali" />
                    </div>
                    <div className="col">
                      <img src={CanadaIcon} alt="Img" title="Canada" />
                    </div>
                    <div className="col">
                      <img src={ChainaIcon} alt="Img" title="Chaina" />
                    </div>
                    <div className="col">
                      <img src={GermanyIcon} alt="Img" title="Germany" />
                    </div>
                    <div className="col">
                      <img src={IndiaIcon} alt="Img" title="India" />
                    </div>
                    <div className="col">
                      <img src={UsaIcon} alt="Img" title="India" />
                    </div>
                  </div>
                  <div className="row text-center Countries_second_row">
                    <div className="col">
                      <img src={JapanIcon} alt="Img" title="Japan" />
                    </div>
                    <div className="col">
                      <img src={NepalIcon} alt="Img" title="Nepal" />
                    </div>
                    <div className="col">
                      <img src={RussiaIcon} alt="Img" title="Russia" />
                    </div>
                    <div className="col">
                      <img src={SingaporeIcon} alt="Img" title="Singapore" />
                    </div>
                    <div className="col">
                      <img src={SwitzerlandIcon} alt="Img" title="Switzerlan" />
                    </div>
                    <div className="col">
                      <img src={UKIcon} alt="Img" title="Switzerlan" />
                    </div>
                    <span className="text-center  p-5 Explore_countries">
                      <Link
                        to="/home"
                        className="text-decoration-none text-danger fs-5 Explore_countries"
                      >
                        Explore Countries <BsArrowRight />
                      </Link>{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Destinations Section start form here */}
        <div className="p-2">
          <h1 className="fs-1 fw-bold text-center text-dark">
            <BsUsbC />
          </h1>
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
              <img src={germany} alt="" className="rounded" width="300" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Usa} alt="" className="rounded" width="300" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={singapoore} alt="" className="rounded" width="300" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Ireland} alt="" className="rounded" width="300" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Dubai} className="rounded" width="300" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Japan} alt="" className="rounded" width="300" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Canada} alt="" className="rounded" width="300" />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img src={Australia} alt="" className="rounded" width="300" />
            </SwiperSlide>
            <br />
            <br />
          </Swiper>
        </div>

        {/* Destinations Section end  here */}
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
    </div>
  );
};

export default Hero;
