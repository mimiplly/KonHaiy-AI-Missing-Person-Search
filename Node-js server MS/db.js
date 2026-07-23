require('dotenv').config();

const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/facedb";

const connectToMongo = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("connected to mongo successfully");
    } catch (error) {
        console.error(error);
    }
};

module.exports = connectToMongo;