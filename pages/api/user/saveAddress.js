import nc from "next-connect";
import User from "../../../models/User";
import db from "../../../utils/db";
import auth from "../../../middleware/auth";
import { getSession } from "next-auth/react";
const handler = nc().use(auth);

handler.post(async (req, res) => {
  try {
    db.connectDb();
    // console.log("fuck",req);
    const { address ,userId } = req.body;
    console.log("backend address", address);
    console.log("user backend", userId);
    const user = await User.findById(userId);
    console.log("assss",user._id);
    await user.updateOne({
      $push: {
        address: address,
      },
    });
    db.disconnectDb();
    // console.log("userrrrrrrrrrrrrrrrrr",user);
    console.log("apiiiiiiiiiiiiiiiiiii",user);
    return res.json({ addresses: user.address });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

export default handler;
