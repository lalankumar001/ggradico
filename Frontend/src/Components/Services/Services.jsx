import React from 'react'
import WebDevImg from '../../assets/websiteDev.jpg'
import WebDesignImg from '../../assets/WebDesing.jpg'
import CyberImg from '../../assets/cyberSecurity.jpg'
import AbroadEducationSteps from '../../assets/AbroadEducationSteps.jpg'
// icons from react icon
import { MdSecurity,MdOutlineLanguage,MdLockOpen,MdOutlineAdb } from "react-icons/md";
import { BsWordpress,BsPcDisplay,BsGlobe,BsFiletypeHtml,BsFillBootstrapFill,BsDatabaseFillLock,BsEyeFill,BsCast,BsFiletypeAac} from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaColumns,FaBoxTissue,FaRegNewspaper,FaFigma } from "react-icons/fa";


import './Services.css'

const Services = () => {
  return (
    // Services_page class name is used for responsive
    <div className='Services_page'>
        <div className='bg-dark'>
          <h1 className='Services_heading'>"Your One-Stop Solution Provider" <span className='text-danger'>Services we offer</span>   </h1>
             <p className='Services_p'>"Unlocking Growth in the Digital Era with Marketing Prowess and Ironclad Security."   </p>
        </div>
{/* Web Development Heading  */}
<hr />

{/* Services : Fist Row , Web Development section */}
    <div className='Web_Development'>
          <div className='w-100'>
                 <div className='row'>
                      <div className='col WebDev_service_img'>
                        <img src={WebDevImg} alt="" width='600' height='500' className='mx-2 rounded' />
                      </div>
                      <div className='col bg-dark WebDev_services p-5 shadow mt-5 my-5 rounded'>
                      <p className='fs-1 fw-bold text-info'>Website Development</p>
                      {/* First Row  */}
                      <div className='row text-white fs-2 text-center'> 
                      <div className='col '>
                        <span ><BsWordpress />
                        <br />
                        <p className='fs-6'>Wordpress Website</p>
                        </span>
                        </div>
                      <div className='col'>
                        <span><CgWebsite />
                        <br />
                        <p className='fs-6'>Custom Website</p>
                        </span>
                      </div>
                      <div className='col'>
                        <span className=''><FaColumns/>
                        <br /><p className='fs-6'>CMS Website</p>
                        </span>
                      </div>
                      </div>
                      {/* Second Row  */}
                      <div className='row text-white fs-2 text-center mt-4'> 
                      <div className='col '>
                        <span ><FaBoxTissue />
                        <br />
                        <p className='fs-6'>Ecommerce Website</p>
                        </span>
            
                        </div>
                      <div className='col'>
                        <span><FaRegNewspaper />
                        <br />
                        <p className='fs-6'>Static Website</p>
                        </span>
                      </div>
                      <div className='col'>
                        <span><BsPcDisplay/>
                        <br /><p className='fs-6'>Dynamic Website</p>
                        </span>
                      </div>
                      </div>
                      </div>
                 </div>

          </div>
    </div>
          <hr />
  {/* Services Second Row , Web Design Section  */}
 <div className='Web_Designing'> 
 <div className="w-100 ">
<div className='row mt-2'>
<div className='col WebDev_service_img'>
  <img src={WebDesignImg} alt="" width='600' height='500' className='mx-2 rounded' />
</div>
<div className='col bg-info WebDev_services p-5 shadow mt-5 my-5 rounded'>
<p className='fs-1 fw-bold text-dark'>Website Designing / Converting</p>
{/* First Row  */}
<div className='row text-dark fw-bold fs-2 text-center'> 
<div className='col '>
  <span ><BsGlobe />
  <br />
  <p className='fs-6'>Web Design</p>
  </span>
  </div>
<div className='col'>
  <span><FaRegNewspaper />
  <br />
  <p className='fs-6'>Static Web design</p>
  </span>
</div>
<div className='col'>
  <span className=''><BsPcDisplay/>
  <br /><p className='fs-6'>Dynamic Web Design</p>
  </span>
</div>
<div className='col'>
  <span className=''><FaBoxTissue/>
  <br /><p className='fs-6'>Ecommerce Web Design</p>
  </span>
</div>
</div>
{/* Second Row  */}
<div className='row  text-dark fw-bold fs-2 text-center mt-4'> 
<div className='col '>
  <span ><FaFigma />-<BsFiletypeHtml />
  <br />
  <p className='fs-6'>Figma to HTML</p>
  </span>

  </div>
<div className='col'>
  <span><FaFigma /> - <BsFillBootstrapFill />
  <br />
  <p className='fs-6'>Figma to Bootstrap</p>
  </span>
</div>
<div className='col'>
  <span><FaFigma/> - <BsWordpress />
  <br /><p className='fs-6'>Figma to WordPress</p>
  </span>
</div>
<div className='col'>
  <span className=''><FaFigma/> - <CgWebsite />
  <br /><p className='fs-6'>Figma to Custom</p>
  </span>
</div>
</div>
</div>
</div>
  </div>         
  </div>

<hr />
{/* Services Third Row , Web Cyber security Section  */}               
<div className="Cyber_security">
  <div className="w-100">
<div className='row mt-2'>
<div className='col WebDev_service_img'>
  <img src={CyberImg} alt="" width='600' height='500' className='mx-2 rounded' />
</div>
<div className='col WebDev_services p-5 shadow mt-5 my-5 rounded'>
<p className='fs-1 fw-bold text-info'>Cyber Security Services</p>
        {/* First Row  */}
<div className='row text-info fw-bold fs-2 text-center'> 
<div className='col '>
  <span ><MdOutlineLanguage />
  <br />
  <p className='fs-6'>Virtual CISO</p>
  </span>
  </div>
<div className='col'>
  <span><MdSecurity/>
  <br />
  <p className='fs-6'>Cyber security consulting</p>
  </span>
</div>
<div className='col'>
  <span className=''><MdLockOpen/>
  <br /><p className='fs-6'>Penetration Testing</p>
  </span>
</div>
<div className='col'>
  <span className=''><MdOutlineAdb/>
  <br /><p className='fs-6'>Incident Response</p>
  </span>
</div>
</div>
{/* Second Row  */}
<div className='row text-info fw-bold fs-2 text-center mt-4'> 
<div className='col '>
  <span ><BsCast />
  <br />
  <p className='fs-6'>Network security monitoring</p>
  </span>

  </div>
<div className='col'>
  <span><BsDatabaseFillLock />
  <br />
  <p className='fs-6'>Data Protection and Encryption</p>
  </span>
</div>
<div className='col'>
  <span className=''><BsEyeFill/>
  <br /><p className='fs-6'>Threat Intelligence and Monitoring</p>
  </span>
</div>
<div className='col'>
  <span className=''><BsFiletypeAac/>
  <br /><p className='fs-6'>Security Policies and Procedures</p>
  </span>
</div>
</div>                
</div>
</div>
</div>
</div>
<hr />

{/* Services Forth Row , Consulting Section Abroad eduction */}
<div>
  <h1 className='text-center fw-bold p-5'> <b>O</b>ur Services for Abroad Education </h1>
<img src={AbroadEducationSteps} alt="" width='100%'/>
</div>

    </div>
  )
}

export default Services



