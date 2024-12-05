import mongoose from "mongoose";

const challengeSchema = new mongoose.Schema({
    name : {type : String, require: true},
})

module.export = mongoose.model("Challenge", challengeSchema);
