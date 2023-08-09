
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
