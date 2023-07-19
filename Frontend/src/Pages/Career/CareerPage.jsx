import React from 'react'
import HiringImg from '../../assets/WeAreHiring.gif'
import VacantChairs from '../../assets/VacantChairs.jpg'
// reactIcons 
import { MdLocationOn ,MdOutlineBarChart} from "react-icons/md";
import {FaRegDotCircle} from "react-icons/fa";

import ContactUs from '../ContactUs/ContactUs'

import './CareerPage.css'


const CareerPage = () => {
  const jobOpenings = [
    {
      title: 'Full Stack Developer',
      description: 'As a Full Stack Developer, you will play a crucial role in developing and maintaining both the front-end and back-end.',
      Qualifications: 'Bachelors degree in Computer Science, Web Development, or related field',
      Skills:'Proficiency in HTML, CSS, JavaScript, React, Angular, Vue.js, Node.js, Python, Ruby, Express, Django, Ruby on Rails..',
      location:'Office',
      Experience:'1 Years To 5 Years',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfypopYsVfCkLbVYWFA4c-8XXzS230cVdzpMIrIhZNxPLN4nA/viewform?usp=sf_link'
    },
    {
      title: 'Frontend Developer',
      description: 'We are seeking a frontend developer with expertise in ReactJS to work on our client-side web applications.',
      Qualifications: 'Bachelors degree in Computer Science, Web Development, or related field',
      Skills:'Thorough understanding of HTML, CSS, JavaScript, Tailwind, and Reactjs (preferred)',
     location:'Office',
     Experience:'0 Years To 3 Years',
     applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfypopYsVfCkLbVYWFA4c-8XXzS230cVdzpMIrIhZNxPLN4nA/viewform?usp=sf_link'
    },
    {
      title: 'Backend Developer',
      description: 'As a Back-End Developer, you will be responsible for building and maintaining the server-side logic of web applications.',
      Qualifications: 'Bachelors degree in Computer Science, Web Development, or related field',
      Skills:'Developing server-side applications and APIs using back-end languages such as Python, Java, PHP, or Node.js.',
     location:'Office',
     Experience:'3 Years To 6 Years',
     applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfypopYsVfCkLbVYWFA4c-8XXzS230cVdzpMIrIhZNxPLN4nA/viewform?usp=sf_link'
    },
    {
      title: 'Search engine optimization [SEO]',
      description: 'As an SEO Specialist, you will play a critical role in improving the visibility and organic search rankings of websites.',
      Qualifications: 'Bachelors degree in Computer Science, Web Development, or related field',
      Skills:'Proficiency in SEO tools and platforms such as Google Analytics, Google Search Console, and keyword research tools.',
      location:'Office',
      Experience:'1 Years To 4 Years',
      applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfypopYsVfCkLbVYWFA4c-8XXzS230cVdzpMIrIhZNxPLN4nA/viewform?usp=sf_link'
    },
    {
      title: 'Digital Marketing',
      description: 'As a Digital Marketing Specialist, you will be responsible for planning, implementing, and optimizing digital marketing campaigns to drive brand awareness, website traffic, and customer engagement. ',
      Qualifications: 'Bachelors degree in Computer Science, Web Development, or related field',
      Skills:'In-depth knowledge of digital marketing principles, strategies, and best practices. Proficiency in digital marketing tools and platforms, such as Google Analytics, Google Ads, social media management tools, and email marketing software.',
     location:'Office',
     Experience:'3 Years To 6 Years',
     applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfypopYsVfCkLbVYWFA4c-8XXzS230cVdzpMIrIhZNxPLN4nA/viewform?usp=sf_link'
    }
    // Add more job openings here as needed
  ];
  
  return (
    // CarrerPage class name is used for responsive
    <div className='CarrerPage'>
      <div className='mt-5'>
         <div>
          <img src={HiringImg} alt="img" width='100%' height='100%' />
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