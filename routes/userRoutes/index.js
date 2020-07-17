const express = require("express");
const router = express.Router();

// Verification
const verify = require("./../authRoutes/verifyToken");

// Mongoose Schema
const userInfo = require("../../models/user-info");

// Get all users info
router.get("/", verify, async (req, res) => {
  try {
    const userDetails = await userInfo.find();
    res.json(userDetails);
  } catch (err) {
    res.send({ error: err });
  }
});

// Get particular user info
router.get("/:userId", async (req, res) => {
  try {
    const userDetail = await userInfo.findById(req.params.userId);
    res.json(userDetail);
  } catch (err) {
    res.send({ error: err });
  }
});

// Delete particular user info
router.delete("/:userId", async (req, res) => {
  try {
    const deleteUser = await userInfo.remove({ _id: req.params.userId });
    res.json(deleteUser);
  } catch (err) {
    res.send({ error: err });
  }
});

// Update particular user info
router.patch("/:userId", async (req, res) => {
  try {
    const updateUser = await userInfo.update(
      { _id: req.params.userId },
      { $set: req.body }
    );
    res.json(updateUser);
  } catch (err) {
    res.send({ error: err });
  }
});

// export router
module.exports = router;
