const express = require("express");
const { signupUser, signinUser } = require("../controllers/user.controller.js");

const userRoutes = express.Router();

userRoutes.post("/signup", signupUser);
userRoutes.post("/signin", signinUser);

module.exports = userRoutes;
