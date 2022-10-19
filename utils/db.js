const mongoose = require('mongoose');
const User = require("./User")

async function connect() {
    await mongoose.connect(MONGODB_URI);
    console.log("connected")
}
async function disconnect() {
    await mongoose.disconnect()
}

const db = {connect, disconnect}

export default db;