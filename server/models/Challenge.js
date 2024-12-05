const mongoose = require('mongoose');


const challengeSchema = new mongoose.Schema({
    name : {type : String, require: true},
})

module.export = mongoose.model("Challenge", challengeSchema);
