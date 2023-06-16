import React from 'react'
import MiniNavbar from '../Navbar/MiniNavbar'

//Home page Hero section  Carousel images imported here  
import img_hero01 from '../../assets/img-hero1.jpg'
import img_hero02 from '../../assets/img-hero2.jpg'
import img_hero03 from '../../assets/img-hero3.jpg'

import Services from '../Services/Services'
import ContactUs from '../../Pages/ContactUs/ContactUs'
import Testimonials from '../../Pages/WhoWeAre/Testimonials/Testimonials'
import TechweUseHome from '../../Pages/TechWeUse/TechweUseHome'


import './Home.css'

const Home = () => {

  return (
    // Home_page_media is used for responsive and all code in app.css file
    <div className='Home_page_media'>
{/* MINI NAVBAR ON HOME HERO SECTION  */}
      <div className='MiniNavbar'>
        <MiniNavbar />
      </div>
    <div>
{/* Home page Carousel codes hers */}
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={img_hero01} className="d-block w-100" alt="img_hero" />
      <div className="carousel-caption d-none d-md-block">
        <h1 className='text-secondary fw-bold'>Grow Your Business With Us</h1>
        <p>We will help grow your business</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={img_hero02} className="d-block w-100" alt="img_hero" />
      <div className="carousel-caption d-none d-md-block">
        <h1 className='text-secondary fw-bold'>"Website development is the magic behind the scenes that brings digital ideas to life."</h1>
        <p>We Will Build Your Website </p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src={img_hero03} className="d-block w-100" alt="img_hero" />
      <div className="carousel-caption d-none d-md-block">
        <h1 className='text-secondary fw-bold'>"Student consultancy for abroad education offers expert advice, making the application process smoother and more efficient."</h1>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>

{/* Services section after carousel  */}
<div>
  <hr />
<Services />
</div>
<br />
{/* Client Testimonial section after Services */}
 <hr />
 <div className='bg-dark'>
 <Testimonials />
 </div>
<br />
<hr />
{/* tech we use */}
<div>
  <TechweUseHome />
</div>

{/* get in touch after carousel section */}
       <div className='Get_in_touch mt-3 p-5'>
        <h1 className='text-white text-center'>Have Some Questions? Get in touch</h1>
        <p className='text-center text-dark fw-bold'>"We're just a click away! Contact us today and let's start a conversation that can change the game."</p>
         <ContactUs />
       </div>

    </div>
  )
}

export default Home