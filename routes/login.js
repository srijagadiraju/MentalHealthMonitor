// Import required modules and User model
const express = require("express");
const UserModel = require("../models/users");
const bcrypt = require("bcrypt");

// Create an Express router
const router = express.Router();

// Login route
router.post("/login", async (req, res) => {
  //console.log("reached login route");
  //console.log(req.body);
  const { credentialType, credential, password } = req.body;

  let user;
  if (credentialType === "Username") {
    user = await UserModel.getUserByUsername(credential);
  } else if (credentialType === "Email") {
    user = await UserModel.getUserByEmail(credential);
  } else {
    return res.status(400).json({ error: "Invalid credential type" });
  }

  if (!user) {
    return res.status(401).json({ error: "User not found" });
  }
  //console.log(user)
  //console.log(password)

  const passwordMatch = await UserModel.verifyPassword(user.email, password);

  if (passwordMatch) {
    res.status(200).json({ message: "Login successful" });
  } else {
    res.status(401).json({ error: "Invalid password" });
  }
});

module.exports = router;
