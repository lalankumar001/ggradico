import React from 'react'
import team1 from '../../../assets/team2.jpg'
import ContactUs from '../../ContactUs/ContactUs'

const OurTeam = () => {
  return (
    <div>
      <div className='p-1'> 
        <h1 className='text-secondary mt-5 p-5 text-center fw-bold'>Our team</h1>
        {/* Meet Our Team */}
<div className='container p-5 shadow'>
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
    </div>
  )
}

export default OurTeam