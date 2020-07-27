const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const router = express.Router();

// Mongoose Schema
const userInfo = require("../../models/userInfo");

// Validation
const { userValidation, loginValidation } = require("./validation");

// Register new user
router.post("/register", async (req, res) => {
  // Validate user info
  const { error } = userValidation(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  // Check email already exist
  const emailExist = await userInfo.findOne({
    "email-id.primary": req.body["email-id"].primary,
  });
  if (emailExist) return res.json({ error: "Email already exist" });

  // Create unique 12 character using genSalt
  const salt = await bcrypt.genSalt(12);
  // Hash password
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  req.body.password = hashPassword;

  // Insert user info
  const insertUser = new userInfo(req.body);
  try {
    const saveUser = await insertUser.save();
    res.json({ userId: saveUser._id });
  } catch (err) {
    res.send({ error: err });
  }
});

// Login
router.post("/login", async (req, res) => {
  // Validate
  const { error } = loginValidation(req.body);
  if (error)
    res.status(400).json({
      error: error.details[0].message,
    });

  // Check email exist or not
  const user = await userInfo.findOne({
    "email-id.primary": req.body["email-id"],
  });
  if (!user)
    return res.json({
      error: "Email not exists.",
    });

  // Password verification
  const validatePassword = await bcrypt.compare(
    req.body.password,
    user.password
  );

  if (!validatePassword)
    return res.status(400).json({
      error: "Invalid password",
    });

  // Generate token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token);

  try {
    await userInfo.updateOne(
      { _id: user._id },
      { $set: { "auth-token": token } }
    );
    return res.json({ userId: user._id, authToken: token });
  } catch (err) {
    return res.send({ error: err });
  }
});

module.exports = router;
