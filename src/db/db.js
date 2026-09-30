const mongoose = require("mongoose");


async function connectDB() {

    await mongoose.connect("mongodb+srv://ragni2005kumari2021_db_user:G7XUHfC3NrOgtlGy@backend.hifrpzl.mongodb.net/halley")

    console.log("Connected to DB");
    
}

module.exports = connectDB