import React from 'react'

import ContactUs from '../../Pages/ContactUs/ContactUs'
import './Home.css'

const Home = () => {

  return (
<div>
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