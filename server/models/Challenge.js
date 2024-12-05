const mongoose = require('mongoose');


const challengeSchema = new mongoose.Schema({
    name : {type : String, require: true},
    description : {type : String, require: true},
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const Challenge = mongoose.model("Challenge", challengeSchema);
module.exports = Challenge;
