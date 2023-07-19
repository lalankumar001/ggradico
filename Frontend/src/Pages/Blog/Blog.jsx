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
         <h1 className="Open_Vacance_Heading container w-75 text-center text-light fw-bold p-1 bg-dark rounded">
         <span><img src={BlogImg01} alt="img" width='100%' className='rounded'/></span>
        </h1>
<br />
<h1 className='text-dark text-center p-4'>Our<span className='text-decoration-underline fw-bold'> Blog</span></h1>
<div className='container p-5 shadow'>
   <div className='row'>
         <div className='col'>
         <div className="card">
            <img src={BlogImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
         </div>         
         <div className='col'>
         <div className="card">
            <img src={BlogImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
         </div>

         <div className='col'>
         <div className="card">
            <img src={BlogImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
         </div>
   </div>
   <div className='row mt-4'>
    <div className="col">
    <div className="card">
            <img src={BlogImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
    </div>

    <div className="col">
    <div className="card">
            <img src={BlogImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
    </div>
    <div className="col">
    <div className="card">
            <img src={BlogImg01} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
          </div>
    </div>
   </div>
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