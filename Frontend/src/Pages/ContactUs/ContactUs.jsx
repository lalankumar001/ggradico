import React  from 'react'
import { FiMapPin,FiPhoneForwarded,FiMail } from "react-icons/fi";
import './ContactUs.css'

const ContactUs = () => {
  
  return (
    // contactUs_page class is used for responsive and all code in app.css file
    <div className='mt-5 p-3 contactUs_page'>
        <div className="container mt-5 shadow ">
        <div className="row ">
            <div className="col-md-4 bg-primary p-5 text-white order-sm-first order-last">
                <h2>Let's get in touch</h2>
                <p>We're open for any suggestion or just to have a chat</p>
                <div className="d-flex mt-2">
                    <i className="bi bi-geo-alt"> <FiMapPin /></i>
                    <p className="mt-3 ms-3">Address : 1/123 First Floor Shankar Road Old Rajendar Nagar New Delhi 110060</p>
                </div>
                <div className="d-flex mt-2">
                    <i className="bi bi-telephone-forward"> <FiPhoneForwarded /></i>
                    <p className="mt-4 ms-3">Phone : +91 1140631397</p>
                </div>
                <div className="d-flex mt-2">
                    <i className="bi bi-envelope"><FiMail /></i>
                    <p className="mt-4 ms-3 "> <a href="mailto:support@gradicoglobal.com" target="_blank" rel="noopener noreferrer " className='text-white text-decoration-none'>Email: support@gradicoglobal</a></p> 
                </div>

            </div>
            <div className="col-md-8 p-5 ">
                <h2>Get in touch</h2>
{/* Form start from  here */}
                <form className="row g-3 contactForm mt-4">
                    <div className="col-md-6">
                      <label for="inputText" className="form-label">First Name</label>
                      <input type="text" className="form-control" id="inputName" required />
                    </div>
                    <div className="col-md-6">
                      <label for="inputText" className="form-label">Last Name</label>
                      <input type="text" className="form-control" id="inputLname" required />
                    </div>
                    <div className="col-12">
                      <label for="inputSubject" className="form-label">Subject</label>
                      <input type="text" className="form-control" id="inputSubject" required />
                    </div>
                    <div className="col-12">
                        <label for="inputAddress" className="form-label">Email Id</label>
                        <input type="email" className="form-control" id="inputAddress" required />
                      </div>
                    <div className="col-md-6">
                      <label for="inputCity" className="form-label">City</label>
                      <input type="text" className="form-control" id="inputCity" />
                    </div>
                    <div className="col-md-6">
                        <label for="inputCity" className="form-label">Contact Number</label>
                        <input type="number" className="form-control" id="inputCity" required />
                      </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary mt-3">Submit</button>
                    </div>
                  </form>
            </div>
        </div>
    </div>

    </div>
  )
}

export default ContactUs