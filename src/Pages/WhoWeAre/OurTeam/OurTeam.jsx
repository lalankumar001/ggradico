import React from "react";
import team1 from "../../../assets/team2.jpg";
import ContactUs from "../../ContactUs/ContactUs";
import googleImg from '../../../assets/google.png'
import "./OurTeam.css";

const OurTeam = () => {
  return (
    <div className="mt-5 p-5">
      <div className="mt-5">
        <div class="card_item">
          <p>
            <span>CS novice to Google</span>
            <h6 className="container p-3 text-white card_description">
              Despite being from a tier 3 college, I would like to thank my
              mentors & teachers at Coding Ninjas who helped me land a job at
              Google. Both Parikh sir and Ankush sir are brilliant teachers who
              know how to explain difficult concepts in an easy way.
            </h6>
            <div className="row">
              <div className="col">
                
           <h5 className="text-white mx-2 fs-6"> Pareksha Manchanda</h5>
            <h5 className="text-white mx-2 fs-6`"> Software Engineer </h5>
             <img src={googleImg} alt="img" width='100'  className="mx-2"/>
              </div>
            </div>
          </p>
          <p>
            <span>College dropout to a package of 10 LPA</span>
          </p>
          <p>
            <span>Non-CS branch to Top Company</span>
          </p>
          <p>
            <span>Tire-3 college to 6-star on CodeChef</span>
          </p>
          <p>
            <span>Non Engineer to Investment Bank</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

// <div className='p-1'>
// <h1 className='text-secondary mt-5 p-5 text-center fw-bold'>Our team</h1>
// {/* Meet Our Team */}
// <div className='container p-5 shadow'>
// <div className='row'>
//  <div className='col'>
//  <div className="card">
//     <img src={team1} className="card-img-top" alt="..." />
//     <div className="card-body">
//       <p className="card-title text-center fw-bold">Lalan Kumar.</p>
//     </div>
//   </div>
//  </div>
//  <div className='col'>
//  <div className="card">
//     <img src={team1} className="card-img-top" alt="..." />
//     <div className="card-body">
//     <p className="card-title text-center fw-bold">Lalan Kumar.</p> </div>
//   </div>
//  </div>

//  <div className='col'>
//  <div className="card">
//     <img src={team1} className="card-img-top" alt="..." />
//     <div className="card-body">
//     <p className="card-title text-center fw-bold">Lalan Kumar.</p>
//     </div>
//   </div>
//  </div>
// </div>
// <div className='row mt-4'>
// <div className="col">
// <div className="card">
//     <img src={team1} className="card-img-top" alt="..." />
//     <div className="card-body">
//     <p className="card-title text-center fw-bold">Lalan Kumar.</p>
//     </div>
//   </div>
// </div>

// <div className="col">
// <div className="card">
//     <img src={team1} className="card-img-top" alt="..." />
//     <div className="card-body">
//     <p className="card-title text-center fw-bold">Lalan Kumar.</p>
//     </div>
//   </div>
// </div>
// <div className="col">
// <div className="card">
//     <img src={team1} className="card-img-top" alt="..." />
//     <div className="card-body">
//     <p className="card-title text-center fw-bold">Lalan Kumar.</p>
//     </div>
//   </div>
// </div>
// </div>
// </div>
// <br />
// {/* contact us page */}
// <div className='p-3'>
// <h1 className="text-dark fw-bold text-center">
//   Have Some Questions? Get in touch
// </h1>
// <ContactUs />
// </div>
// </div>
