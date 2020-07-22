// Import Packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const cors = require("cors");
let interval;

// Import environment config
require("dotenv/config");

// connect to remote mongodb (Mongodb Atlas)
const MONGOOSE_URL = process.env.DB_CONNECTION;
mongoose.connect(MONGOOSE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

// create mongo connection to track db connection status
const mongo = mongoose.connection;

//log on connection error
mongo.on("error", (error) => {
  console.error("mongo: " + error.name);
});

//log on successful connection
mongo.on("connected", () => {
  console.log("mongo: Connected");
});

//log on disconnection
mongo.on("disconnected", () => {
  console.warn("mongo: Disconnected");
});

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

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("room", function (data) {
    const { deviceId, deviceStatus, devicePath } = data;
    io.sockets.emit("status", { deviceId, deviceStatus, devicePath });
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

//Port listening
server.listen(8000, function () {
  var port = server.address().port;
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
