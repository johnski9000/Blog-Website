const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    userEmail: {type: String, required: true},
    userName: {type: String, required: true},
  imageUrl: {type: String, required: true},
  // comment: {type: String, required: true}
});

const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;
