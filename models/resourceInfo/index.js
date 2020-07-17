const mongoose = require("mongoose");

const resourceSchema = mongoose.Schema(
  {
    "user-id": {
      type: String,
      ref: "user-infos",
      require: true,
    },
    buildings: [buildingSchema],
  },
  { timestamps: true }
);

const buildingSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  floorSchema: [floorSchema],
});
const floorSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  roomSchema: [roomSchema],
});
const roomSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  boxSchema: [boxSchema],
});
const boxSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("resource-infos", resourceSchema);
