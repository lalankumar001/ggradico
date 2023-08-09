import React from 'react'
import BlogImg01 from '../../assets/Blog01.png'
import BlogImg from '../../assets/Blog.jpg'
import ContactUs from '../ContactUs/ContactUs'

const Blog = () => {
  return (
    // Blog page class in used for responsive and all css in app.css file
    <div className='BlogPage'>
      <br />
      <br />
      <div className='mt-5'>
          <div>
          <img src={BlogImg} alt="img" width='100%' />
         </div> 
<br />  
<h1 className='text-dark text-center p-4'>Our<span className='text-decoration-underline fw-bold'> Blog</span></h1>
<div className='container p-5 shadow'>
<h1 className='text-center'>Comming Soon</h1>
</div>
<br />
{/* Contact us page */}
<div className='p-4'>
  <h1 className='text-dark fw-bold text-center'>Have Some Questions? Get in touch</h1>
<ContactUs />
</div>

</div>
    </div>
  )
}

export default Blog