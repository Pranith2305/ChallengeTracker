import mongoose from "mongoose";

const progressSchema = new mongoose.Schema({
    userId : {type : String, require: true},
    challengeId : {type : mongoose.Schema.Types.ObjectId, ref: "Challenge" },
    streak: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    lastLogged: { type: Date },
})

module.export = mongoose.Schema("Progress", progressSchema);
