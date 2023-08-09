
import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 5000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

// Your PhonePe API credentials
const PHONEPE_API_KEY = "972d4b31-3ec4-4471-be77-b0df90a4e67d";
const PHONEPE_API_BASE_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";

app.get('/', (req, res) => {
  res.send('<h1>html</h1>')
})
// Endpoint to handle the payment request from the frontend
app.post("/api/payment", async (req, res) => {
  console.log('getting error');

  try {
        // Get the payment request data from the frontend
    const { amount, orderId, callbackUrl } = req.body;

    // Make API call to PhonePe Business Payment Gateway to initiate the payment
     const response = await axios.post(
      `${PHONEPE_API_BASE_URL}/v4/payment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${PHONEPE_API_KEY}`,
        },
        body: JSON.stringify({
          amount,
          "merchantUserId": "MUID123",
        redirectUrl: "https://webhook.site/redirect-url",
        redirectMode: "POST",
      callbackUrl: "https://webhook.site/callback-url",
       merchantUserId: "MUID123",
          merchantId: "M1KDULVI2IHU",
          merchantTransactionId: "MT7850590068188104",
          returnUrl: callbackUrl,
          paymentInstrument: {
            "type": "PAY_PAGE"
          },
          orderItems: [
            {
              name: "Product Name",
              quantity: 1,
              unitPrice: amount,
            },
          ],
        }),
      }
    );

    // Parse the response data
    const responseData = await response.json();

    // Send the payment URL back to the frontend
    res.status(200).json({ paymentUrl: responseData.data.paymentUrl });
  } catch (error) {
    // Handle any error that occurs during the payment request
    console.error("Error initiating payment:", error.message);
    res.status(500).json({ error: "Failed to initiate payment" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
