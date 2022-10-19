const mongoose = require("mongoose")


async function connect() {
    const db = await mongoose.connect(process.env.MONGODB_URI)
    console.log('New connection');
    conection.isConnected = db.connections[0].readyState
}


async function disconnect() {
    
}