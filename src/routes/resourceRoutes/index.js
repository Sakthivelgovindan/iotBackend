const express = require("express");
const router = express.Router();

// Verification
const verify = require("./../authRoutes/verifyToken");

// Mongoose Schema
const resourceInfo = require("../../models/resourceInfo");

// Get all resources
router.get("/", async (req, res) => {
  try {
    const resourceDetails = await resourceInfo.find();
    res.json(resourceDetails);
  } catch (err) {
    res.send({ error: err });
  }
});

// Get all resources
router.get("/:resourceId", async (req, res) => {
  try {
    const resourceDetail = await resourceInfo.findById(req.params.resourceId);
    res.json(resourceDetail);
  } catch (err) {
    res.send({ error: err });
  }
});

// Post all resources
router.post("/", async (req, res) => {
  // Insert user info
  const insertResource = new resourceInfo(req.body);
  try {
    const saveResource = await insertResource.save();
    res.json(saveResource);
  } catch (err) {
    res.send({ error: err });
  }
});

// export router
module.exports = router;
