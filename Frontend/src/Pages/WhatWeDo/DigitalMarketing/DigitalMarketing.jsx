import React from "react";
import Img1 from "../../../assets/DigitalMarketing/digital.jpg";
import Img2 from "../../../assets/DigitalMarketing/SEO.jpg";
import Img3 from "../../../assets/DigitalMarketing/OnlineRmarketing.jpg";
import Img4 from "../../../assets/DigitalMarketing/Payperclick.jpg";
import Img5 from "../../../assets/DigitalMarketing/Cro.jpg";
import Img6 from "../../../assets/DigitalMarketing/EmailMarketing.jpg";
import Img7 from "../../../assets/DigitalMarketing/ContentMarketing.jpg";
import Img8 from "../../../assets/DigitalMarketing/SocialMediaMarkeeting.jpg";
import Img9 from "../../../assets/DigitalMarketing/Analysis.jpg";

// Icons from react icon
import {
  BsFillArrowRightCircleFill,
  BsFillTelephoneOutboundFill,
  BsFillKeyFill,
  BsFillFastForwardFill,
} from "react-icons/bs";

import "./DigitalMarketing.css";

const DigitalMarketing = () => {
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
                    D
                  </span>
                  igital Marketing
                </a>
                <nav className="nav nav-pills flex-column">
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-1"
                  >
                    Search Engine Optimization
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-2"
                  >
                    Online Reputation Management
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-3"
                  >
                    Pay-Per-Click Advertising
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-4"
                  >
                    Conversion Rate Optimization
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-5"
                  >
                    Email Marketing
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-6"
                  >
                    Content Marketing
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-7"
                  >
                    Social Media Marketing
                  </a>
                  <a
                    className="nav-link text-dark fw-bold ms-3 my-1 btn btn-success"
                    href="#item-1-8"
                  >
                    Analytics and Reporting
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
                  <b>D</b>igital Marketing Services
                </h2>
                <div className="row">
                  <div className="col mt-3">
                    <p className="text-secondary fw-semibold">
                      Welcome to{" "}
                      <b className="text-success">GRADICOGLOBAL !, </b>
                      your one-stop destination for top-notch digital marketing
                      services. In today's fast-paced and ever-evolving digital
                      landscape, having a strong online presence is essential
                      for businesses to thrive and succeed. That's where we come
                      in.
                    </p>
                    <p>
                      At Gradico Global, we specialize in delivering
                      comprehensive and results-driven digital marketing
                      solutions that help businesses reach their full potential.
                      Our team of seasoned experts is passionate about
                      leveraging the power of digital platforms to drive growth,
                      increase brand visibility, and generate meaningful
                      engagement with your target audience.
                    </p>
                    <p>
                      Our digital marketing services cover a wide spectrum of
                      strategies and techniques to meet the unique needs and
                      goals of your business. Whether you're a small startup or
                      a large enterprise, we have the expertise and resources to
                      tailor a digital marketing plan that suits your
                      requirements and delivers exceptional results.
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
          <div id="item-1-1" className="bg-primary">
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
                  Search Engine Optimization (SEO)
                </h2>
                <p className="text-light">
                  Welcome to{" "}
                  <b className="text-primary fw-bold"> At Gradico Global !, </b>
                  SEO (Search Engine Optimization) is a critical component of
                  digital marketing that focuses on optimizing a website's
                  visibility and ranking in search engine results pages. At
                  Gradico Global, we specialize in providing comprehensive and
                  effective SEO services to help businesses increase organic
                  traffic, improve search engine rankings, and enhance their
                  online presence.
                </p>
                <p className="text-white">
                  At Gradico Global, we stay up-to-date with the latest SEO
                  trends, algorithms, and best practices to ensure that your
                  website remains at the forefront of search engine rankings.
                  Our dedicated SEO team combines expertise,
                </p>
                <p className="text-light">
                  Certainly! SEO (Search Engine Optimization) is a digital
                  marketing strategy focused on improving a website's visibility
                  and ranking in organic (non-paid) search engine results. It
                  involves optimizing various aspects of a website, including
                  its content, structure, and technical elements, to align with
                  search engine algorithms and provide the best possible user
                  experience.
                </p>
                <div className="container">
                  <p className="text-info fw-bold">
                    <strong>
                      <BsFillKeyFill />
                    </strong>{" "}
                    Here's an overview of our SEO approach and the benefits it
                    can bring to your business:
                  </p>
                  <ul className="text-info">
                    <li>
                      <BsFillFastForwardFill /> Keyword Research
                    </li>
                    <li>
                      <BsFillFastForwardFill /> On-Page Optimization (CMS)
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Content Optimization
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Link Building
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Technical SEO
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Local SEO
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Monitoring and Reporting
                    </li>
                  </ul>

                  {/* end row */}
                </div>
              </div>
            </div>
          </div>
          {/*2nd row   */}
          <div id="item-1-2" className="OnlineRManagement">
            <div className="row" data-aos="zoom-in-up">
              <div className="col">
                <h2 className="mt-2 p-3 fw-semibold text-center">
                  Online Reputation Management
                </h2>
                <p>
                  <span className="fs-2 fw-bold">W</span>e monitor and manage
                  your online reputation to ensure a positive brand image. Our
                  team actively tracks mentions, reviews, and customer feedback
                  across online platforms, responds to inquiries and concerns,
                  and implements strategies to build a strong online reputation
                  and mitigate negative sentiment.
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
                  With our dedicated team of ORM professionals, Gradico Global
                  is committed to assisting individuals and businesses in
                  maintaining a positive online reputation. We understand the
                  importance of a strong online presence and work diligently to
                  protect our clients' reputation, build trust among their
                  target audience, and drive long-term success.
                </p>
                <div className="container">
                  <p className="text-dark fw-bold">
                    <strong>
                      <BsFillKeyFill />
                    </strong>{" "}
                    With our expertise in ORM, we assist our clients in the
                    following ways:
                  </p>

                  <ul className="text-dark">
                    <li>
                      <BsFillFastForwardFill /> Reputation Assessment
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Reputation Building (CMS)
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Review Management
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Social Media Monitoring and
                      Engagement
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Content Creation and Promotion
                    </li>
                    <li>
                      <BsFillFastForwardFill /> Crisis Management
                    </li>
                    <li>
                      <BsFillFastForwardFill /> SEO Integration
                    </li>
                  </ul>
                </div>
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
              <div className="col ForOnlineRmImgBackground">
                <img src={Img3} alt="img" width="100%" />
              </div>
            </div>
          </div>
        </div>
        {/* 3rd row */}
        <div id="item-1-3">
          <div className="row" data-aos="zoom-in-up">
            <div className="col ForWebConvertingImgBackground">
              <img src={Img4} alt="img" width="100%" />
            </div>
            <div className="col">
              <h2 className="mt-2 p-3 fw-semibold text-center">
                Pay-Per-Click Advertising
              </h2>
              <p>
                If you're looking to target a local or international audience,
                incorporating a well-planned pay-per-click (PPC) marketing
                strategy is essential for your promotional efforts. With its
                ability to drive targeted traffic from your desired regions, PPC
                can work wonders for your marketing campaigns. At Gradico
                global, we specialize in providing top-notch PPC services,
                implementing best practices to help you achieve your goals
                effectively.
              </p>
              <p>
                Pay-Per-Click advertising offers businesses a way to generate
                immediate visibility, drive targeted traffic, and achieve
                specific marketing objectives. At Gradico Global, we specialize
                in creating and managing effective PPC campaigns tailored to our
                clients' goals. Through strategic keyword selection, ad
                creation, and ongoing campaign optimization, we help businesses
                maximize their online visibility, increase conversions, and
                achieve a high return on their advertising investment.
              </p>
              <p>
                Pay-Per-Click (PPC) advertising is a digital marketing model in
                which advertisers pay a fee each time their ad is clicked. It is
                a highly targeted and cost-effective method of advertising that
                allows businesses to reach their target audience and drive
                relevant traffic to their websites.
              </p>
              <p>
                <span className="fs-3">W</span>ith our dedication to delivering
                exceptional results, Gradico global is committed to helping your
                business thrive in the competitive digital landscape. Let us
                take your PPC marketing efforts to new heights, attracting
                quality traffic, enhancing brand visibility, and driving
                conversions that will contribute to your long-term success.
              </p>
              <div className="container">
                <p className="text-danger fw-bold">
                  <strong>
                    <BsFillKeyFill />
                  </strong>{" "}
                  Key aspects of Pay-Per-Click advertising:
                </p>
                <div className="row">
                  <div className="col fw-semibold">
                    <ul>
                      <li>
                        <BsFillFastForwardFill /> Ad Placement
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Keyword Targeting
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Ad Auctions
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Cost Structure
                      </li>
                    </ul>
                  </div>
                  <div className="col fw-semibold">
                    <ul>
                      <li>
                        <BsFillFastForwardFill /> Ad Formats
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Ad Campaign Management
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Targeting Options
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
                Conversion Rate Optimization
              </h2>
              <p>
                By investing in Conversion Rate Optimization, businesses can
                improve the effectiveness of their online marketing efforts,
                increase customer acquisition, and maximize the return on their
                marketing investments. At Gradico Global, we specialize in CRO
                strategies that are tailored to your business goals. Our team of
                experts will analyze your website, identify areas for
                improvement, and implement data-driven strategies to boost your
                conversion rates and overall business success.
              </p>
              <p>
                Conversion Rate Optimization (CRO) is a process that focuses on
                improving the percentage of website visitors who take a desired
                action, such as making a purchase, filling out a form, or
                subscribing to a newsletter. It involves analyzing user
                behavior, identifying barriers to conversion, and implementing
                strategies to optimize the website or landing page for maximum
                conversions.
              </p>
              <div className="container">
                <p className="text-danger fw-bold">
                  <strong>
                    <BsFillKeyFill />
                  </strong>
                  Key aspects of Conversion Rate Optimization (CRO):
                </p>
                <div className="row">
                  <div className="col fw-semibold">
                    <ul>
                      <li>
                        <BsFillFastForwardFill /> Data Analysis
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Conversion Funnel Analysis
                      </li>
                      <li>
                        <BsFillFastForwardFill /> A/B Testing
                      </li>
                      <li>
                        <BsFillFastForwardFill /> User Experience Optimization
                      </li>
                    </ul>
                  </div>
                  <div className="col fw-semibold">
                    <ul>
                      <li>
                        <BsFillFastForwardFill /> Landing Page Optimization
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Persuasive Copywriting
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Trust and Credibility Building
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Continuous Monitoring and
                        Optimization
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
        {/* 5th row */}
        <div id="item-1-5">
          <div className="row" data-aos="zoom-in-up">
            <div className="col ForCmsImgBackground">
              <img src={Img6} alt="img" width="100%" />
            </div>
            <div className="col">
              <h2 className="mt-2 p-3 fw-semibold text-center">
                Email Marketing
              </h2>
              <p>
                In the digital era, effective marketing relies on the right
                strategies and channels to reach your target audience. With the
                rapid growth of websites and social media platforms, businesses
                and service providers must utilize these popular platforms to
                connect with their customers. While traditional marketing
                methods like newspapers, television ads, and billboards still
                exist, they don't guarantee the attention of potential buyers.
                You may assume that your advertisement has been seen, but
                there's no guarantee.
              </p>
              <p>
                At Gradico Global, we understand the evolving landscape of
                marketing in the web world. We specialize in leveraging the
                power of digital platforms to ensure your brand and message
                resonate with your target audience. By utilizing data-driven
                strategies and innovative techniques, we help you achieve
                maximum visibility, engagement, and conversions.
              </p>
              <p>
                Email marketing remains an effective and direct way to engage
                with your audience, build brand loyalty, and drive conversions.
                At Gradico Global, we specialize in creating and implementing
                successful email marketing campaigns. From list building to
                campaign creation, segmentation, and performance analysis, our
                team of experts will help you leverage the power of email
                marketing to nurture relationships, boost engagement, and drive
                business growth.
              </p>
              <div className="container">
                <p className="text-danger fw-bold">
                  <strong>
                    <BsFillKeyFill />
                  </strong>{" "}
                  Key aspects of our Email Marketing:
                </p>
                <div className="row">
                  <div className="col fw-semibold">
                    <ul>
                      <li>
                        <BsFillFastForwardFill /> Building an Email List
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Segmentation and
                        Personalization
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Email Campaign Creation
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Automated Email Workflows
                      </li>
                    </ul>
                  </div>
                  <div className="col fw-semibold">
                    <ul>
                      <li>
                        <BsFillFastForwardFill /> Drip Campaigns
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Email Analytics and Tracking
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Compliance and Consent
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Testing and Optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 6th row */}
        <div id="item-1-6">
          <div className="row shadow" data-aos="zoom-in-up">
            <div className="col">
              <h2 className="mt-2 p-3 fw-semibold text-center">
                Content Marketing
              </h2>
              <p>
                <span className="fs-2">C</span>ontent marketing is an effective
                long-term strategy that helps businesses connect with their
                audience, build brand loyalty, and drive conversions. At Gradico
                Global, we specialize in developing comprehensive content
                marketing strategies tailored to your business goals. Our team
                of experts will create compelling and valuable content, optimize
                it for search engines, and distribute it strategically to
                attract, engage, and convert your target audience. Let us help
                you harness the power of content marketing to strengthen your
                brand, drive organic traffic, and achieve business growth.
              </p>
              <p>
                Content marketing is a strategic approach that focuses on
                creating and distributing valuable, relevant, and consistent
                content to attract and engage a target audience. It aims to
                build brand awareness, establish credibility, nurture
                relationships, and ultimately drive profitable customer actions.
              </p>
              <p className="text-danger fw-bold">
                {" "}
                <strong>
                  {" "}
                  <BsFillKeyFill />
                </strong>{" "}
                Key features of our Content Marketing services include:
              </p>
              <div className="container">
                <div className="row">
                  <div className="col">
                    <ul className="text-dark mt-3">
                      <li>
                        <BsFillFastForwardFill /> Content Creation
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Audience Research
                      </li>

                      <li>
                        <BsFillFastForwardFill /> Leadership & Brand Authority
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Search Engine Optimization
                        (SEO)
                      </li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul className="text-dark mt-3">
                      <li>
                        <BsFillFastForwardFill /> Content Distribution
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Content Strategy
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Engagement and Interaction
                      </li>
                      <li>
                        <BsFillFastForwardFill /> Analytics and Measurement
                      </li>
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
        <br />
        {/* 7th row */}
        <div id="item-1-7">
          <div className="row" data-aos="zoom-in-up">
            <div className="col ForCmsImgBackground">
              <img src={Img8} alt="img" width="100%" />
            </div>
            <div className="col">
              <h2 className="mt-2 p-3 fw-semibold text-center">
                Social Media Marketing
              </h2>
              <p>
                <b className="fs-2">S</b>ocial media marketing is a powerful
                strategy that utilizes social media platforms to connect with
                your target audience, build brand awareness, engage users, and
                drive business growth. It involves creating and sharing content,
                engaging with followers, running targeted advertising campaigns,
                and analyzing data to optimize your social media efforts.
              </p>
              <p>
                At Gradico Global, we specialize in social media marketing
                strategies tailored to your business objectives. Our team of
                experts will develop a comprehensive plan, create compelling
                content, manage your social media presence, and analyze data to
                optimize your social media campaigns. Let us help you leverage
                the power of social media to build brand awareness, engage your
                audience, and drive meaningful results for your business.
              </p>
              <p>
                Paid social media advertising allows you to reach a wider
                audience and target specific demographics, interests, or
                behaviors. Platforms like Facebook, Instagram, Twitter, and
                LinkedIn offer powerful advertising tools that can help drive
                traffic, increase conversions, and boost brand visibility.
              </p>

              <div className="container">
                <p className="text-danger fw-bold">
                  {" "}
                  <strong>
                    {" "}
                    <BsFillKeyFill />
                  </strong>{" "}
                  Key features of our social media marketing services:
                </p>
                <ul className="text-success">
                  <li>
                    <BsFillFastForwardFill /> Social Media Strategy
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Content Creation
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Community Engagement
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Social Media Advertising
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Influencer Marketing
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Social Listening and Monitoring
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Analytics and Measurement
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Social Media Trends and Updates
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* 8th row */}
        <div id="item-1-8">
          <div className="row shadow" data-aos="zoom-in-up">
            <div className="col">
              <h2 className="mt-2 p-3 fw-semibold text-center">
                Analytics and Reporting
              </h2>
              <p>
                At Gradico Global, we understand the importance of analytics and
                reporting in measuring the success of digital marketing
                campaigns. Our team utilizes industry-leading analytics
                platforms and data visualization tools to collect, analyze, and
                report on key metrics. We provide comprehensive reports that
                offer actionable insights and recommendations to drive
                continuous improvement and achieve your marketing goals. Let us
                help you harness the power of analytics and reporting to
                maximize the effectiveness of your marketing efforts and drive
                meaningful results for your business.
              </p>
              <p>
                Analyzing the collected data helps you assess the performance of
                your marketing campaigns and initiatives. By comparing metrics
                over time, segmenting data by various dimensions (such as
                demographics or traffic sources), and conducting A/B testing,
                you can gain valuable insights into what is working well and
                where improvements are needed.
              </p>
              <div className="container">
                <p className="text-danger fw-bold">
                  {" "}
                  <strong>
                    {" "}
                    <BsFillKeyFill />
                  </strong>{" "}
                  Our analytics and reporting in the context of digital
                  marketing Services including:
                </p>
                <ul className="text-success">
                  <li>
                    <BsFillFastForwardFill /> Data Collection
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Key Metrics
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Analytics Platforms
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Data Visualization
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Performance Analysis
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Goal Tracking
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Analytics and Reporting
                  </li>
                  <li>
                    <BsFillFastForwardFill /> Optimization and Iteration
                  </li>
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
  );
};

export default DigitalMarketing;
