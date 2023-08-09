import React from 'react'
import { BsFillLayersFill } from "react-icons/bs";
import { MdWhatsapp } from "react-icons/md";
import heroImg from '../../../assets/VisaAndAbroadedu/ed.png'

const VisaServices = () => {
  return (
    <div>
        <div className='container'>
            <span className='fs-3 sm mx-5 fs-5 '><BsFillLayersFill /> <b>For Students</b></span>
        </div>
        <div className="container row p-3 AbroadEduAndVisa">
            <div className="col">
                 <h2 className='fw-bold mx-3'><b className='fs-1'>U</b>nlock a world-class education – Study in the <b className='text-info'>global university </b> of your choice!</h2>
              <p className='text-left'>"Empowering your ambitions, one step at a time – our consultancy is not just a service, but a transformative experience that propels you towards academic greatness. Our success stories are a testament to the lasting impact we create, and we invite you to become a part of this extraordinary legacy. The world is waiting, and we are here to open doors for you!"</p>
            <a href="https://wa.me/9896549691"  className='btn btn-danger shadow' target="_blank" rel="noopener noreferrer">  <i className="fab fa-whatsapp mr-2"></i> <span className='fs-6'> Enquire Now <MdWhatsapp /> </span></a>
            </div>
            <div className="col">
                <img src={heroImg} alt="" width='100%' />
            </div>
        </div>
    </div>
  ) 
}

export default VisaServices