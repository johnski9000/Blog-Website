import User from "../../../Model/User";
import db from "../../../utils/db";
import bcryptjs from "bcryptjs";

async function handler(req, res) {
  const { name, email, password } = req.body;
  await db.connect();
  const newUser = new User({
    name,
    email,
    password: bcryptjs.hashSync(password),
  });
  const user = await newUser.save();
  await db.disconnect;
  res.status(201).send({
    message: "user created!",
    _id: user._id,
    name: user.name,
    email: user.email,
  });
}

export default handler;
