import React from "react";
import teamImg from '../../../assets/Team/Team.jpg';
import ContactUs from "../../ContactUs/ContactUs";
import "./OurTeam.css";

const OurTeam = () => {
  return (
 <div>
  <img src={teamImg} alt="img"width="100%" />
  {/* contact us page */}
 <div className='p-3 bg-primary'>
 <h1 className="text-dark fw-bold text-center">
   Have Some Questions? Get in touch
 </h1>
 <ContactUs />
  </div>
    </div>
  );
};

export default OurTeam;

