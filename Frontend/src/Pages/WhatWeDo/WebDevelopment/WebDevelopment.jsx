import React from "react";
import Img1 from "../../../assets/WebDevImg/WebDevImg1.jpg";
import Img2 from "../../../assets/WebDevImg/wordpressWebDevImg.png";
import Img3 from "../../../assets/WebDevImg/customWebDevImg.jpg";
import Img4 from "../../../assets/WebDevImg/CmsWebDevImg.jpg";
import Img5 from "../../../assets/WebDevImg/ecommWebDev.jpg";
import Img6 from "../../../assets/WebDevImg/MernStackWebDev.jpg";

// Icons from react icon
import {
  BsFillArrowRightCircleFill,
  BsWordpress,
  BsBoxArrowInRight,
  BsReverseLayoutTextWindowReverse,
  BsCalendar3Range,
  BsCartPlusFill,
  BsFillTelephoneOutboundFill,
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
} from "react-icons/si";
import "./WebDev.css";
import TechWeUse from '../../TechWeUse/TechweUseHome'

const WebDevelopment = () => {
  return (
    <div>
      <div className="mt-4 p-5"></div>
      <div className="row">
        <div className="col-3">
          <nav
            id="navbar-example3"
            className="h-100 flex-column align-items-stretch pe-4 border-end"
          >
            <nav className="nav nav-pills flex-column">
              <a className="nav-link fs-4" href="#item-1">
                <span className="fs-1 fw-bold text-decoration-underline">
                  W
                </span>
                eb Development
              </a>
              <nav className="nav nav-pills flex-column">
                <a className="nav-link ms-3 my-1 btn btn-dark" href="#item-1-1">
                  Wordpress Web Development
                </a>
                <a className="nav-link ms-3 my-1 btn btn-dark" href="#item-1-2">
                  Custom Web Development
                </a>
                <a className="nav-link ms-3 my-1 btn btn-dark" href="#item-1-3">
                  CMS Web Development
                </a>
                <a className="nav-link ms-3 my-1 btn btn-dark" href="#item-1-4">
                  eCommerce Web Development
                </a>
                <a className="nav-link ms-3 my-1 btn btn-dark" href="#item-1-5">
                  Full Stack Web Development
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
                <b>W</b>eb Development / Web Application Development
              </h2>
              <div className="row">
                <div className="col mt-3">
                  <p className="text-dark fw-semibold">
                    We At GRADICOGLOBAL PVT.LTD is a highly reputable and
                    trusted web development company, dedicated to providing a
                    comprehensive range of services tailored to meet the unique
                    needs of their clients.our skilled professionals are
                    well-versed in a wide array of technologies including HTML,
                    CSS, JavaScript, Reactjs, PHP, and many others commonly
                    employed in the realm of web development. Whether you
                    require a responsive website, e-commerce solutions, custom
                    web applications, or any other web development services, We
                    Are committed to delivering top-notch solutions that align
                    with your specific requirements.
                  </p>
                  <span className="btn btn-dark">
                    Explore More <BsFillArrowRightCircleFill />
                  </span>
                </div>
                <div className="col">
                  <img src={Img1} alt="" width="670" />
                </div>
                <p className="text-secondary">
                  <span className="fs-5 fw-bold">"</span> Partnering with
                  GRADICOGLOBAL PVT.LTD for your web development needs
                  guarantees a seamless and professional experience, with a
                  focus on innovation, quality, and client satisfaction.
                  <span className="fs-5 fw-bold">"</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      {/* Wordpress section start here */}
      <div id="item-1-1">
        <div className="row WordpressWebDev">
          <div className="col ForWordpressImgBg">
            <img src={Img2} alt="img" width="100%" />
          </div>
          <div className="col">
            <h2 className="mt-2 p-3 fw-bold text-center">
              Wordpress Web Development
            </h2>
            <p className="fs-5 fw-semibold">
              Looking for affordable and efficient WordPress customization
              services? Look no further than{" "}
              <b className="text-primary"> Gradico Global !</b>, We specialize
              in providing top-notch WordPress development services to meet all
              your website needs. Whether you require a comprehensive
              WordPress-based website for your brand or a simple blog theme, our
              team of highly skilled WordPress professionals is here to deliver
              exceptional results. With their extensive experience and
              expertise, we are dedicated to enhancing our reputation in the web
              development industry.
            </p>
            <p className="fs-6 fw-bold">
              As the leading custom WordPress Development Company in India,{" "}
              <b className="text-primary"> Gradico Global</b> is committed to
              providing unparalleled solutions for WordPress PlugIn Development
              and WordPress Theme Development. Our relentless efforts ensure
              that no aspect is overlooked in delivering the best possible
              outcomes for our clients worldwide.
            </p>
            {/* Modal start Here for wordpress lern more button */}
            <button
              type="button"
              className="btn btn-danger mb-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Learn More <BsBoxArrowInRight />
            </button>

            {/* Modal content */}
            <div
              className="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-4 fw-bold text-secondary"
                      id="exampleModalLabel"
                    >
                      {" "}
                      <span className="fs-1 text-dark">
                        <BsWordpress />
                      </span>{" "}
                      Wordpress Web Development
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="fs-5 fw-semibold">
                      At <b className="text-primary"> Gradico Global</b> we
                      specialize in unleashing the full potential of WordPress,
                      harnessing its power to craft exceptional websites that
                      transcend expectations. Our team of skilled developers
                      combines their artistic finesse with technical prowess to
                      create pixel-perfect masterpieces that seamlessly
                      integrate functionality and aesthetics. We pride ourselves
                      on understanding the intricacies of user experience,
                      ensuring that each website we build captivates visitors,
                      engages them deeply, and leaves an indelible impression.
                    </p>
                    <p className="fs-6 fw-semibold">
                      WordPress web development is an art form that combines
                      technical expertise, design prowess, and a deep
                      understanding of user experience. Whether you're an
                      entrepreneur looking to establish your brand, a blogger
                      seeking to share your voice, or a business owner aiming to
                      expand your online reach, WordPress offers an unparalleled
                      toolkit that can turn your vision into a pixel-perfect
                      reality.
                    </p>
                    {/* Why wordpress section start from here */}
                    <div className="container">
                      <h2 className="text-secondary fw-bold p-3">
                        Why WordPress CMS ?
                      </h2>
                      <p className="text-dark fs-6  fw-semibold">
                        WordPress CMS stands as the most popular choice for
                        websites worldwide, empowering countless platforms that
                        enrich the web like never before.{" "}
                        <b className="text-primary"> Gradico Global</b> is at
                        the forefront of creating a robust ecosystem of powerful
                        websites that effortlessly meet the complex demands of
                        modern users. As a trusted WordPress Development Company
                        based in India, we specialize in crafting dynamic and
                        flexible websites that perfectly align with our clients'
                        requirements.
                      </p>
                      <p className="text-dark fs-6  fw-semibold">
                        Our focus is on delivering websites that are fast,
                        responsive, and visually appealing. With our WordPress
                        theme development service, you gain complete control
                        over your website, allowing you to expand the number of
                        pages as your business grows, all while maintaining the
                        highest quality standards. Our highly customizable
                        websites enable you to effortlessly add or edit content
                        without the need for extensive coding knowledge.
                      </p>
                      <p className="text-success fs-6 fw-semibold">
                        Partnering with{" "}
                        <b className="text-primary"> Gradico Global</b> ensures
                        your brand establishes a solid and impressive online
                        presence. Don't wait any longer! Reach out to us today
                        to take advantage of our exceptional WordPress theme and
                        plugin development services.
                      </p>
                    </div>
                    {/* Get The Best WordPress Development Services With Gradico global  */}
                    <div className="container">
                      <h2 className="mt-3 fw-bold text-secondary">
                        Get The Best WordPress Development Services With{" "}
                        <b className="text-primary"> Gradico Global</b>
                      </h2>
                      <p>
                        WordPress stands out as a user-friendly yet incredibly
                        powerful website management system, revolutionizing the
                        development experience. It offers a wide array of add-on
                        features and plugins that streamline the management of
                        WordPress websites, enhancing efficiency and ease of
                        use.
                      </p>
                      <p>
                        At <b className="text-primary"> Gradico Global</b>, we
                        take pride in being a leading custom WordPress
                        development company, catering to diverse organizations
                        worldwide. Our comprehensive services encompass
                        WordPress design and development, enabling businesses to
                        gain better control over their operational processes.
                      </p>
                      <p>
                        Through our WordPress development solutions, we aim to
                        create impactful digital experiences that directly
                        benefit your company. We firmly believe that every
                        interaction holds significance, and as a result, we
                        bring our expertise and passion to the table, working
                        diligently for your advantage.
                      </p>
                    </div>

                    <span>
                      <a
                        href="https://wa.me/9896549691"
                        className="btn btn-danger"
                        target="_blank"
                      >
                        {" "}
                        Need any Help? <BsFillTelephoneOutboundFill />
                      </a>
                    </span>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 3rd item Custom web Development */}
      <div id="item-1-2" className="CustomWebDev">
        <div className="row">
          <div className="col">
            <h2 className="mt-2 p-3 fw-semibold text-center">
              Custom Web Development
            </h2>
            <p className="mx-3 fw-semibold text-dark">
              At <b className="text-primary"> Gradico Global</b>, we strive for
              excellence in every aspect of our work. We meticulously analyze
              your requirements, conduct thorough research, and employ the
              latest development techniques to deliver results that exceed
              expectations. Our commitment to quality, attention to detail, and
              dedication to customer satisfaction set us apart as a trusted
              partner in the digital realm.
            </p>
            <p className="mx-3 text-dark fw-semibold">
              Whether you require an e-commerce platform, a corporate website, a
              web application, or any other custom web development project, we
              are here to bring your vision to life. We work closely with our
              clients, ensuring clear communication, transparency, and a
              collaborative approach throughout the development process.
            </p>
            <p className="mx-3 text-dark fw-bold">
              Our team of highly skilled developers and designers possess a deep
              understanding of cutting-edge technologies and industry best
              practices. We leverage this knowledge to craft websites that are
              not only visually stunning but also highly functional,
              user-friendly, and optimized for performance.
            </p>
            {/* Modal start Here for Custom web dev lern more button */}

            <button
              type="button"
              className="btn btn-danger mb-3 mx-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalCustom"
            >
              Learn More <BsBoxArrowInRight />
            </button>

            {/* Modal content */}
            <div
              className="modal fade"
              id="exampleModalCustom"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-4 fw-bold text-secondary"
                      id="exampleModalLabel"
                    >
                      {" "}
                      <span className="fs-1 text-dark">
                        <BsReverseLayoutTextWindowReverse />
                      </span>{" "}
                      Custom Web Development
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="fs-5 fw-semibold">
                      At <b className="text-primary"> Gradico Global,</b> we
                      offer comprehensive CMS (Content Management System) web
                      development services that empower businesses to
                      efficiently manage and update their website content. Our
                      team of experienced developers specializes in creating
                      dynamic, user-friendly, and scalable CMS solutions
                      tailored to our clients' specific needs.
                    </p>
                    <p className="fs-6 fw-semibold">
                      WordPress web development is an art form that combines
                      technical expertise, design prowess, and a deep
                      understanding of user experience. Whether you're an
                      entrepreneur looking to establish your brand, a blogger
                      seeking to share your voice, or a business owner aiming to
                      expand your online reach, WordPress offers an unparalleled
                      toolkit that can turn your vision into a pixel-perfect
                      reality.
                    </p>
                    {/* Why wordpress section start from here */}
                    <div className="container">
                      <h2 className="text-secondary fw-bold p-3">
                        Why Custom CMS ?
                      </h2>
                      <h4>
                        Custom development offers several advantages over
                        off-the-shelf solutions:
                      </h4>
                      <ul className="text-dark fw-semibold">
                        <li>
                          Tailored to Your Unique Needs: Custom development
                          allows you to create a solution that is specifically
                          designed to address your business requirements. It can
                          be built from scratch or customized to fit your exact
                          needs, ensuring that every feature and functionality
                          aligns perfectly with your goals.
                        </li>
                        <br />
                        <li>
                          Scalability and Flexibility: Custom solutions can
                          easily scale and adapt to accommodate your growing
                          business needs. You have the freedom to add new
                          features, integrate with other systems, and make
                          changes as your business evolves, without being
                          limited by the constraints of pre-built templates or
                          plugins.
                        </li>
                        <br />
                        <li>
                          Competitive Advantage: By developing a custom
                          solution, you can differentiate yourself from
                          competitors who may be using similar off-the-shelf
                          solutions. Customization allows you to create a unique
                          user experience, tailor-made to impress your target
                          audience and stand out in the market.
                        </li>
                        <br />
                        <li>
                          Enhanced Performance and Efficiency: With custom
                          development, you can optimize your solution for speed,
                          performance, and efficiency. By eliminating
                          unnecessary features and streamlining processes, you
                          can create a solution that is optimized for your
                          specific workflows, resulting in improved productivity
                          and user satisfaction.
                        </li>
                        <br />
                        <li>
                          Ownership and Control: With a custom solution, you
                          have complete ownership and control over the source
                          code, data, and infrastructure. You are not dependent
                          on a third-party provider for updates, bug fixes, or
                          feature enhancements. This gives you greater control
                          over the security, maintenance, and future development
                          of your solution.
                        </li>
                      </ul>
                      <p>
                        While custom development may require a higher upfront
                        investment compared to off-the-shelf solutions, the
                        long-term benefits, adaptability, and competitive
                        advantage it offers often outweigh the initial costs. It
                        empowers you to create a tailored solution that truly
                        meets your business needs and aligns with your strategic
                        objectives.
                      </p>
                      <p className="text-success fs-6 fw-semibold">
                        Partnering with{" "}
                        <b className="text-primary"> Gradico Global</b> ensures
                        your brand establishes a solid and impressive online
                        presence. Don't wait any longer! Reach out to us today
                        to take advantage of our exceptional WordPress theme and
                        plugin development services.
                      </p>
                    </div>
                    {/* Get The Best WordPress Development Services With Gradico global  */}
                    <div className="container">
                      <h4 className="mt-3 fw-bold text-secondary">
                        Using Our Custom WordPress Website Development Services
                        Gradico Global
                      </h4>
                      <h5>
                        WordPress Site Development Services for E-commerce
                      </h5>
                      <p>
                        By choosing{" "}
                        <b className="text-primary"> Gradico Global</b>, for
                        your WordPress development needs, you can rest assured
                        that we prioritize a seamless transition, safeguarding
                        your data and minimizing any disruption to your
                        operations. Our goal is to provide a unique and
                        hassle-free experience, enabling you to harness the full
                        potential of WordPress while maintaining the integrity
                        of your website and data.
                      </p>

                      <h5>Development Services for Custom WordPress Plugins</h5>
                      <p>
                        With the ability to design highly customised WordPress
                        plugins, our team of specialists can enhance the
                        functionality of websites. We guarantee that our
                        WordPress plugins will be SEO-friendly and function at
                        their peak because they are simple to integrate. These
                        plugins are extremely secure, bug-free, and compatible.
                      </p>

                      <h5>Theme Design Services for Wordpress</h5>
                      <p>
                        With our theme modification services, we transform
                        off-the-shelf WordPress themes into customized solutions
                        that meet your specific requirements. We understand that
                        every business has its own branding, style, and
                        functionality needs, and we work closely with you to
                        ensure that your WordPress site reflects your distinct
                        identity.
                      </p>
                    </div>

                    <h4 className="text-danger">
                      Why Should You Choose Gradico Global for Your Needs in
                      Custom WordPress Development?
                    </h4>
                    <p>
                      When it comes to custom web development, Gradico Global
                      stands out as the premier choice. Here are compelling
                      reasons why you should choose us for your custom web
                      development needs:
                    </p>
                    <ul className="text-semibold">
                      <li>Cutting-Edge Technologies</li>
                      <li>Quality Assurance</li>
                      <li>Expertise and Experience</li>
                      <li>Extremely Fast Pages</li>
                      <li>SEO-friendly websites</li>
                      <li>Agile Development Methodology</li>
                      <li>Ongoing Support and Maintenance</li>
                    </ul>
                    <p>
                      Choose Gradico Global as your custom web development
                      partner, and experience the difference that our expertise,
                      tailored solutions, and commitment to excellence can make
                      for your business. Let us transform your vision into a
                      high-performing, visually stunning, and user-friendly web
                      solution that drives your success.
                    </p>

                    <span>
                      <a
                        href="https://wa.me/9896549691"
                        className="btn btn-danger"
                        target="_blank"
                      >
                        {" "}
                        Need any Help? <BsFillTelephoneOutboundFill />
                      </a>
                    </span>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <img src={Img3} alt="img" width="100%" />
          </div>
        </div>
      </div>

      {/* 4th item Cms Web development  */}
      <div id="item-1-3" className="CmsWebDev">
        <div className="row">
          <div className="col">
            <img src={Img4} alt="img" width="100%" />
          </div>
          <div className="col">
            <h2 className="mt-2 p-2 fw-semibold text-center">
              CMS Web Development
            </h2>
            <p className="text-dark fw-semibold">
              At <b className="text-primary"> Gradico Global</b>, we offer
              comprehensive CMS (Content Management System) web development
              services that empower businesses to efficiently manage and update
              their website content. Our team of experienced developers
              specializes in creating dynamic, user-friendly, and scalable CMS
              solutions tailored to our clients' specific needs.
            </p>
            <p className="text-dark fw-semibold">
              With our CMS solutions, you can easily create, edit, and publish
              content, including text, images, videos, and more. The intuitive
              user interfaces of CMS platforms simplify content management
              tasks, enabling you to update your website with speed and ease.
            </p>
            <p className="text-dark fw-semibold">
              Furthermore, our CMS web development services prioritize
              scalability and flexibility. As your business grows, your CMS
              website can seamlessly accommodate increased traffic, new
              features, and expanded content without compromising performance.
            </p>
            <p className="text-dark fw-bold">
              Partnering with us for CMS web development ensures a seamless user
              experience, improved efficiency in content management, and a
              website that reflects your brand's unique identity.{" "}
            </p>
            {/* Modal start Here for wordpress lern more button */}
            <button
              type="button"
              className="btn btn-danger mb-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1CMS"
            >
              Learn More <BsBoxArrowInRight />
            </button>

            {/* Modal content */}
            <div
              className="modal fade"
              id="exampleModal1CMS"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-4 fw-bold text-secondary"
                      id="exampleModalLabel"
                    >
                      <BsCalendar3Range /> CMS Web Development
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="fs-5 fw-semibold">
                      When it comes to CMS (Content Management System) web
                      development, Gradico Global is your trusted partner.
                      Here's why you should choose us for your CMS web
                      development needs:
                    </p>
                    <ol>
                      <li>
                        {" "}
                        <b> Comprehensive Expertise: </b>Gradico Global boasts a
                        team of skilled professionals with in-depth knowledge
                        and expertise in CMS web development. We have extensive
                        experience working with popular CMS platforms such as
                        WordPress, Drupal, Joomla, and more. Our developers have
                        a deep understanding of the intricacies and capabilities
                        of these systems, enabling us to deliver exceptional CMS
                        solutions.
                      </li>
                      <br />
                      <li>
                        {" "}
                        <b> Tailored Solutions: </b> We understand that every
                        business has unique content management requirements. At
                        Gradico Global, we take a customized approach to CMS web
                        development. We work closely with you to understand your
                        specific needs, goals, and target audience. Based on
                        this understanding, we tailor the CMS solution to meet
                        your specific requirements, ensuring a seamless and
                        efficient content management experience.
                      </li>
                      <br />
                      <li>
                        {" "}
                        <b> User-Friendly Interfaces: </b> Our team of designers
                        and developers create intuitive and user-friendly
                        interfaces for your CMS website. We focus on designing
                        interfaces that are visually appealing, easy to
                        navigate, and optimized for efficient content
                        management. By prioritizing usability, we empower you to
                        easily create, edit, and publish content without the
                        need for extensive technical knowledge.
                      </li>
                      <br />
                      <li>
                        {" "}
                        <b> Scalability and Flexibility: </b> With Gradico
                        Global's CMS web development services, your website can
                        grow alongside your business. We build scalable and
                        flexible CMS solutions that can accommodate increased
                        traffic, new features, and expanding content. Whether
                        you need to add new pages, integrate third-party
                        applications, or enhance functionalities, our CMS
                        solutions can seamlessly adapt to your evolving needs.
                      </li>
                    </ol>
                    <p>
                      Choose Gradico Global for your CMS web development
                      requirements, and experience the benefits of our
                      comprehensive expertise, tailored solutions, user-friendly
                      interfaces, scalability, integration capabilities, and
                      ongoing support. Let us empower you to efficiently manage
                      your website content and elevate your online presence with
                      a robust and dynamic CMS solution.
                    </p>
                    <span>
                      <a
                        href="https://wa.me/9896549691"
                        className="btn btn-danger"
                        target="_blank"
                      >
                        {" "}
                        Need any Help? <BsFillTelephoneOutboundFill />
                      </a>
                    </span>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 5th item ecommerce Web development  */}
      <div id="item-1-4" className="eCommWebDev">
        <div className="row">
          <div className="col">
            <h2 className="mt-2 p-3 fw-semibold text-center">
              eCommerce Web Development
            </h2>
            <p className="fw-bold mx-3">
              At <b className="text-danger"> Gradico Global,</b> we specialize
              in delivering exceptional eCommerce web development solutions that
              enable businesses to thrive in the digital marketplace
            </p>
            <p className="text-dark fw-semibold mx-3">
              In an eCommerce environment, businesses typically set up online
              stores or digital platforms where they showcase their products or
              services. Customers can browse through these platforms, view
              product details, compare prices, and make purchases using secure
              payment gateways. The transactions are facilitated electronically,
              eliminating the need for physical stores or face-to-face
              interactions.
            </p>
            <p className="text-dark fw-semibold mx-3">
              For consumers, eCommerce provides convenience and accessibility.
              It allows them to shop from the comfort of their homes or
              on-the-go, saving time and effort. Customers have access to a vast
              array of products and services from various sellers, enabling them
              to make informed decisions and compare prices easily. Online
              reviews and ratings provide valuable insights into the quality and
              credibility of products and sellers.
            </p>
            {/* Modal start Here for wordpress lern more button */}
            <button
              type="button"
              className="btn btn-danger mb-3 mx-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalEcomm"
            >
              Learn More <BsBoxArrowInRight />
            </button>

            {/* Modal content */}
            <div
              className="modal fade"
              id="exampleModalEcomm"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-4 fw-bold text-secondary"
                      id="exampleModalLabel"
                    >
                      <BsCartPlusFill /> eCommerce Web Development
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="fw-bold">
                      eCommerce refers to the online buying and selling of goods
                      and services, providing businesses and consumers with a
                      convenient and efficient way to engage in commercial
                      transactions. It offers a wide range of benefits,
                      including global reach, convenience, accessibility, and
                      cost savings, revolutionizing the way we shop and do
                      business.
                    </p>
                    <p className="fs-5 fw-semibold">
                      At Gradico Global, we specialize in delivering exceptional
                      eCommerce web development solutions that enable businesses
                      to thrive in the digital marketplace. Here's why you
                      should choose us for your eCommerce web development needs:
                    </p>
                    <ol>
                      <li>
                        Expertise in eCommerce Platforms: Our team of skilled
                        developers has extensive experience working with popular
                        eCommerce platforms such as Magento, Shopify,
                        WooCommerce, and more. We possess in-depth knowledge of
                        these platforms, allowing us to build robust and
                        scalable eCommerce websites tailored to your specific
                        requirements.
                      </li>
                      <br />
                      <li>
                        Customized Solutions: We understand that every business
                        has unique eCommerce needs. That's why we take a
                        personalized approach to eCommerce web development. Our
                        team works closely with you to understand your target
                        audience, products, and business goals. Based on this
                        understanding, we create a customized eCommerce solution
                        that aligns perfectly with your brand and delivers a
                        seamless shopping experience for your customers.
                      </li>
                      <br />
                      <li>
                        User-Friendly Interfaces: We prioritize creating
                        intuitive and user-friendly interfaces for your
                        eCommerce website. Our designers focus on delivering
                        visually appealing designs that engage customers and
                        make it easy for them to navigate your online store. By
                        optimizing the user experience, we enhance customer
                        satisfaction, increase conversions, and drive business
                        growth.
                      </li>
                      <br />
                      <li>
                        Secure and Scalable Solutions: We understand the
                        importance of security in eCommerce. Our developers
                        implement robust security measures to safeguard your
                        customers' sensitive information and protect your online
                        store from potential threats. Additionally, our
                        eCommerce solutions are built with scalability in mind,
                        allowing your website to handle increased traffic,
                        accommodate product expansions, and support future
                        growth.
                      </li>
                      <br />
                      <li>
                        Mobile-Friendly Design: We ensure that your eCommerce
                        website is fully responsive and optimized for mobile
                        devices. With the increasing use of smartphones for
                        online shopping, we create mobile-friendly designs that
                        provide an excellent user experience across all screen
                        sizes. This helps you reach a wider audience and
                        maximize your sales potential.
                      </li>
                      <br />
                      <li>
                        Ongoing Support and Maintenance: Our commitment to your
                        success doesn't end with the development of your
                        eCommerce website. We provide ongoing support and
                        maintenance services to ensure that your online store
                        operates smoothly. Our dedicated support team is
                        available to address any issues, provide updates, and
                        assist you with any future enhancements or
                        optimizations.
                      </li>
                    </ol>
                    <p>
                      Choose Gradico Global for your eCommerce web development,
                      and let us help you establish a powerful and successful
                      online store. With our expertise, customized solutions,
                      user-friendly interfaces, secure and scalable platforms,
                      integration capabilities, mobile-friendly design, and
                      ongoing support, we are your ideal partner in eCommerce
                      success.
                    </p>

                    <span>
                      <a
                        href="https://wa.me/9896549691"
                        className="btn btn-danger"
                        target="_blank"
                      >
                        {" "}
                        Need any Help? <BsFillTelephoneOutboundFill />
                      </a>
                    </span>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <img src={Img5} alt="img" width="100%" />
          </div>
        </div>
      </div>
      {/* 6th item reactjs Web development  */}
      <div id="item-1-5" className="MernWebDev">
        <div className="row">
          <div className="col ForMernImgBackground">
            <img src={Img6} alt="img" width="100%" />
          </div>
          <div className="col">
            <h2 className="mt-2 p-3 fw-semibold text-center">
              FULL STACK Web Development
            </h2>
            <p>
              The term "full stack" refers to the complete stack of technologies
              and frameworks involved in web development, encompassing both the
              front end and back end. This includes languages such as HTML, CSS,
              and JavaScript for the front end, as well as server-side languages
              like Python, Ruby, PHP, or JavaScript (with frameworks like
              Node.js) for the back end. Additionally, full stack developers are
              knowledgeable about databases, such as MySQL or MongoDB, and have
              an understanding of version control systems, web servers, and
              deployment processes.
            </p>
            <p>
              <b className="text-success fw-bold"> At Gradico Global!,</b> we
              take pride in offering comprehensive full stack web development
              services. Our team of experienced full stack developers possesses
              the expertise and skills necessary to handle every aspect of web
              development, from front end to back end, ensuring a seamless and
              efficient development process Here's why you should choose Gradico
              Global for your full stack web development needs:{" "}
              <b>
                Tech We Use <FaAngleDoubleDown />
              </b>
            </p>
            <div className="container  p-3 fw-bold fs-2 mb-2">
              <div className="row">
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="HTML">
                    <FaHtml5 />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="CSS">
                    <FaCss3Alt />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="JavaScript">
                    <FaJsSquare />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Reactjs">
                    <FaReact />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="NodeJs">
                    <FaNodeJs />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Bootstrap">
                    <FaBootstrap />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Sass">
                    <FaSass />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Wordpress">
                    <FaWordpress />
                  </span>
                </div>
              </div>
              <div className="row my-3">
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Java">
                    <FaJava />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Php"> 
                    <FaPhp />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Laravel">
                    <FaLaravel />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Tailwindcss">
                    <SiTailwindcss />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Mysql">
                    <SiMysql />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Mongodb">
                    <SiMongodb />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Material UI">
                    <SiMui />
                  </span>
                </div>
                <div className="col">
                  <span className="shadow rounded-pill p-2" title="Firebase">
                    <SiFirebase />
                  </span>
                </div>
              </div>
            </div>

            {/* Modal start Here for wordpress lern more button */}
            <button
              type="button"
              className="btn btn-danger mb-3"
              data-bs-toggle="modal"
              data-bs-target="#exampleModalFullStack"
            >
              Learn More <BsBoxArrowInRight />
            </button>

            {/* Modal content */}
            <div
              className="modal fade"
              id="exampleModalFullStack"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-xl">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1
                      className="modal-title fs-4 fw-bold text-secondary"
                      id="exampleModalLabelFullStack"
                    >
                      FULL STACK Web Development
                    </h1>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <p className="fs-6">
                      Full stack web development refers to the process of
                      building web applications or websites that involve working
                      on both the front end and back end components. A full
                      stack web developer is proficient in handling all the
                      layers of a web application, including the server-side
                      programming, database management, and client-side
                      interfaces.
                    </p>
                    <p>
                      <b className="text-success fw-bold fw-2">
                        {" "}
                        At Gradico Global!,
                      </b>{" "}
                      we take pride in offering comprehensive full stack web
                      development services. Our team of experienced full stack
                      developers possesses the expertise and skills necessary to
                      handle every aspect of web development, from front end to
                      back end, ensuring a seamless and efficient development
                      process the expertise and skills necessary to handle every
                      aspect of web development, from front end to back end,
                      ensuring a seamless and efficient development process.
                      Here's why you should choose Gradico Global for your full
                      stack web development needs:
                    </p>

                    <ol>
                      <li>
                        Extensive Technical Knowledge: Our team is well-versed
                        in a wide range of programming languages, frameworks,
                        and tools used in full stack development. We have
                        in-depth knowledge of front end technologies such as
                        HTML, CSS, and JavaScript, as well as popular JavaScript
                        libraries and frameworks like React, Angular, and
                        Vue.js. On the back end, we are proficient in languages
                        like Python, Ruby, PHP, and JavaScript (with frameworks
                        like Node.js), enabling us to develop robust server-side
                        applications and APIs. Additionally, we are skilled in
                        database management and have experience working with
                        various database systems.
                      </li>
                      <br />
                      <li>
                        Customized Solutions: We understand that each project
                        has unique requirements and objectives. That's why we
                        take a tailored approach to full stack web development.
                        We work closely with our clients to understand their
                        specific needs and business goals, allowing us to create
                        customized solutions that meet their exact requirements.
                        From designing visually appealing user interfaces to
                        developing scalable back end systems, we ensure that
                        every aspect of the project aligns with our clients'
                        vision.
                      </li>
                      <br />
                      <li>
                        Quality Assurance and Testing: We have a dedicated
                        quality assurance team that conducts rigorous testing to
                        ensure the functionality, performance, and security of
                        the web applications we develop. We adhere to industry
                        best practices and conduct thorough testing across
                        different devices, browsers, and user scenarios, leaving
                        no room for errors or vulnerabilities.
                      </li>
                      <br />
                      <li>
                        Ongoing Support and Maintenance: Our commitment to our
                        clients extends beyond the development phase. We provide
                        ongoing support and maintenance services to ensure that
                        our clients' web applications operate smoothly and
                        securely. We offer timely updates, bug fixes, security
                        enhancements, and performance optimizations to keep the
                        applications up to date and running at their best.
                      </li>
                    </ol>
                    <p>
                      By choosing Gradico Global for your full stack web
                      development needs, you can be confident in receiving
                      top-notch services that cover the entire web development
                      stack. We combine technical expertise, customized
                      solutions, seamless integration, agile methodologies,
                      quality assurance, and ongoing support to deliver web
                      applications that are highly functional, visually
                      appealing, and aligned with your business objectives.
                      Partner with us to bring your full stack web development
                      projects to life and take your online presence to new
                      heights.
                    </p>

                    <div className="bg-dark w-100 mb-2">
                      <TechWeUse />
                    </div>

                    <span>
                      <a
                        href="https://wa.me/9896549691"
                        className="btn btn-danger"
                        target="_blank"
                      >
                        {" "}
                        Need any Help? <BsFillTelephoneOutboundFill />
                      </a>
                    </span>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
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

export default WebDevelopment;
