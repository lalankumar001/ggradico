import React from 'react'
import HiringImg from '../../assets/HiringImg.jpg'
import VacantChairs from '../../assets/VacantChairs.jpg'
// reactIcons 
import { MdLocationOn ,MdOutlineBarChart} from "react-icons/md";
import {FaRegDotCircle} from "react-icons/fa";

import ContactUs from '../ContactUs/ContactUs'

import './CareerPage.css'


const CareerPage = () => {
  const jobOpenings = [
    {
      title: 'ReactJS Developer',
      description: 'We are looking for an experienced ReactJS developer to join our team.',
      Qualifications: 'Bachelors degree in Computer Science, Web Development, or related field',
      Skills:'Thorough understanding of HTML, CSS, JavaScript, Tailwind, and Reactjs (preferred)',
      location:'Remote',
      Experience:'3 Years To 6 Years',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfpGDwHJYLKL4XUtUT-dEB3--YwL0VChJfm2cmCG7RZRPI8ww/viewform?usp=sf_link'
    },
    {
      title: 'Frontend Developer',
      description: 'We are seeking a frontend developer with expertise in ReactJS to work on our client-side web applications.',
      Qualifications: 'Bachelors degree in Computer Science, Web Development, or related field',
      Skills:'Thorough understanding of HTML, CSS, JavaScript, Tailwind, and Reactjs (preferred)',
     location:'Remote',
     Experience:'3 Years To 6 Years',
     applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfpGDwHJYLKL4XUtUT-dEB3--YwL0VChJfm2cmCG7RZRPI8ww/viewform?usp=sf_link'
    },
    {
      title: 'Backend Developer',
      description: 'We are seeking a frontend developer with expertise in ReactJS to work on our client-side web applications.',
      Qualifications: 'Bachelors degree in Computer Science, Web Development, or related field',
      Skills:'Thorough understanding of HTML, CSS, JavaScript, Tailwind, and Reactjs (preferred)',
     location:'Remote',
     Experience:'3 Years To 6 Years',
     applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfpGDwHJYLKL4XUtUT-dEB3--YwL0VChJfm2cmCG7RZRPI8ww/viewform?usp=sf_link'
    },
    {
      title: 'Search engine optimization [SEO]',
      description: 'We are seeking a frontend developer with expertise in ReactJS to work on our client-side web applications.',
      Qualifications: 'Bachelors degree in Computer Science, Web Development, or related field',
      Skills:'Thorough understanding of HTML, CSS, JavaScript, Tailwind, and Reactjs (preferred)',
      location:'Remote',
      Experience:'3 Years To 6 Years',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfpGDwHJYLKL4XUtUT-dEB3--YwL0VChJfm2cmCG7RZRPI8ww/viewform?usp=sf_link'
    },
    {
      title: 'Java Developer',
      description: 'We are seeking a frontend developer with expertise in ReactJS to work on our client-side web applications.',
      Qualifications: 'Bachelors degree in Computer Science, Web Development, or related field',
      Skills:'Thorough understanding of HTML, CSS, JavaScript, Tailwind, and Reactjs (preferred)',
     location:'Remote',
     Experience:'3 Years To 6 Years',
     applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfpGDwHJYLKL4XUtUT-dEB3--YwL0VChJfm2cmCG7RZRPI8ww/viewform?usp=sf_link'
    }
    // Add more job openings here as needed
  ];
  
  return (
    <div>
      <div className='mt-5'>
         <div>
          <img src={HiringImg} alt="img" width='100%' />
         </div> 
         <h1 className="Open_Vacance_Heading container w-75 text-center text-light fw-bold p-1 bg-dark rounded">
         <span><img src={VacantChairs} alt="img" width='100%' className='rounded'/></span>
         <br />
         Open Vacancies
        </h1>
<br />
{/* Map all the jobOpening here */}
       {jobOpenings.map((job, index) => (
        <div className="mx-3 my-3 p-4 shadow mt-3 border" key={index}>
          <div className='row'>
            <div className='col-9'> 
            <h5>{job.title}</h5>
            <p><MdOutlineBarChart /> {job.Experience} &nbsp; &nbsp; <span className='fs-3'><MdLocationOn/></span> {job.location}</p>
            <h6 className="mb-2 text-muted"><FaRegDotCircle/> {job.description}</h6>
            <h6 className="mb-2 text-muted "><FaRegDotCircle/> {job.Qualifications}</h6>
            <h6 className="mb-2 text-muted"><FaRegDotCircle/> {job.Skills}</h6>
          </div>
            <div className='col-3 text-end'>
            <a href={job.applyLink} className="btn btn-info">Apply Now</a>
            </div>
        </div>
        </div>
      ))}
{/* Map section end here */}
<div className='bg-success p-2'>
  <h1 className='mt-5 text-center fw-bold'>Have Some Questions? Get in touch</h1>
<ContactUs />
</div>
      </div>
    </div>
  )
}

export default CareerPage