import nc from "next-connect";
import auth from "../../../../middleware/auth";
import Order from "../../../../models/Order";
import db from "../../../../utils/db";

const handler = nc().use(auth);
export default async function handler(req, res) {
  const options = {
    amount: 1000, // amount in paise
    currency: "INR",
    receipt: "receipt_order_12345",
    payment_capture: 1,
  };

  try {
    const order = await razorpay.orders.create(options);
    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
}
