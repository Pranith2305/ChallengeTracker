const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db'); // Ensure correct path to your db.js file

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const challengeRoutes = require("./routes/challenge"); 
const progressRoutes = require("./routes/progress"); 
const userRoutes = require("./routes/userRoutes");

app.use("/api/challenges", challengeRoutes); 
app.use("/api/progress", progressRoutes); 
app.use("/api/users", userRoutes)


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));