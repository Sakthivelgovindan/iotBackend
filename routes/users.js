const express = require("express");
const router = express.Router();
const userInfo = require("../models/user-info");

// Insert new user info
router.post("/", async (req, res) => {
  const insertUser = new userInfo(req.body);
  try {
    const saveUser = await insertUser.save();
    res.json(saveUser);
  } catch (err) {
    res.send({ message: err });
  }
});

// Get all users info
router.get("/", async (req, res) => {
  try {
    const userDetails = await userInfo.find();
    res.json(userDetails);
  } catch (err) {
    res.send({ message: err });
  }
});

// Get particular user info
router.get("/:userId", async (req, res) => {
  try {
    const userDetail = await userInfo.findById(req.params.userId);
    res.json(userDetail);
  } catch (err) {
    res.send({ message: err });
  }
});

// Delete particular user info
router.delete("/:userId", async (req, res) => {
  try {
    const deleteUser = await userInfo.remove({ _id: req.params.userId });
    res.json(deleteUser);
  } catch (err) {
    res.send({ message: err });
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
    res.send({ message: err });
  }
});

// export router
module.exports = router;
