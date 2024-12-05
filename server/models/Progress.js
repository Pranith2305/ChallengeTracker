const mongoose = require('mongoose');

const progressSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    challengeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge', required: true },
    streak: { type: Number, default: 0 },
    points: { type: Number, default: 0 },
    lastLogged: { type: Date, default: Date.now }
});

const Progress = mongoose.model('Progress', progressSchema);
module.exports = Progress;