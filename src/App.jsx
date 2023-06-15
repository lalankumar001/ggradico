
import React from 'react'
import { Route, Routes } from "react-router-dom";
// Bootstrap file imported Here
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

import Home from './Components/Home/Home'
import HeroPage from './Components/HeroPage/Hero'
import { MdWhatsapp } from "react-icons/md";

// All Navbar Pages imported Here

// Who We Are Section all components imported here
import AboutUs from './Pages/WhoWeAre/AboutUs/AboutUs'
import OurTeam from './Pages/WhoWeAre/OurTeam/OurTeam';
import Testimonials from './Pages/WhoWeAre/Testimonials/Testimonials';

// What We Do section all components imported here

// Courses section all components imported here 

// Careers section  components imported here
import Career from './Pages/Career/CareerPage'

// Blog section  components imported here
import Blog from './Pages/Blog/Blog'

//Contact section components imported here
import ContactUs from './Pages/ContactUs/ContactUs'


import './App.css'

function App() {

  return (
     <div>
        <Navbar />
        <Routes>
        <Route exact path="/" Component={HeroPage}/> 
        <Route exact path="/home" Component={Home}/> 
              {/* Who we are section routes here */}
                      <Route exact path="/about_us" Component={AboutUs}/> 
                      <Route exact path="/our_team" Component={OurTeam}/> 
                      <Route exact path="/testimonials" Component={Testimonials}/> 

{/* What we do section routes here */}

{/* Courses section routes here */}

{/* Career page Section routes here */}
<Route exact path="/careers" Component={Career}/> 

{/* Blog page section routes here */}
<Route exact path="/blog" Component={Blog}/>

{/* Contact page Section routes here */}
<Route exact path="/contact" Component={ContactUs}/>

      </Routes>

      <div className='flex fixed-bottom'>
        <button className="btn btn-success btn-lg mx-2 mb-2">
        <a href="https://wa.me/8860130800"  className='btn btn-success shadow' target="_blank" rel="noopener noreferrer">  <i className="fab fa-whatsapp mr-2"></i> <span className='fs-3'> <MdWhatsapp /> </span></a>
        </button>
        </div>
      <Footer />
     </div>
  )
}

export default App
