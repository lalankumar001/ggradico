import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const PaymentForm = () => {
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      // Send the paymentMethod.id to your backend to process the payment
      const paymentMethodId = paymentMethod.id;
      try {
        const response = await axios.post('http://localhost:5000/api/payment', { paymentMethodId });
        setPaymentSuccess(response.data.message);
        setPaymentError(null);
      } catch (err) {
        setPaymentError('Error processing the payment. Please try again.');
        setPaymentSuccess(null);
      }
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <CardElement />
      <button type="submit">Pay Now</button>
      {paymentError && <div>{paymentError}</div>}
      {paymentSuccess && <div>{paymentSuccess}</div>}
    </form>
    </div>
  );
};

export default PaymentForm;
