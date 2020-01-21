const mongoose = require("mongoose");
const User = require("./user");

module.exports = function() {
    //mongodb://username:password@host:port/database
    const connectionString = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}`; 
    console.log(`Connecting to ${connectionString}`);
    return mongoose.connect(connectionString, {
        useNewUrlParser: true
    });
}
