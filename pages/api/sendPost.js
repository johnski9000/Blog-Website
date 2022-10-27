import Post from "../../Model/Post";
import db from "../../utils/db"

async function sendPostHandler(req, res) {
  const { email, name, imageUrl } = req.body;
  console.log(email, name, imageUrl)
  if (
    !email ||
    !name ||
    !imageUrl
  ) {
    res.status(422).json({
      message: 'Error message',
    });
    return;
  }
  await db.connect();
  const newPost = new Post({
    userEmail: email,
    userName: name,
    imageUrl: imageUrl
  });
  const post = await newPost.save();
  console.log("New post created: " + post)
  await db.disconnect;
  res.status(201).send({
    message: "post created!",
  });
}

export default sendPostHandler;
