import Try from "../components/try";
import CustomInputDropdown from "../components/custominput";
import Razorpay from "razorpay";

export default function tried({}) {
  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });

  const handlePayment = async () => {
    const options = {
      amount: 1000, // amount in paise
      currency: "INR",
      receipt: "receipt_order_12345",
      payment_capture: 1,
    };

    try {
      const response = await fetch("/api/createOrder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(options),
      });
      const order = await response.json();
      razorpay.orders.create(order, (err, payment) => {
        if (err) {
          console.error(err);
          return;
        }
        razorpay.createPayment(payment);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Try />
      <CustomInputDropdown />
      <button onClick={handleSubmit}> Pay NOW </button>
    </>
  );
}
