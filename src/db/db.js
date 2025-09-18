const mongoose = require('mongoose');



async function connectDB() {
    const mongoURI = process.env.MONGO_URI || 'mongodb://