// Import Packages
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Import environment config
require("dotenv/config");

// Initiate express app
const app = express();

// Common middleware
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const resourceRoutes = require("./routes/resourceRoutes");

// Router middleware
app.use("/", authRoutes);
app.use("/users", userRoutes);
app.use("/resources", resourceRoutes);

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB!");
});

//Port listening
app.listen(3000);
