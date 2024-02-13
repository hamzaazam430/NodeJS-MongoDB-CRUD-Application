const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/";

const connectToMongo = async() => {
    try{
        mongoose.set("strictQuery", false);
        mongoose.connect("mongodb://localhost:27017/");
        console.log("Connected to MongoDB");
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectToMongo;