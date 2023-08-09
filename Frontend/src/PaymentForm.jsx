
import React, { useState } from 'react';
import axios from 'axios';

const PaymentForm = () => {
  const PHONEPE_MERCHANT_ID ='M1KDULVI2IHU'; // Remove the space at the beginning
  const PHONEPE_API_KEY ='972d4b31-3ec4-4471-be77-b0df90a4e67d';
  const PHONEPE_CALLBACK_URL ='https://api.phonepe.com/apis/hermes/pg/v1/pay';

  const [amount, setAmount] = useState('');
  const [paymentUrl, setPaymentUrl] = useState('');

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const initiatePayment = async () => {
    try {
      const order_id = String(Math.random()); // Convert the random number to a string

      const payload = {
        merchantId: PHONEPE_MERCHANT_ID,
        merchantTransactionId: 'MT7850590068188104',
        merchantUserId: 'MU933037302229373',
        orderId: order_id,
        amount: amount,
        redirectUrl: 'https://webhook.site/redirect-url',
        redirectMode: 'POST',
        returnUrl: PHONEPE_CALLBACK_URL,
        paymentInstrument: {
          type: 'PAY_PAGE',
        },
        // Add more relevant parameters as needed
      };

      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${PHONEPE_API_KEY}`,
      };

      const response = await axios.post(
        'https://api.phonepe.com/apis/hermes/pg/v1/pay',
        payload,
        {
          headers: headers,
        }
      );

      if (response.data.statusCode === 'SUCCESS') {
        setPaymentUrl(response.data.paymentUrl);
      } else {
        console.error('Payment initiation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <div className="mt-5 p-5">
      <h2>PhonePe Payment Form</h2>
      <label htmlFor="amount">Amount:</label>
      <input
        type="number"
        id="amount"
        value={amount}
        onChange={handleAmountChange}
        required
      />
      <button onClick={initiatePayment}>Proceed to Payment</button>
      {paymentUrl && (
        <div>
          <p>Click the button below to proceed to PhonePe payment:</p>
          <a
            href={paymentUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Proceed to PhonePe Payment
          </a>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;

