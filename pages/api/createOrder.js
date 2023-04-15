import nc from "next-connect";
// import auth from "../../middleware/auth";
import Order from "../../models/Order";
import db from "../../utils/db";
const Razorpay = require("razorpay");
const shortid = require("shortid");

const handler = nc();
handler.post(async (req, res) => {
    await db.connectDb();
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_API_KEY,
      key_secret: process.env.RAZORPAY_SECRET_KEY,
    });

    // Create an order -> generate the OrderID -> Send it to the Front-end
    const payment_capture = 1;
    const amount = 499;
    const currency = "INR";
    const options = {
      amount: (amount * 100).toString(),
      currency,
      receipt: shortid.generate(),
      payment_capture,
    };

    try {
      const response = await razorpay.orders.create(options);
      // order = new Order(order);
      // await order.save();
      await db.disconnectDb();
      res.status(200).json({
        id: response.id,
        currency: response.currency,
        amount: response.amount,
      });
    } catch (err) {
      console.log(err);
      await db.disconnectDb();
      res.status(400).json(err);
    }
});

export default handler;

