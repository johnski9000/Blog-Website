
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
