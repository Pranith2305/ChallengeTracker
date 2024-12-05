import mongoose from "mongoose";

const connectdb = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ChallengeTracker")
        console.log("MongoDb connected...")
    } catch(err){ 
        console.log("error message : ", err.message);
        process.exit(1);
    }
}

module.export = connectdb;