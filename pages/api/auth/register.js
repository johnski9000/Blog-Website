import User from "../../../Model/User";
import db from "../../../utils/db";
import bcryptjs from "bcryptjs";

async function handler(req, res) {
  const { name, email, password } = req.body;
  if (
    !name ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 5
  ) {
    res.status(422).json({
      message: 'Validation error',
    });
    return;
  }
  await db.connect();
  const newUser = new User({
    name,
    email,
    password: bcryptjs.hashSync(password),
  });
  const user = await newUser.save();
  console.log("New user created: " + user)
  await db.disconnect;
  res.status(201).send({
    message: "user created!",
    _id: user._id,
    name: user.name,
    email: user.email,
  });
}

export default handler;
