import express from 'express';
import Stripe from 'stripe';
const app = express();
const port = 5000;

app.use(express.json());

// Your Stripe secret key (replace with your actual secret key)
const stripeSecretKey = (process.env.STRIPE_SECRET_KEY);


// Set up a route to process payments
app.post('/api/payment', async (req, res) => {
  try {
    const { paymentMethodId } = req.body;
    
    // Create a PaymentIntent with the payment method received from the frontend
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method: paymentMethodId,
      amount: 1000, // Replace with the actual amount in cents (e.g., 1000 = $10.00)
      currency: 'usd', // Replace with your preferred currency code
      confirmation_method: 'manual',
      confirm: true,
    });

    // Return a success message to the frontend
    res.json({ message: 'Payment successful!' });
  } catch (error) {
    // Handle any errors and return an error message to the frontend
    res.status(500).json({ error: 'Error processing the payment.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
