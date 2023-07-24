
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
// Quick offering / Offering services on the landing page  / landing page services component
import OfferingServices from './Components/HeroPage/OfferingServices';
import { MdWhatsapp } from "react-icons/md";

// All Navbar Pages imported Here

// Who We Are Section all components imported here
import AboutUs from './Pages/WhoWeAre/AboutUs/AboutUs'
import OurTeam from './Pages/WhoWeAre/OurTeam/OurTeam';
import Testimonials from './Pages/WhoWeAre/Testimonials/Testimonials';

// What We Do section all components imported here
import WebDevelopment from './Pages/WhatWeDo/WebDevelopment/WebDevelopment';
import CustomWebDev from './Pages/WhatWeDo/CustomWebDev/CustomWebDev';
import WebDesign from './Pages/WhatWeDo/WebDesign/WebDesign'
import DigitalMarketing from './Pages/WhatWeDo/DigitalMarketing/DigitalMarketing'
import PayPerClick from './Pages/WhatWeDo/PayPerClick/PayPerClick'
import CyberSecurity from './Pages/WhatWeDo/CyberSecurity/CyberSecurity';
import ItConsultant from './Pages/WhatWeDo/ItConsultant/ItConsultant';
import AbroadEducation from './Pages/WhatWeDo/AbroadEducation/AbroadEducation';
import DataRecovery from './Pages/WhatWeDo/DataRecovery/DataRecovery';
import Smo from './Pages/WhatWeDo/SEO/Smo';

// Courses section all components imported here 

// Careers section  components imported here
import Career from './Pages/Career/CareerPage'

// Blog section  components imported here
import Blog from './Pages/Blog/Blog'

//Contact section components imported here
import ContactUs from './Pages/ContactUs/ContactUs'

// Privacy section components imported here
import Privacy from './Components/Privacy/Privacy'


import './App.css'
import Package from './Pages/Packages/Package';
import CancellationPolicy from './Components/CancellationPolicy/CancellationPolicy';
import TermAndConditions from './Components/TermAndConditions/TermAndConditions';



function App() {

  return (
     <div>
          <Navbar />
      <Routes>
        <Route exact path="/" Component={HeroPage}/> 
        <Route exact path="/our_services" Component={OfferingServices}/> 
        <Route exact path="/home" Component={Home}/> 
              {/* Who we are section routes here */}
                      {/* {/* <Route exact path="/about_us" Component={AboutUs}/>  */}
                      <Route exact path="/our_team" Component={OurTeam}/> 
                      <Route exact path="/testimonials" Component={Testimonials}/>

{/* What we do section routes here */}
<Route exact path="/work_web_dev" Component={WebDevelopment}/> 
<Route exact path="/work_custom_web_dev" Component={CustomWebDev}/> 
<Route exact path="/work_web_design" Component={WebDesign}/> 
<Route exact path="/work_digital_marketing" Component={DigitalMarketing}/> 
<Route exact path="/work_smo" Component={Smo}/> 
<Route exact path="/work_ppc" Component={PayPerClick}/> 
<Route exact path="/work_cyber_security" Component={CyberSecurity}/> 
<Route exact path="/work_it_consultant" Component={ItConsultant}/> 
<Route exact path="/work_abroad_education" Component={AbroadEducation}/> 
<Route exact path="/work_data_recovery" Component={DataRecovery}/> 

{/* Courses section routes here */}

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
<Route exact path="/our_packages" Component={Package}/>

      </Routes>

      <div className='flex fixed-bottom'>
        <button className="btn btn-success btn-lg mx-2 mb-2">
        <a href="https://wa.me/9896549691"  className='btn btn-success shadow' target="_blank" rel="noopener noreferrer">  <i className="fab fa-whatsapp mr-2"></i> <span className='fs-3'> <MdWhatsapp /> </span></a>
        </button>
        </div>
      <Footer />
     </div>
  )
}

export default App
