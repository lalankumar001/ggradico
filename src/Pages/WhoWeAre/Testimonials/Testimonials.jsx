// import React from 'react'
// import ReviewImg from '../../../assets/bg-testimonial.jpg'
// import Img1 from '../../../assets/author1.jpg'
// import Img2 from '../../../assets/author2.jpg'
// import Img3 from '../../../assets/author3.jpg'
// import './Testimonials.css'

// const Testimonials = () => {
//   return (
//     <div className='mt-5 p-4'>
//       <div className='p-5'>
//     <h1 className='text-center fw-bold text-secondary'> Our Clients Testimonials </h1>
//       </div>

// <div>
// <div className='container'>
// {/* Clients testimonials section  */}
//                  <div className='row'>
//                       <div className='col Testimonial_img'>
//                         <img src={ReviewImg} alt="img" width='700' height='500' className='rounded' />
//                       </div>
//  {/* Clients Review with his/her image */}
//                       <div className='col Testimonial shadow border rounded'>
//                       <p className='fs-1 fw-bold text-secondary'>Our Clients Review </p>

//               <div id="carouselExampleDark" className="carousel carousel-dark slide">
//   <div className="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div className="carousel-inner">
//     <div className="carousel-item active" data-bs-interval="1000">
//       <img src={Img1} className="d-block w-100 rounded pill" alt="img" />
//       <div className="carousel-caption d-none d-md-block">
//         <h5 className='fs-1 text-dark fw-bold'>Jon</h5>
//         <p className='text-danger fw-semibold'> Some representative placeholder content for the first slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item" data-bs-interval="2000">
//       <img src={Img2} className="d-block w-100 rounded pill" alt="..." />
//       <div className="carousel-caption d-none d-md-block">
//       <h5 className='fs-1 text-dark fw-bold'>Akash</h5>
//         <p>Some representative placeholder content for the second slide.</p>
//       </div>
//     </div>
//     <div className="carousel-item">
//       <img src={Img3} className="d-block w-100 rounded pill" alt="..." />
//       <div className="carousel-caption d-none d-md-block ">
//       <h5 className='fs-1 text-dark fw-bold'>Tarun</h5>
//         <p>Some representative placeholder content for the third slide.</p>
//       </div>
//     </div>
//   </div>
//   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
//     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Previous</span>
//   </button>
//   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
//     <span className="carousel-control-next-icon" aria-hidden="true"></span>
//     <span className="visually-hidden">Next</span>
//   </button>
// </div>
//                       </div>
//                  </div>
//           </div>

// </div>

//       </div>
//   )
// }

// export default Testimonials

import React, { useState, useEffect } from "react";
import "./Testimonials.css";
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      client: "ABC Corporation",
      URL:'https://www.freepik.com/free-psd/instagram-social-media-feed-template-we-are-hiring_25424091.htm#query=hiring&position=10&from_view=keyword&track=sph',
      testimonial:
        "We have been relying on the exceptional cyber security services provided by XYZ Security for several years now. Their team's expertise and proactive approach have helped us identify and address vulnerabilities, ensuring our sensitive data remains protected. We highly recommend their services.",
    },
    {
      id: 2,
      client: "DEF Company",
      URL:'https://www.freepik.com/free-psd/instagram-social-media-feed-template-we-are-hiring_25424091.htm#query=hiring&position=10&from_view=keyword&track=sph',
      testimonial:
        "Working with XYZ Security has been a game-changer for our organization. Their comprehensive security consulting helped us establish robust security protocols, and their incident response team was instrumental in minimizing the impact of a recent cyber attack. We are grateful for their expertise.",
    },
    // Add more testimonials here...
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="testimonial">
    <div className="mt-5 p-5">
      <div className="container">
        <h1>Client Testimonials</h1>
        <div className="testimonial">
          <div className="testimonial-text">
            <p>{testimonials[activeTestimonial].testimonial}</p>
          </div>
          <div className="testimonial-info">
            <h5>{testimonials[activeTestimonial].name}</h5>
            <p>{testimonials[activeTestimonial].designation}</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;
