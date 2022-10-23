const mongoose = require('mongoose');

async function connect() {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected")
}
async function disconnect() {
    console.log("disconnected")
    await mongoose.disconnect()
}

const db = {connect, disconnect}

export default db;
