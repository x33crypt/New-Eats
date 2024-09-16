const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const hashpassword = async (password) => {
  // Generate a salt with 10 rounds
  const salt = await bcryptjs.genSalt(10);
  // Hash the password with the generated salt
  const hashedPassword = await bcryptjs.hash(password, salt);
  return hashedPassword;
};

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: 60 });
};

console.log(hashpassword);

module.exports = { hashpassword, generateToken };
