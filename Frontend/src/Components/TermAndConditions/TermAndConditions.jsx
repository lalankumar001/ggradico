import React from 'react'
import ContactUs from '../../Pages/ContactUs/ContactUs';
// External css file privacy.css file working here
import '../Privacy/Privacy.css'

const TermAndConditions = () => {
  return (
    <div className='Privacy'>
      <div className="Privacy_policy">
        <h1 className='text-center'>Terms and Conditions:</h1>
      </div>
      <div>
        <h6 className='text-secondary mx-2'>Effective Date: 29-05-2020</h6>
        <p className='text-center m-4 fw-semibold '>
Please read these Terms and Conditions carefully before using our services or making a booking. By accessing or using our website, making a reservation, or engaging with our services, you agree to comply with and be bound by the following terms and conditions:</p>
      </div> 
      <div>
        <ol className='text-dark fw-semibold'>
          <li>Booking and Reservation:</li>
          <ul>
            <li>Eligibility:</li>
            <p>To make a booking or reservation, you must be at least 18 years old and have the legal capacity to enter into a contract. By making a booking, you confirm that all the information provided by you is accurate, complete, and up-to-date.</p>          </ul>
            <ul>
              <li>Booking Confirmation:</li>
              <p>Upon completing a booking, you will receive a confirmation email or notification containing the details of your reservation. Please review the information carefully and contact us immediately if there are any discrepancies.</p>       
            <li>Payment:</li>
            <p>Payment terms and methods will be specified during the booking process. By making a reservation, you agree to pay the total amount due, including any applicable taxes, fees, or surcharges.</p>
 </ul>
          <li>Pricing and Availability:</li>
             <ul>
                <li>Pricing Accuracy:</li>
                <p>We strive to provide accurate and up-to-date pricing information. However, prices may vary based on factors such as currency fluctuations, seasonal demand, or changes in taxes and fees. The final price will be confirmed at the time of booking.</p>
                  <li>Availability:</li>
               <p>All bookings are subject to availability. While we make every effort to ensure the availability of our services, certain factors beyond our control may affect availability. In the event of unavailability, we may offer alternative options or a refund as per our discretion.</p>
             </ul>
             <ul>
                <li>Amendments and Cancellations:</li>
                       
                  <p>Amendments by You: If you need to modify or change your booking, please contact us as soon as possible. Amendments are subject to availability and any applicable fees or charges outlined in our cancellation and refund policy.</p>
                  <li>Amendments by Us:</li>
                  <p>In rare circumstances, we may need to modify or cancel your booking due to unforeseen circumstances or events beyond our control. If this occurs, we will make reasonable efforts to notify you and offer alternative options or a full refund.</p>
                  </ul>   
          <li>Liability and Disclaimers:</li>
          <p>Limitation of Liability:
          While we strive to provide accurate and reliable information, we do not guarantee the completeness, accuracy, or timeliness of the content on our website. We shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services or reliance on the information provided.</p>
             <ul>
                <li>Indemnification:</li>
                <p>You agree to indemnify and hold us harmless from any claims, damages, losses, liabilities, costs, or expenses arising from your use of our services, violation of these terms and conditions, or infringement of any rights of third parties.</p>
               <li>Intellectual Property:</li>
              <p>Ownership:All intellectual property rights, including copyrights, trademarks, and logos, displayed on our website or associated with our services, are the property of their respective owners. You may not use, reproduce, modify, or distribute any of the intellectual property without explicit permission from the owner.</p>
                <li>Governing Law and Jurisdiction:</li>
                <p>These terms and conditions shall be governed by and construed in accordance with the laws of Uttar Pradesh. Any disputes arising out of or relating to these terms and conditions or your use of our services shall be subject to the exclusive jurisdiction of the courts in Uttar Pradesh.</p>
                 <li>Changes to Terms and Conditions:</li>
                 <p>We reserve the right to update or modify these terms and conditions at any time without prior notice. Any changes will be effective upon posting the revised terms and conditions on our website. It is your responsibility to review the terms and conditions periodically for any updates.</p>
                  <li className='fw-bold'>Contact Us</li>
                  <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:</p>
                </ul>
        </ol>
         <ContactUs />       
      </div>
    </div>
  )
}

export default TermAndConditions