import React from 'react'
import ContactUs from '../../Pages/ContactUs/ContactUs';
//external css policy.css  file is working here
import '../Privacy/Privacy.css'

const CancellationPolicy = () => {
  return (
    <div className='Privacy'>
      <div className="Privacy_policy">
        <h1 className='text-center'>Cancellation and Refund Policy</h1>
      </div>
      <div>
        <h6 className='text-secondary mx-2'>Effective Date: 29-05-2020</h6>
        <p className='text-center m-4 fw-semibold '>At Gradico Global, we understand that plans may change, and we strive to provide a flexible cancellation and refund policy. Please review our policy below:</p>
      </div> 
      <div>
        <ol className='text-dark fw-semibold'>
          <li>Cancellation</li>
          <ul>
            <li>Booking Cancellation:</li>
          <p>If you need to cancel your booking, please notify us as soon as possible. The cancellation terms and conditions may vary depending on the specific package, service, or event. Please refer to the booking confirmation or contact our customer support for details.</p>
          </ul>
            <ul>
                <li>Cancellation Fees:</li>
            <p>Cancellation fees may apply based on the timing of your cancellation and the terms outlined in the booking agreement. These fees help cover any non-refundable costs incurred by our company in relation to your booking.</p>
            </ul>
          <li>Refunds:</li>
             <ul>
                <li>Refund Eligibility:</li>
               <p>Refund eligibility is determined based on the specific terms and conditions of your booking, including any cancellation deadlines and fees outlined in the booking agreement.</p>
               <li>Processing Time:</li>
                <p>Refunds, if applicable, will be processed within a reasonable timeframe. The exact processing time may vary depending on factors such as the payment method used and any applicable financial institution processes.</p>
                <li>Non-Refundable Fees and Charges:</li>
                <p>Please note that certain fees and charges associated with your booking may be non-refundable. These may include administrative fees, service fees, or charges imposed by third-party suppliers or vendors.</p>
                 </ul>
              <li>Modification and Rebooking:</li>
          <p>Modification:</p>         
           <li>If you wish to modify your booking, such as changing the travel dates or package components, please contact our customer support. We will do our best to accommodate your request based on availability and any applicable terms and conditions.</li>
           <ul>
               <li>Rebooking:</li>
               <p>In certain cases, we may offer the option to rebook your package or service instead of canceling. Rebooking options will depend on availability, the specific terms of your booking, and any applicable fees or charges.</p>
                <li className='fw-bold'>Contact Us</li>
                  <p>If you have any questions or need further clarification about our cancellation and refund policy, please don't hesitate to contact our customer support team. We are here to assist you and provide the necessary guidance.</p>
                </ul>
        </ol>
         <ContactUs />       
      </div>
    </div>
  )
}

export default CancellationPolicy