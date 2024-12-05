const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Replace with ObjectId if using users collection
  challengeId: { type: mongoose.Schema.Types.ObjectId, ref: "Challenge" },
  streak: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  lastLogged: { type: Date },
});

module.exports = mongoose.model("Progress", progressSchema);
