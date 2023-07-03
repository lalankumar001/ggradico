
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Hero page slider images here from assets folder
import WebDevImg from "../../assets/HeroPageImg/WebDev.jpg";
import WebDesignImg from "../../assets/HeroPageImg/WebsiteDesingin.jpg";
import CyberSecImg from "../../assets/HeroPageImg/cyber.jpg";
import abroadeduImg from "../../assets/HeroPageImg/abroadedu.jpg";

// Working process images from assets/heropages folder
import PlaningSvg from '../../assets/HeroPageImg/Discussion.svg'
import DesigningSvg from '../../assets/HeroPageImg/Design.svg'
import OptamizeSvg from '../../assets/HeroPageImg/Optamize.svg'
import resultSvg from '../../assets/HeroPageImg/result.svg'
import FeedbacSvg from '../../assets/HeroPageImg/Feedback.svg'

// Cities Map Img
import Map from '../../assets/HeroPageImg/CitiesMap.png'

import ContactUs from '../../Pages/ContactUs/ContactUs'
import "./Hero.css";

// React icons
import { ImProfile } from "react-icons/im";

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
  const [displayText, setDisplayText] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    { image: WebDevImg, text: " We Help Grow Your Business" },
    { image: WebDesignImg, text: "Unlock digital success with Gradico Global" },
    {
      image: CyberSecImg,
      text: "We create custom, brand-focused, and scalable online solutions",
    },
    {
      image: abroadeduImg,
      text: "Trust our expert team to deliver enterprise-ready products tailored to your needs.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const MapHandler = () => {
    if (displayText.length > 0) {
      setDisplayText([]);
    } else {
      setDisplayText(['Address : 1/123 First Floor Shankar Road  Old Rajendar Nagar New Delhi 110060 , Gmail: support@ggradico.com Mob : +91 1140631397']);
    }
  };

  return (

    <div>
      {/* Hero page Popup Modal  */}
      <div className="position-relative  container w-75"  data-aos="zoom-in">
      <div className="position-absolute p-5 mt-5">
      <span className=""><HeroPageModal /></span>
      </div>
      </div>
    
    <div className="Hero_page p-3 border shadow">
      <div className="row">
        <div className="col-5">
          <div className="slider">
            <img
              src={data[currentIndex].image}
              alt={data[currentIndex].text}
              width="100%"
              height="580"
            />
            <p>
              <span className="fs-3">
                <FaQuoteLeft />
              </span>{" "}
              {data[currentIndex].text}{" "}
              <span className="fs-3">
                <FaQuoteRight />
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="col-7">
          <div className="row gap-3">
            <div className="container col-5  shadow">
              <p className="fs-4 fw-bold text-dark mt-2">Website Development</p>
              {/* First Row  */}
              <div className="row text-dark fs-2 text-center">
                <div className="col">
                  
                    {" "}
                    <span className="Web_dev_Icons">
                    <Link to="/work_web_dev" className="text-dark"><BsWordpress/> </Link>
                      <br />
                      <p className="fs-6">Wordpress Website</p>
                    </span>
                 
                </div>
                <div className="col">
                  <span className="Web_dev_Icons">
                  <Link to="/work_web_dev" className="text-dark"><CgWebsite/></Link>
                    <br />
                    <p className="fs-6">Custom Website</p>
                  </span>
                </div>
                <div className="col">
                  <span className="Web_dev_Icons">
                  <Link to="/work_web_dev"className="text-dark"><FaColumns/></Link>
                    <br />
                    <p className="fs-6">CMS Website</p>
                  </span>
                </div>
              </div>
              {/* Second Row  */}
              <div className="row text-dark fs-2 text-center">
                <div className="col ">
                  <span className="Web_dev_Icons">
                  <Link to="/work_web_dev"className="text-dark"><FaBoxTissue/></Link>
                    <br />
                    <p className="fs-6">Ecommerce Website</p>
                  </span >
                </div>
                <div className="col">
                  <span className="Web_dev_Icons">
                  <Link to="/work_web_dev"className="text-dark"><FaRegNewspaper/></Link>
                    <br />
                    <p className="fs-6">Static Website</p>
                  </span>
                </div>
                <div className="col">
                  <span className="Web_dev_Icons">
                  <Link to="/work_web_dev" className="text-dark"><BsPcDisplay /></Link>
                    <br />
                    <p className="fs-6">Dynamic Website</p>
                  </span>
                </div>
              </div>
            </div>
            {/* first col end here */}

            <div className="container col-5 shadow">
              <p className="fs-4 fw-bold text-dark mt-2">Website Designing</p>
              {/* First Row  */}
              <div className="row text-dark fs-2 text-center">
                <div className="col ">
                  <span>
                    <BsGlobe />
                    <br />
                    <p className="fs-6">Web Design</p>
                  </span>
                </div>
                <div className="col">
                  <span>
                    <FaRegNewspaper />
                    <br />
                    <p className="fs-6">Static Web design</p>
                  </span>
                </div>
                <div className="col">
                  <span className="">
                    <BsPcDisplay />
                    <br />
                    <p className="fs-6">Dynamic Design</p>
                  </span>
                </div>
              </div>
              {/* Second Row  */}
              <div className="row text-dark fs-2 text-center">
                <div className="col ">
                  <span className="">
                    <FaBoxTissue />
                    <br />
                    <p className="fs-6">Ecommerce Web Design</p>
                  </span>
                </div>
                <div className="col">
                  <span>
                    <FaFigma />-<BsFiletypeHtml />
                    <br />
                    <p className="fs-6">Figma to HTML</p>
                  </span>
                </div>
                <div className="col">
                  <span>
                    <FaFigma />-<BsWordpress />
                    <br />
                    <p className="fs-6">Figma to WordPress</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="container col-5 shadow">
              <p className="fs-4 fw-bold text-dark">
                Cyber Security Services
              </p>
              {/* First Row  */}
              <div className="row text-dark fs-2 text-center">
                <div className="col ">
                  <span>
                    <MdOutlineLanguage />
                    <br />
                    <p className="fs-6">Virtual CISO</p>
                  </span>
                </div>
                <div className="col">
                  <span>
                    <MdSecurity />
                    <br />
                    <p className="fs-6">Cyber security</p>
                  </span>
                </div>
                <div className="col">
                  <span className="">
                    <MdLockOpen />
                    <br />
                    <p className="fs-6">Penetration Testing</p>
                  </span>
                </div>
              </div>
              {/* Second Row  */}
              <div className="row text-dark fs-2 text-center">
                <div className="col ">
                  <span className="">
                    <MdOutlineAdb />
                    <br />
                    <p className="fs-6">Incident Response</p>
                  </span>
                </div>
                <div className="col">
                  <span>
                    <BsCast />
                    <br />
                    <p className="fs-6">Security monitoring</p>
                  </span>
                </div>
                <div className="col">
                  <span className="">
                    <BsEyeFill />
                    <br />
                    <p className="fs-6">Threat Intelligence</p>
                  </span>
                </div>
              </div>
            </div>

            <div className="container col-5 shadow">
              <p className="fs-4 fw-bold text-dark">Study Abroad</p>
              {/* First Row  */}
              <div className="row text-dark fs-2 text-center">
                <div className="col ">
                  <span>
                    <ImProfile/>
                    <br />
                    <p className="fs-6">Profile Analysis</p>
                  </span>
                </div>
                <div className="col">
                  <span>
                    <FaPeopleCarry />
                    <br />
                    <p className="fs-6">Career Counseling</p>
                  </span>
                </div>
                <div className="col">
                  <span className="">
                    <FaUniversity />
                    <br />
                    <p className="fs-6">University Selection</p>
                  </span>
                </div>
              </div>
              {/* Second Row  */}
              <div className="row text-dark fs-2 text-center">
                <div className="col  ">
                  <span>
                    <FaFunnelDollar />
                    <br />
                    <p className="fs-6">Financial Aid </p>
                  </span>
                </div>
                <div className="col">
                  <span>
                    <FaPassport />
                    <br />
                    <p className="fs-6">Visa Guidance</p>
                  </span>
                </div>
                <div className="col">
                  <span>
                    <BsFillAirplaneEnginesFill />
                    <br />
                    <p className="fs-6">Arival Assistance</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
{/* Our Working Process*/}
<div className="Working_Process">
<h1 className="text-secondary fw-bold mx-4 p-3">Our <span className="text-dark">Working</span> Process</h1>
<div className="p-3">
  <div className="row">
    <h5 className="text-success fs-5"><span className="spinner-grow" role="status"></span> Planning <span className="fs-4"><FaAngleDoubleRight /><FaAngleDoubleRight /></span><span className="spinner-grow" role="status"></span> Ui Design & Development <span className="fs-4"><FaAngleDoubleRight /><FaAngleDoubleRight /></span><span className="spinner-grow" role="status"></span> Quality Analysis<span className="fs-4"><FaAngleDoubleRight /><FaAngleDoubleRight /></span><span className="spinner-grow" role="status"></span> Result <span className="fs-4"><FaAngleDoubleRight /><FaAngleDoubleRight /></span><span className="spinner-grow" role="status"></span> Client Feedback<span className="fs-4"><FaAngleDoubleRight /><FaAngleDoubleRight /></span><span className="spinner-grow" role="status"></span>Product Release <BsFillRocketTakeoffFill /></h5>
    <div className="col shadow rounded">
      <img src={PlaningSvg} alt="svg"  />
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
<h1 className="text-secondary fw-bold mx-4 p-4">Find <span className="text-dark text-decoration-underline">Us</span></h1>
<div className="FindUs">
<div className="container">
    <div className="row">
      <div className="col p-5 mt-3">
        <button className="btn btn-dark  fw-semibold w-75 shadow" onClick={MapHandler}> New Delhi [ Head Office ] <MdLocationOn /></button>
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
<h1 className="text-secondary fw-bold mx-4 p-3">Need any  <span className="text-dark">Help</span> Contact Us</h1>
<ContactUs/>
    </div>
  );
};

export default Hero;
