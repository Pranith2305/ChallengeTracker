const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const challengeRoutes = require("./routes/challenges");
const progressRoutes = require("./routes/progress");

app.use("/challenges", challengeRoutes);
app.use("/progress", progressRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
