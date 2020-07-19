const mongoose = require("mongoose");

const componentSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  status: {
    type: Number,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
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
  devices: [componentSchema],
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
  boxes: [boxSchema],
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
  rooms: [roomSchema],
});

const buildingSchema = mongoose.Schema({
  id: {
    type: String,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  floors: [floorSchema],
});

const resourceSchema = mongoose.Schema(
  {
    "user-id": {
      type: String,
      require: true,
    },
    buildings: [buildingSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model("resource-infos", resourceSchema);
