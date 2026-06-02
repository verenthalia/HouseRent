const mongoose = require('mongoose');

const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB Connected');

    } catch (err) {

        throw new Error(`Could not connect to MongoDB: ${err}`);

    }

};

module.exports = connectDB;