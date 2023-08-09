
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

// Who We Are Section all components imported here
import AboutUs from './Pages/WhoWeAre/AboutUs/AboutUs'
import OurTeam from './Pages/WhoWeAre/OurTeam/OurTeam';
import Testimonials from './Pages/WhoWeAre/Testimonials/Testimonials';

// What We Do section all components imported here

// Careers section  components imported here
import Career from './Pages/Career/CareerPage'

// Blog section  components imported here
import Blog from './Pages/Blog/Blog'

//Contact section components imported here
import ContactUs from './Pages/ContactUs/ContactUs'

// Privacy section components imported here
import Privacy from './Components/Privacy/Privacy'


import './App.css'
import CancellationPolicy from './Components/CancellationPolicy/CancellationPolicy';
import TermAndConditions from './Components/TermAndConditions/TermAndConditions';
import CommingSoon from './Pages/CommingSoon';
import PaymentForm from './PaymentForm';




function App() {

  return (
     <div>
          <Navbar />
      <Routes>
        <Route exact path="/" Component={HeroPage}/>  
        <Route exact path="/home" Component={HeroPage}/> 
              {/* Who we are section routes here */}
                      <Route exact path="/about_us" Component={AboutUs}/>
                      <Route exact path="/our_team" Component={OurTeam}/> 
                      <Route exact path="/testimonials" Component={Testimonials}/>

{/* What we do section routes here */}
<Route exact path="/comming_soon" Component={CommingSoon}/>
<Route exact path="/pay" Component={PaymentForm}/>

{/* Career page Section routes here */}
<Route exact path="/careers" Component={Career}/> 

{/* Blog page section routes here */}
<Route exact path="/blog" Component={Blog}/>

{/* Contact page Section routes here */}
<Route exact path="/contact" Component={ContactUs}/>

{/* Privacy Policy ,cancellationPolicy,terms and condition and  Packages Section */}
<Route exact path="/privacy" Component={Privacy}/>
<Route exact path="/cancellation_policy" Component={CancellationPolicy}/>
<Route exact path="/terms_condition" Component={TermAndConditions}/>


      </Routes>
      <div className='flex fixed-bottom'>
        <a href="https://wa.me/9350634931"  className='btn btn-success fw-bold shadow btn-lg mx-2 mb-2' target="_blank" rel="noopener noreferrer">  <i className="fab fa-whatsapp mr-2"></i> <span className='fs-3'> <MdWhatsapp /> </span></a>
        </div>
      <Footer />
     </div>
  )
}

export default App
