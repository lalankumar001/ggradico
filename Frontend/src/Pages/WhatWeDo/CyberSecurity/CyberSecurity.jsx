import React from "react";
import Img1 from "../../../assets/PayPerClick/pppc.jpg";
import Img2 from "../../../assets/SMO/facebook.jpg";
import Img3 from "../../../assets/SMO/twitter.jpg";
import Img4 from "../../../assets/SMO/Linkedin.jpg";
import Img5 from "../../../assets/SMO/insta.jpg";
import Img6 from "../../../assets/SMO/Youtube.jpg";


// Icons from react icon
import {
  BsFillArrowRightCircleFill,
  BsFillTelephoneOutboundFill,
  BsFillKeyFill,
  BsFillFastForwardFill,
} from "react-icons/bs";

const CyberSecurity = () => {
  return (
    <div className="my-5">
      <div className="mt-4 p-3 w-100">
        <div className="row my-5">
          <div className="col-3">
            <nav
              id="navbar-example3"
              className="h-100 flex-column align-items-stretch pe-4 border-end"
            >
              <nav className="nav nav-pills flex-column">
                <a className="nav-link text-dark fw-bold fs-4" href="#item-1">
                  <span className="fs-1 fw-bold text-decoration-underline">
                    P
                  </span>
                  ay Per Click
                  </a>
                <nav className="nav nav-pills flex-column">
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-1"
                  >
                    Search Advertising
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-2"
                  >
                    Product Listing Ads

                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-3"
                  >
                    Affiliate Marketing
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-4"
                  >
                    Email Marketing
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-5"
                  >
                 Performance Tracking
                  </a>
                </nav>
              </nav>
            </nav>
          </div>

          {/* Hero section  */}
          <div className="col-9">
            <div
              data-bs-spy="scroll"
              data-bs-target="#navbar-example3"
              data-bs-smooth-scroll="true"
              className="scrollspy-example-2"
              tabindex="0"
            >
              <div id="item-1">
                <h2>
                  <b>P</b>ay Per Click
                </h2>
                <div className="row">
                  <div className="col mt-3">
                    <p className="text-secondary fw-semibold">
                      Welcome to{" "}
                      <b className="text-success">GRADICOGLOBAL !, </b>
                      Pay-Per-Click (PPC) advertising is a digital advertising model where businesses pay for each click on their ads. It is a highly targeted and cost-effective method of driving traffic to a website or landing page. With PPC, businesses have control over their ad spend and can strategically target their audience based on specific keywords, demographics, interests, and more.
                    </p>
                    <p>
                    Gradico Global, a trusted digital marketing agency, offers comprehensive PPC advertising services to businesses. Their expert team helps clients develop effective PPC strategies, conduct keyword research, create compelling ad copy, set up and optimize campaigns, and maximize their ROI through continuous monitoring and optimization.
                    </p>

                    <span className="btn btn-dark mb-3">
                      Explore More <BsFillArrowRightCircleFill />
                    </span>
                  </div>
                  <div className="col">
                    <img src={Img1} alt="img" width="680" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* After hero section 1st  */}
          <div id="item-1-1" className="bg-info">
            <div className="row">
              {/* In col Scrolling effect is used from Aos */}
              <div
                className="col ForWebRedesignImgBg"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img src={Img2} alt="img" width="100%" height={585} />
              </div>
              <div className="col">
                <h2 className="mt-2 p-3 fw-semibold text-center">
                Search Advertising
                </h2>
                <p className="text-light">
                In today's digital landscape, where billions of people are active on social media, Facebook advertising has emerged as a game-changer for businesses seeking to connect with their target audience in a meaningful way. With its unparalleled reach and sophisticated targeting options, Facebook provides businesses with a powerful platform to showcase their products or services, build brand awareness, and drive tangible results.                </p>
                <p className="text-white">
                Facebook advertising goes beyond traditional marketing approaches by allowing businesses to leverage data-driven insights and precise targeting capabilities. With access to detailed user demographics, interests, and behaviors, businesses can tailor their ad campaigns to reach the right people at the right time, maximizing their chances of generating conversions and driving growth.
                </p>
                <p className="text-white">At <b className="fw-semibold text-dark"> Gradico Global ! ,</b> we specialize in optimizing your Facebook page for both desktop and mobile users. Our expertise lies in engaging with your website visitors, especially those who have shown interest but haven't made a purchase or contacted you. Through strategic Facebook advertising, we reconnect with these visitors and re-engage them effectively.</p>
                     <div className="container">
                      <div className="row">
                        <div className="col">
                        <ul className="text-dark">
                    <li><BsFillFastForwardFill/> Brand Awareness , Reach </li>
                    <li><BsFillFastForwardFill/> Participating </li>
                    <li><BsFillFastForwardFill/> Application Installs</li>
                   </ul>
                        </div>
                        <div className="col">
                        <ul className="text-dark">
                    <li><BsFillFastForwardFill/> Video Views</li>
                    <li><BsFillFastForwardFill/> Lead Generation</li>
                    <li><BsFillFastForwardFill/> Traffic and Sales</li>
                   </ul>
                        </div>
                      </div>
                     </div>
              
              </div>
              
            </div>
          </div>
          {/*2nd row   */}
          <div id="item-1-2" className="bg-white">
            <div className="row" data-aos="zoom-in-up">
              <div className="col">
                <h2 className="mt-2 p-3 fw-semibold text-center">
                Twitter Advertising
                </h2>
                <p>
                  <span className="fs-2 fw-bold">T</span>witter advertising is a powerful tool for businesses looking to expand their online presence, reach a wider audience, and drive meaningful engagement. With its fast-paced, real-time nature and massive user base, Twitter offers unique opportunities to connect with users who are actively seeking information, trends, and conversations relevant to their interests.
                </p>

                <p>
                  <b className="text-dark fw-bold"> At Gradico Global !,</b> we
                  adopt a collaborative approach, working closely with our
                  clients to understand their vision, goals, and target
                  audience. We combine your unique ideas with our industry
                  insights and technical expertise to create a website that
                  reflects your brand identity and effectively engages your
                  visitors.
                </p>
                <p>
                Twitter advertising enables businesses to promote their products, services, or brand messages through various ad formats, including promoted tweets, promoted accounts, and promoted trends.
                </p>
                <div className="container">
                  <p className="text-dark fw-bold">
                    <strong>
                      <BsFillKeyFill />
                    </strong>{" "}
                    Here are some key aspects of our Twitter advertising service:
                  </p>

                  <ul className="text-dark">
                    <li>
                      <BsFillFastForwardFill /> Targeted Reach
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Engaging Ad Formats
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Amplified Visibility
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Real-Time Engagement
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Performance Tracking and Optimization
                    </li>
                  </ul>
                </div>
                </div>
              <div className="col ForOnlineRmImgBackground">
                <img src={Img3} alt="img" width="100%" />
              </div>
            </div>
          </div>
        </div>
        {/* 3rd row */}
        <div id="item-1-3" className="bg-info">
          <div className="row" data-aos="zoom-in-up">
            <div className="col ForWebConvertingImgBackground">
              <img src={Img4} alt="img" width="100%" />
            </div>
            <div className="col">
              <h2 className="mt-2 p-3 fw-semibold text-center">
                Linkedin Advertising
              </h2>
              <p>
              When it comes to LinkedIn advertising, Gradico Global, a trusted digital marketing agency, offers comprehensive services to help businesses leverage the platform effectively. They assist clients in developing tailored strategies, creating engaging ad content, optimizing campaigns, and maximizing their results on LinkedIn.
              </p>
              <p>
              LinkedIn advertising provides businesses with a powerful platform to connect with professionals, decision-makers, and industry influencers. As the world's largest professional network, LinkedIn offers unique opportunities to reach a highly targeted audience and achieve specific business objectives.
              </p>
              <p>
              By partnering with <b className="text-white fw-bold"> Gradico Global </b>for LinkedIn advertising, businesses can effectively reach their target audience, establish thought leadership, drive quality leads, and achieve their marketing objectives within the professional networking space.
              </p>
              <div className="container">
                <p className="text-danger fw-bold">
                  <strong>
                    <BsFillKeyFill />
                  </strong>{" "}
                  Key aspects of our LinkedIn advertising service include:
                </p>
                <div className="row">
                  <div className="col fw-semibold">
                    <ul>
                      <li>
                        <BsFillFastForwardFill /> Professional Targeting
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Various Ad Formats
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Brand Building and Thought Leadership
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Lead Generation
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Tracking and Analytics
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4th row  */}
        <div id="item-1-4">
          <div className="row shadow" data-aos="zoom-in-up">
            <div className="col">
              <h2 className="mt-2 p-3 fw-semibold text-center">
                Instagram Advertising
              </h2>
              <p>
              <b className="fs-2 fw-bold">I</b>nstagram advertising is a dynamic and visually-driven marketing channel that empowers businesses to connect with a highly engaged audience. With its focus on stunning imagery and immersive content, Instagram provides a unique platform for businesses to tell their stories, showcase their products, and inspire their audience.
              </p>
                <p>As a leading digital marketing agency, Gradico Global specializes in Instagram advertising. Their team of experts helps businesses develop customized strategies, create visually compelling content, optimize campaigns, and achieve their marketing goals on Instagram. With Gradico Global's guidance, businesses can harness the power of Instagram advertising to connect with their audience, inspire action, and drive meaningful results.</p>
              <div className="container">
                <p className="text-danger fw-bold">
                  <strong>
                    <BsFillKeyFill />
                  </strong>
                  Key aspects of our Instagram Advertising Service include:
                </p>
                <div className="row">
                  <div className="col fw-semibold">
                    <ul>
                      <li>
                        <BsFillFastForwardFill /> Visual Appeal
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Targeted Reach
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Diverse Ad Formats
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Instagram Shopping
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Influencer Collaboration
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Performance Tracking and Optimization
                      </li>
                    </ul>
                  </div>
                  </div>
              </div>
            </div>
            <div className="col ForStaticImgBackground">
              <img src={Img5} alt="img" width="100%" />
            </div>
          </div>
        </div>
        <br />
        <div id="item-1-5" className="bg-light">
          <div className="row" data-aos="zoom-in-up">
            <div className="col ForWebConvertingImgBackground">
              <img src={Img6} alt="img" width="100%" />
            </div>
            <div className="col">
              <h2 className="mt-2 p-3 fw-semibold text-center">
                Youtube Marketing
              </h2>
              <p>
              In this digital age, where video content reigns supreme, YouTube stands tall as the ultimate stage for businesses to shine. With billions of viewers flocking to the platform every day, businesses have an opportunity to reach an expansive audience and leave an indelible mark on their minds.
              </p>
              <p>
              YouTube marketing is a journey that starts with the creation of compelling video content. It's a playground where creativity meets strategy, where businesses can unleash their storytelling prowess and create videos that resonate with viewers. Whether it's a tutorial that simplifies complex concepts, a heartwarming story that tugs at the heartstrings, or an entertaining skit that brings laughter, YouTube is a canvas where businesses can paint their brand story.
              </p>
              <p>
              In the realm of YouTube marketing, Gradico Global is a trusted guide. Their team of experts understands the intricacies of the platform and knows how to create captivating videos that stand out. With Gradico Global's guidance, businesses can harness the magic of YouTube, enchant their audience, and create a memorable brand presence in the world's largest video extravaganza.
              </p>
              <p>Through the power of analytics and optimization, YouTube marketing allows businesses to measure the impact of their videos. With insights into viewership, engagement, and conversions, businesses can fine-tune their strategies, optimize their content, and unlock the full potential of their YouTube presence.</p>
              <div className="container">
                <div className="row">
                  <div className="col fw-semibold">
                    <ul>
                      <li>
                        <BsFillFastForwardFill /> Video Content Creation
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Reach and Engagement
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Targeted Advertising
                      </li>
                    </ul>
                  </div>
                  <div className="col fw-semibold">
                    <ul>
                    <li>
                        <BsFillFastForwardFill /> Brand Awareness and Storytelling
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Influencer Collaborations
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Analytics and Optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
