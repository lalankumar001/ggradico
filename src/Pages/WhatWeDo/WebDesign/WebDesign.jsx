import React from "react";
import Img1 from "../../../assets/WebDesignImg/WebsiteDesign.jpg";
import Img2 from "../../../assets/WebDesignImg/WebRedesign01.jpg";
import Img3 from "../../../assets/WebDesignImg/CmsWebDesign.png";
import Img4 from "../../../assets/WebDesignImg/WebConverting.jpg";
import Img5 from "../../../assets/WebDesignImg/StaticWebDesign.jpg";
import Img6 from "../../../assets/WebDesignImg/DynamicWebDesign.jpg"
import Img7 from "../../../assets/WebDesignImg/Banner.jpg"
import Img8 from "../../../assets/WebDesignImg/Ecomm.jpg"
import Img9 from "../../../assets/WebDesignImg/Maintenance.jpg"


// Icons from react icon
import {
  BsFillArrowRightCircleFill,
  BsFillTelephoneOutboundFill,
  BsFillKeyFill,
  BsFillFastForwardFill,
  
} from "react-icons/bs";
import {
  FaAngleDoubleDown,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaSass,
  FaJava,
  FaLaravel,
  FaPhp,
  FaWordpress,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiMui,
  SiFirebase,
  SiAdobephotoshop,
  SiAdobexd,
  SiCanva,
  SiRedux,
  SiWix,
  SiGithub,
  SiGit,
} from "react-icons/si";
import "./WebDesign.css";
import { FiFigma } from "react-icons/fi";

const WebDesign = () => {
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
                    W
                  </span>
                  eb Designing
                </a>
                <nav className="nav nav-pills flex-column">
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-1"
                  >
                    Website Redesign
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-2"
                  >
                    CMS Website Design
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-3"
                  >
                    Website Converting
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-4"
                  >
                    Static Website Design
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-5"
                  >
                    Dynamic Website Design
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-6"
                  >
                    Banner and Logo Design
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-7"
                  >
                    eCommerce Website Design
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-8"
                  >
                    Website Maintenance Services
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
                  <b>W</b>eb Designing
                </h2>
                <div className="row">
                  <div className="col mt-3">
                    <p className="text-secondary fw-semibold">
                      <span className="fs-1 fw-bold">W</span>e At <b className="text-success">GRADICOGLOBAL !, </b>we
                      take pride in offering exceptional web designing services
                      to our clients. As a highly reputable and trusted web
                      development company, we are dedicated to providing a
                      comprehensive range of services tailored to meet the
                      unique needs of our clients.
                    </p>
                    <p>
                      Whether you require a responsive website that looks great
                      on any device, e-commerce solutions to establish your
                      online store, custom web applications to streamline your
                      business processes, or any other web development services,
                      we are committed to delivering top-notch solutions that
                      align with your specific requirements.
                    </p>
                    <p>
                      We understand the importance of having a strong online
                      presence in today's digital landscape. Therefore, we work
                      closely with our clients to fully understand their goals,
                      target audience, and branding.
                    </p>

                    <span className="btn btn-dark">
                      Explore More <BsFillArrowRightCircleFill />
                    </span>
                  </div>
                  <div className="col">
                    <img src={Img1} alt="img" width="680" />
                  </div>
                  <p className="text-dark mt-2">
                    <span className="fs-5 fw-bold">"</span> When you choose
                    GRADICOGLOBAL PVT.LTD for your web designing needs, you can
                    expect professionalism, attention to detail, and a
                    commitment to delivering high-quality solutions on time and
                    within budget. We are passionate about helping businesses
                    succeed online, and we strive to build long-term
                    partnerships with our clients based on trust and mutual
                    success.
                    <span className="fs-5 fw-bold">"</span>
                    <strong>
                      Contact us today to discuss your web designing
                      requirements and let us help you create a compelling
                      online presence that drives results for your business.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <hr />
          {/* After hero section 1st  */}
          <div id="item-1-1" className="WebRedesign">
            <div className="row">
              {/* In col Scrolling effect is used from Aos */}
              <div
                className="col ForWebRedesignImgBg"
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img src={Img2} alt="img" width="100%" />
              </div>
              <div className="col">
                <h2 className="mt-2 p-3 fw-semibold text-center">
                  Website Redesign
                </h2>
                <p className="text-light">
                  Welcome to{" "}
                  <b className="text-dark fw-bold"> At Gradico Global !,</b>
                  where we specialize in professional web redesign services that
                  breathe new life into your online presence. In today's
                  fast-paced digital world, it is crucial for businesses to
                  adapt and stay ahead of the curve. Our team of expert
                  designers and developers at Gradico Global understands the
                  importance of an engaging and visually appealing website that
                  not only captures attention but also delivers an exceptional
                  user experience.
                </p>
                <p className="text-white">
                  If you're seeking internet marketing services that can propel
                  your business to new heights, trust in{" "}
                  <b className="text-dark fw-bold"> At Gradico Global !,</b> and
                  our unparalleled website redesign services. Let us help you
                  transform your underperforming website into a powerful
                  marketing tool that drives growth and boosts sales. Contact us
                  today to embark on a journey towards online success.
                </p>
                <p className="text-light">
                  A website redesign is much more than just a fresh coat of
                  paint. It involves a strategic approach to revamping your
                  online platform, optimizing it for increased functionality,
                  responsiveness, and overall performance. Whether your current
                  website looks outdated, lacks mobile responsiveness, or fails
                  to convert visitors into customers, our web redesign services
                  are tailored to address these issues and create a compelling
                  online presence that aligns with your brand identity and
                  goals.
                  <b>
                    Tech We Use <FaAngleDoubleDown />
                  </b>
                </p>
                <div className="container  p-3 fw-bold fs-2 mb-2">
                  <div className="row text-white ">
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="HTML">
                        <FaHtml5 />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="CSS">
                        <FaCss3Alt />
                      </span>
                    </div>
                    <div className="col icons">
                      <span
                        className="shadow rounded-pill p-2"
                        title="JavaScript"
                      >
                        <FaJsSquare />
                      </span>
                    </div>
                    <div className="col icons icons">
                      <span className="shadow rounded-pill p-2" title="ReactJs">
                        <FaReact />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="NodeJs">
                        <FaNodeJs />
                      </span>
                    </div>
                    <div className="col icons">
                      <span
                        className="shadow rounded-pill p-2"
                        title="BootStrap"
                      >
                        <FaBootstrap />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Sass">
                        <FaSass />
                      </span>
                    </div>
                    <div className="col icons">
                      <span
                        className="shadow rounded-pill p-2"
                        title="Wordpress"
                      >
                        <FaWordpress />
                      </span>
                    </div>
                  </div>
                  {/* 2nd row start */}
                  <div className="row my-3 text-white">
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Java">
                        <FaJava />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Php">
                        <FaPhp />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Laravel">
                        <FaLaravel />
                      </span>
                    </div>
                    <div className="col icons">
                      <span
                        className="shadow rounded-pill p-2"
                        title="Tailwindcss"
                      >
                        <SiTailwindcss />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Mysql">
                        <SiMysql />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Mongodb">
                        <SiMongodb />
                      </span>
                    </div>
                    <div className="col icons">
                      <span
                        className="shadow rounded-pill p-2"
                        title="Material Ui"
                      >
                        <SiMui />
                      </span>
                    </div>
                    <div className="col icons">
                      <span
                        className="shadow rounded-pill p-2"
                        title="Firebase"
                      >
                        <SiFirebase />
                      </span>
                    </div>
                  </div>
                  {/* end row */}

                  {/* 3rd row start */}
                  <div className="row my-3 text-white">
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Figma">
                        <FiFigma />
                      </span>
                    </div>
                    <div className="col icons">
                      <span
                        className="shadow rounded-pill p-2"
                        title="Adobephotoshop"
                      >
                        <SiAdobephotoshop />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Adobexd">
                        <SiAdobexd />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Canva">
                        <SiCanva />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Redux">
                        <SiRedux />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Wix">
                        <SiWix />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Git">
                        <SiGit />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Github">
                        <SiGithub />
                      </span>
                    </div>
                  </div>
                  {/* end row */}
                </div>
              </div>
            </div>
          </div>
          {/*2nd row   */}
          <div id="item-1-2" className="CmsWebDesign">
            <div className="row" data-aos="zoom-in-up">
              <div className="col">
                <h2 className="mt-2 p-3 fw-semibold text-center">
                  CMS Website Design
                </h2>
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
                  Whether you need an e-commerce website, a blog, a corporate
                  site, or a custom web application, our CMS website design
                  services offer a comprehensive solution that includes
                  responsive design, seamless navigation, intuitive content
                  management, and search engine optimization (SEO) best
                  practices. We are committed to delivering websites that not
                  only captivate your audience but also drive traffic, generate
                  leads, and increase conversions.
                </p>
                <p>
                  With our team of skilled and experienced web designers, we
                  specialize in creating dynamic and visually stunning CMS
                  websites that are tailored to meet the unique needs and
                  objectives of each client. Whether you are a small startup, a
                  growing enterprise, or a non-profit organization, we have the
                  expertise to transform your online presence into a powerful
                  marketing and branding tool.
                </p>
                <p className="fw-bold">
                  Trust Gradico Global to be your partner in bringing your
                  digital aspirations to life. Contact us today to discuss your
                  CMS website design needs and embark on a journey towards a
                  powerful online presence that sets you apart from the
                  competition.
                </p>
                <span>
                  <a
                    href="https://wa.me/9896549691"
                    className="btn btn-dark mt-2"
                    target="_blank"
                  >
                    {" "}
                    Need any Help? <BsFillTelephoneOutboundFill />
                  </a>
                </span>
              </div>
              <div className="col ForCmsImgBackground">
                <img src={Img3} alt="img" width="100%" />
              </div>
            </div>
          </div>
        </div>
          {/* 3rd row */}
          <div id="item-1-3" className="WebConverting"> 
            <div className="row" data-aos="zoom-in-up">
              <div className="col ForWebConvertingImgBackground">
                <img src={Img4} alt="img" width="100%" />
              </div>
              <div className="col">
                <h2 className="mt-2 p-3 fw-semibold text-center">
                  Website Converting
                </h2>
                <p>
                  In addition to our CMS website design services, Gradico Global
                  is proud to offer website conversion services that can
                  revitalize your existing website and take it to new heights.
                  We understand that as technology advances and user preferences
                  evolve, it's crucial for businesses to stay ahead of the curve
                  and ensure their websites are up to date and optimized for
                  optimal performance.
                </p>
                <p>
                  Website conversion involves transforming your current website
                  into a more modern, user-friendly, and functional version that
                  aligns with the latest industry standards and best practices.
                  Our expert team at Gradico Global has the knowledge and skills
                  to revamp your website and enhance its overall user
                  experience, conversion rates, and engagement levels.
                </p>
                <p>
                  We begin the website conversion process by conducting a
                  thorough analysis of your current website, evaluating its
                  design, layout, navigation, functionality, and performance. We
                  also take into consideration your business goals, target
                  audience, and industry trends. This assessment enables us to
                  identify areas for improvement and develop a conversion
                  strategy that will effectively address your unique needs.
                </p>
                <p className="fw-bold">
                  At Gradico Global, we are committed to delivering website
                  conversions that elevate your online presence, boost your
                  brand image, and drive tangible results. With our expertise
                  and attention to detail, we can transform your existing
                  website into a powerful tool that attracts, engages, and
                  converts your target audience.
                  <strong className="text-danger">
                    
                    Contact Gradico Global today to discuss your website
                    conversion needs and take the first step towards a
                    revitalized and highly effective online presence.
                  </strong>
                </p>
                <div className="container bg-info p-3 rounded row my-3 text-light fs-4">
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Figma">
                        <FiFigma />
                      </span> -
                    </div>
                    <div className="col icons">
                      <span
                        className="shadow rounded-pill p-2"
                        title="Adobephotoshop"
                      >
                        <FaHtml5 />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Adobexd">
                        <FaCss3Alt />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Canva">
                        <FaJsSquare />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Redux">
                        <FaReact />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Wix">
                        <FaBootstrap />
                      </span>
                    </div>
                    <div className="col icons">
                      <span className="shadow rounded-pill p-2" title="Git">
                        <FaWordpress />
                      </span>
                    </div>
                    <div className="col icons">
                      - <span className="shadow rounded-pill p-2" title="Github">
                        <SiAdobephotoshop />
                      </span>
                    </div>
                  </div>
              </div>
    {/* 4th row  */}          
              <div id="item-1-4" className="StaticWebDesign">
            <div className="row" data-aos="zoom-in-up">
              <div className="col">
                <h2 className="mt-2 p-3 fw-semibold text-center">
                  Static Website Design
                </h2>
                <p>
                Static web design involves creating websites that consist of fixed HTML, CSS, and JavaScript files. Unlike dynamic websites that rely on databases and server-side processing, static websites are pre-built and do not require server-side processing for every page load. This results in faster loading times, improved security, and greater control over the website's appearance and performance.
                </p>
                <p>
                At Gradico Global, we offer top-notch static web design services that can help establish a strong online presence for your business or organization. While dynamic CMS websites have their advantages, static web design holds its own charm and benefits, especially for those looking for simplicity, speed, and easy maintenance.
                </p>
                <p>
                Our experienced team at Gradico Global excels in designing visually appealing and functional static websites that effectively convey your brand message. We understand that every business is unique, and we tailor our design approach to reflect your specific needs and target audience.
                </p>
                <p className="fw-bold">
                Contact us today to explore our static web design services and embark on a journey to create a visually appealing, fast-loading, and effective online platform for your business or organization.
                </p>
                 <div className="container">
                  <p className="text-danger fw-bold"> <strong> <BsFillKeyFill /></strong> Key features of our static web design services include:</p>
                   <ul className="text-success">
                    <li><BsFillFastForwardFill/> Clean and Engaging Design</li>
                    <li><BsFillFastForwardFill/> Responsive Design</li>
                    <li><BsFillFastForwardFill/> Fast Loading Times</li>
                    <li><BsFillFastForwardFill/> Easy Maintenance</li>
                    <li><BsFillFastForwardFill/> SEO-Friendly Structure</li>
                    <li><BsFillFastForwardFill/> Custom Functionality</li>
                   </ul>
                 </div>
                <span>
                  <a
                    href="https://wa.me/9896549691"
                    className="btn btn-dark mb-2 mx-5"
                    target="_blank"
                  >
                    {" "}
                    Contact Us <BsFillTelephoneOutboundFill />
                  </a>
                </span>
                
              </div>
              <div className="col ForStaticImgBackground">
                <img src={Img5} alt="img" width="100%" />
              </div>
            </div>
          </div>
          <hr />  
    {/* 5th row */}
    <div id="item-1-5" className="CmsWebDesing">
            <div className="row" data-aos="zoom-in-up">
              <div className="col ForCmsImgBackground">
                <img src={Img6} alt="img" width="100%" />
              </div>
              <div className="col">
                <h2 className="mt-2 p-3 fw-semibold text-center">
                  Dynamic Website Design
                </h2>
                <p>
                  <b className="text-dark fw-bold"> At Gradico Global !,</b> we
                 excel in dynamic web design services, offering innovative and robust solutions to meet the evolving needs of businesses and organizations. Dynamic web design involves creating websites that are highly interactive, engaging, and capable of delivering personalized content to users.
                </p>
                <p>
                With dynamic web design, the content of the website is generated on-the-fly, allowing for real-time updates and seamless user experiences. Our experienced team at Gradico Global leverages cutting-edge technologies and frameworks to develop dynamic websites that empower you to deliver dynamic content, interactive features, and personalized user experiences.
                </p>
                <p>
                  With our team of skilled and experienced web designers, we
                  specialize in creating dynamic and visually stunning CMS
                  websites that are tailored to meet the unique needs and
                  objectives of each client. Whether you are a small startup, a
                  growing enterprise, or a non-profit organization, we have the
                  expertise to transform your online presence into a powerful
                  marketing and branding tool.
                </p>
                <p className="fw-bold">
                  Trust Gradico Global to be your partner in bringing your
                  digital aspirations to life. Contact us today to discuss your
                  CMS website design needs and embark on a journey towards a
                  powerful online presence that sets you apart from the
                  competition.
                </p>
                <div className="container">
                  <p className="text-danger fw-bold"> <strong> <BsFillKeyFill /></strong> Key features of our Dynamic web design services include:</p>
                   <ul className="text-success">
                    <li><BsFillFastForwardFill/> Customized Functionality</li>
                    <li><BsFillFastForwardFill/> Content Management Systems (CMS)</li>
                    <li><BsFillFastForwardFill/> Database Integration</li>
                    <li><BsFillFastForwardFill/> Scalability and Flexibility</li>
                    <li><BsFillFastForwardFill/> Integration of Third-Party Services</li>
                   </ul>
                 </div>
              </div>
              
              
            </div>
          </div>
<hr />
          {/* 6th row */}
          <div id="item-1-6">
            <div className="row" data-aos="zoom-in-up">
              
              <div className="col">
                <h2 className="mt-2 p-3 fw-semibold text-center">
                  Banner and Logo Design
                </h2>
                <p>
                we offer exceptional banner and logo designing services that help businesses establish a strong visual identity and create a lasting impression. We understand that a well-designed banner and logo are crucial elements in representing your brand, conveying your message, and capturing the attention of your target audience.
                </p>
                <p>
                Our talented designers specialize in creating eye-catching and impactful banners that effectively communicate your brand's values and key messages. Whether you need banners for your website, social media platforms, digital advertisements, or offline marketing materials, we have the expertise to deliver designs that stand out and leave a lasting impression.
                </p>
                <p>
               <b> At Gradico Global !, </b> we believe that effective banner and logo designs play a pivotal role in building a strong brand identity and attracting your target audience. Our team of talented designers is dedicated to delivering exceptional designs that capture the essence of your brand and help you stand out in a competitive market.
                </p>
                <p className="text-danger fw-bold"> <strong> <BsFillKeyFill /></strong> Key features of our Banner and Logo Design services include:</p>
                     <div className="container">
                      <div className="row">
                        <div className="col">
                        <span className="text-secondary fs-4 fw-bold mx-5 ">Banner Design</span>
                        <ul className="text-dark mt-3">
                    <li><BsFillFastForwardFill/> Compelling Visuals</li>
                    <li><BsFillFastForwardFill/> Customized Approach</li>
                    <li><BsFillFastForwardFill/> Brand Consistency</li>
                    <li><BsFillFastForwardFill/> Scalability and Flexibility</li>
                    <li><BsFillFastForwardFill/> Call-to-Action (CTA) Optimization</li>
                   </ul>
                        </div>
                        <div className="col">
                         <span className="text-secondary fs-4 fw-bold mx-5 ">Logo Design</span>
                        <ul className="text-dark mt-3">
                    <li><BsFillFastForwardFill/> Brand Analysis</li>
                    <li><BsFillFastForwardFill/> Customized and Original Designs</li>
                    <li><BsFillFastForwardFill/> Timeless and Scalable Designs</li>
                    <li><BsFillFastForwardFill/> Versatility and Brand Consistency</li>
                    <li><BsFillFastForwardFill/> File Formats and Guidelines</li>
                   </ul>
                        </div>
                      </div>
                     </div>
              </div>
              <div className="col ForCmsImgBackground">
                <img src={Img7} alt="img" width="100%" />
              </div>
            </div>
          </div>
<hr />
          {/* 7th row */}
          <div id="item-1-7">
            <div className="row" data-aos="zoom-in-up">
              <div className="col ForCmsImgBackground">
                <img src={Img8} alt="img" width="100%" />
              </div>
              <div className="col">
                <h2 className="mt-2 p-3 fw-semibold text-center">
                  eCommerce Website Design
                </h2>
                <p>
                  <b className="text-dark fw-bold"> At Gradico Global!,</b> 
we specialize in providing comprehensive e-commerce solutions that empower businesses to thrive in the digital marketplace. With the ever-growing popularity of online shopping, having a robust and user-friendly e-commerce website is essential for businesses to reach their target audience, increase sales, and establish a strong online presence.
                </p>
                <p>
                Our e-commerce services encompass the entire spectrum of building, designing, and optimizing e-commerce websites, ensuring a seamless and secure online shopping experience for your customers.


                </p>
                <p>
                At Gradico Global, we understand the unique challenges and requirements of running a successful e-commerce business. Our comprehensive e-commerce solutions are designed to maximize your online sales potential, enhance customer satisfaction, and drive business growth.

<strong> Contact us today to discuss your e-commerce needs, and let us help you build a powerful and profitable online store that sets you apart from the competition.</strong>
                </p>
                <div className="container">
                  <p className="text-danger fw-bold"> <strong> <BsFillKeyFill /></strong> Key features of our e-commerce solutions include:</p>
                   <ul className="text-success">
                    <li><BsFillFastForwardFill/> Custom E-commerce Website Development</li>
                    <li><BsFillFastForwardFill/> Responsive Design</li>
                    <li><BsFillFastForwardFill/> User-Friendly Interface</li>
                    <li><BsFillFastForwardFill/> Secure Payment Gateway Integration</li>
                    <li><BsFillFastForwardFill/> Product Catalog Management</li>
                    <li><BsFillFastForwardFill/> Order Management and Fulfillment</li>
                    <li><BsFillFastForwardFill/> SEO Optimization</li>
                    <li><BsFillFastForwardFill/> Analytics and Reporting</li>
                   </ul>
                 </div>
              </div>
            </div>
          </div>
<hr />
          {/* 8th row */}
          <div id="item-1-8">
            <div className="row" data-aos="zoom-in-up">
              
              <div className="col">
                <h2 className="mt-2 p-3 fw-semibold text-center">
                  Website Maintenance Services
                </h2>
                <p>
                  <b className="text-dark fw-bold"> At Gradico Global!,</b> we
                   offer reliable and comprehensive website maintenance services to ensure that your website remains up-to-date, secure, and optimized for peak performance. We understand that maintaining a website requires ongoing attention, regular updates, and proactive monitoring to provide a seamless user experience and protect your investment.
                </p>
                <p>
                At Gradico Global, we believe that consistent website maintenance is crucial for the long-term success of your online presence. Our dedicated website maintenance services provide you with peace of mind, allowing you to focus on your core business while we handle the technical aspects of your website.
                </p>
                <div className="container">
                  <p className="text-danger fw-bold"> <strong> <BsFillKeyFill /></strong> Our website maintenance services encompass various aspects of website management, including:</p>
                   <ul className="text-success">
                    <li><BsFillFastForwardFill/> Content Updates</li>
                    <li><BsFillFastForwardFill/> Technical Updates</li>
                    <li><BsFillFastForwardFill/> Backup and Recovery</li>
                    <li><BsFillFastForwardFill/> Website Security</li>
                    <li><BsFillFastForwardFill/> Performance Optimization</li>
                    <li><BsFillFastForwardFill/> Bug Fixes and Troubleshooting</li>
                    <li><BsFillFastForwardFill/> Analytics and Reporting</li>
                    <li><BsFillFastForwardFill/> Consultation and Support</li>
                   </ul>
                 </div>
              </div>
              <div className="col ForCmsImgBackground">
                <img src={Img9} alt="img" width="100%" />
              </div>
            </div>
            </div>


            </div>
          </div>
      </div>
    </div>
  );
};

export default WebDesign;