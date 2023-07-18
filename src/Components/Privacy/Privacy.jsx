import React from 'react'
import './Privacy.css'
import ContactUs from '../../Pages/ContactUs/ContactUs';

const Privacy = () => {
  return (
    <div className='Privacy'>
      <div className="Privacy_policy">
        <h1 className='text-center'>Privacy Policy</h1>
      </div>
      <div>
        <h6 className='text-secondary mx-2'>Effective Date: 29-05-2020</h6>
        <p className='text-center m-4 fw-semibold '>At Gradico Global, we value the privacy of our users and are committed to protecting their personal information. This Privacy Policy explains how we collect, use, and safeguard the personal data of our website visitors, customers, and other individuals who interact with our services. By accessing our website or using our services, you agree to the terms of this Privacy Policy.</p>
      </div> 
      <div>
        <ol className='text-dark fw-semibold'>
          <li>Information We Collect</li>
          <ul>
            <li>Personal Information:</li>
            <p>We may collect personal information, including but not limited to, your name, email address, phone number, and any other information you voluntarily provide to us through our website or other means of communication.</p> 
          </ul>
            <ul>
              <li>Usage Information:</li>
              <p>We automatically collect certain information about your interactions with our website and services. This may include your IP address, browser type, device information, pages visited, and other usage statistics. We use this information to analyze trends, administer the website, improve our services, and gather demographic information.</p>
            </ul>
          <li>Use of Information:</li>
             <ul>
                <li>Provide and Improve Services:</li>
                <p>We use the collected information to deliver and improve our services, personalize your experience, respond to inquiries or requests, and provide technical support.</p>
               <li>Communication:</li>
                <p>We may use your personal information to communicate with you regarding our services, updates, promotions, and other relevant information. You can opt out of these communications at any time.</p>
                <li>Analytics and Research:</li>
                <p>We may use the collected information for analytics purposes to understand how our website and services are used, identify trends, and improve our offerings.</p>
                <li>Legal Compliance:</li>
                 <p>We may disclose personal information when required by law or in response to valid requests by public authorities.</p>
             </ul>
              <li>Data Security</li>
              <p>We implement industry-standard security measures to protect the personal information we collect. However, no method of transmission over the internet or electronic storage is entirely secure. While we strive to protect your personal information, we cannot guarantee its absolute security.</p>
          <li>Data Retention</li>
          <p>
We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.</p>
             <ul>
                <li>Third-Party Services</li>
                <p>We may engage trusted third-party service providers to assist us in delivering our services or analyzing website usage. These third parties have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
               <li>Children's Privacy</li>
               <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected personal information from a child, we will take steps to delete it promptly.</p>
                <li>Your Rights</li>
                <p>You have the right to access, update, correct, or delete your personal information in our records. If you would like to exercise any of these rights or have any privacy-related concerns, please contact us using the information provided below.</p>
                 <li>Changes to the Privacy Policy</li>
                 <p>We may update this Privacy Policy from time to time. Any changes will be effective upon posting the revised Privacy Policy on our website. We encourage you to review this Privacy Policy periodically for any updates.</p>
                  <li className='fw-bold'>Contact Us</li>
                  <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
                </ul>
        </ol>
         <ContactUs />       
      </div>
    </div>
  )
}

export default Privacy