// src/Pages/PayPalPage.jsx
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const PayPalPage = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>Pay with PayPal</h2>

      <PayPalScriptProvider
        options={{
          "client-id": "Af4pqfyU8b3yxGkmhKNZCuBnXM8DWs-xP0FtoTncoUjeEN04Dl_RgpvcCzf5ORxMFTyvcJZmw7UikhBe", // Replace with your live or sandbox client ID
          currency: "USD",
          intent: "capture",
          "disable-funding": "credit,card" // Optional: focuses checkout on PayPal only
        }}
      >
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "5.00",
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              alert(`Payment successful! Thanks, ${details.payer.name.given_name}.`);
            });
          }}
          onError={(err) => {
            console.error("PayPal Checkout Error:", err);
            alert("Something went wrong. Check the console.");
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalPage;
