const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {type: String, required: true},
  email:  {type: String, required: true, unique: true },
  password:  {type: String, required: true },
  image: {type: String}
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
