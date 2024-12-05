const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db.js');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const challengeRoutes = require("./routes/challenge.js");
const progressRoutes = require("./routes/progress.js");

app.use("/challenges", challengeRoutes);
app.use("/progress", progressRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
