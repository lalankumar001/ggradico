import React from "react";
import teamImg from '../../../assets/Team/Team.jpg';
import team1 from "../../../assets/team2.jpg";
import ContactUs from "../../ContactUs/ContactUs";
import "./OurTeam.css";

const OurTeam = () => {
  return (
 <div>
  <img src={teamImg} alt="img"width="100%" />
 {/* Meet Our Team */}
 <div className='container p-5 shadow Team_Members'>
 <h3 className='text-secondary text-center fw-bold'>" Meet Our Exceptional Team: Passionate Experts Committed to Your Success "</h3>
 <div className='row'>
  <div className='col'>
  <div className="card">
     <img src={team1} className="card-img-top" alt="..." />
     <div className="card-body">
       <p className="card-title text-center fw-bold">Lalan Kumar.</p>
     </div>
   </div>
  </div>
  <div className='col'>
  <div className="card">
     <img src={team1} className="card-img-top" alt="..." />
     <div className="card-body">
     <p className="card-title text-center fw-bold">Lalan Kumar.</p> </div>
   </div>
  </div>

  <div className='col'>
  <div className="card">
     <img src={team1} className="card-img-top" alt="..." />
     <div className="card-body">
     <p className="card-title text-center fw-bold">Lalan Kumar.</p>
     </div>
   </div>
  </div>
 </div>
 <div className='row mt-4'>
 <div className="col">
 <div className="card">
     <img src={team1} className="card-img-top" alt="..." />
     <div className="card-body">
     <p className="card-title text-center fw-bold">Lalan Kumar.</p>
     </div>
   </div>
 </div>

 <div className="col">
 <div className="card">
     <img src={team1} className="card-img-top" alt="..." />
     <div className="card-body">
     <p className="card-title text-center fw-bold">Lalan Kumar.</p>
     </div>
   </div>
 </div>
 <div className="col">
 <div className="card">
     <img src={team1} className="card-img-top" alt="..." />
     <div className="card-body">
     <p className="card-title text-center fw-bold">Lalan Kumar.</p>
     </div>
   </div>
 </div>
 </div>
 </div>
 <br />
 {/* contact us page */}
 <div className='p-3'>
 <h1 className="text-dark fw-bold text-center">
   Have Some Questions? Get in touch
 </h1>
 <ContactUs />
 </div>
    </div>
  );
};

export default OurTeam;

