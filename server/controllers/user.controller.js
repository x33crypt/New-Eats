const pool = require("../config/database");
const { v4 } = require("uuid");
const { hashpassword, generateToken } = require("../utils/utils");
const bcrypt = require("bcryptjs");

const signupUser = (req, res) => {
  const { firstname, lastname, username, email, phone, password } = req.body;
  console.log(req.body);
  if (!firstname || !lastname || !username || !email || !phone || !password)
    return res.status(400).json({ message: "Please fill all required fields" });

  try {
    const checkQuary =
      "SELECT email, username FROM customers WHERE email = ? OR username = ?";

    //checking if user already exixt !
    pool.query(checkQuary, [email, username], async (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "An error just occured", error: err.message });
      if (result.length >= 1) {
        console.log("Existing User:", result);
        res.status(400).json({
          message: "User with email or password already exist !",
        });
      } else {
        //creating a new User if user does not exist
        const customerId = v4();
        console.log(customerId);
        const hashedPassword = await hashpassword(password);
        const query =
          "INSERT INTO customers (customerId, firstname, lastname, username, email, phone, password) VALUES(?, ?, ?, ?, ?, ?, ?)";
        pool.query(
          query,
          [
            customerId,
            firstname,
            lastname,
            username,
            email,
            phone,
            hashedPassword,
          ],
          (err, result) => {
            if (err)
              return res.status(500).json({
                message: "An error occured while creating user",
                error: err.message,
              });
            if (result) {
              console.log(result);
              res.status(201).json({
                message: "sign up successful! Login Now.",
              });
            }
          }
        );
      }
    });
  } catch (error) {
    console.log("Error during signup process:", error);
    return res
      .status(500)
      .json({ message: "An internal error occurred", error: err.message });
  }
};

const signinUser = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(500).json({ message: "Please fill all required fields" });

  try {
    const query = "SELECT * FROM customers WHERE username = ?";
    pool.query(query, [username], async (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Cannot query the databse", err: err.message });
      //if customer with username exist
      // console.log(result);
      if (result.length >= 1) {
        console.log("result match", result);
        const user = result[0];
        // console.log(user.password);
        //checking if password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) console.log(result);
        // if user details is valid login customer and generate a token to accesss protected components
        return res.status(200).json({
          message: `Welcome back ${user.lastname}`,
          token: generateToken(user.customerId),
          user,
        });
      } else {
        console.log("error block");
        res.status(400).json({ message: "Invalid email or password!" });
      }
    });
  } catch (error) {
    console.log("Error during signup process:", error);
    return res
      .status(500)
      .json({ message: "An internal error occurred", error: err.message });
  }
};

module.exports = { signupUser, signinUser };
