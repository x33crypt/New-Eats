const jwt = require("jsonwebtoken");
const pool = require("../config/database");

const protect = async (req, res, next) => {
  console.log(req.headers.authorization);
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    // Extract the token from the Authorization header
    const token = req.headers.authorization.split(" ")[1];
    console.log(token);
    try {
      console.log(token);
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      console.log("decoded token: ", decodedToken);
      // const date = new Date();
      // const currentTime = Math.floor(date.getTime() /1000)
      // console.log(decodedToken.exp - decodedToken.iat)
      // console.log(currentTime)
      // console.log(currentTime <= decodedToken.exp)
      // const validateToken =

      if (decodedToken) {
        const query = "SELECT * FROM customers WHERE customerId =?";
        pool.query(query, [decodedToken.id], (error, result) => {
          if (error) return res.status(500).json(error.message);
          if (result.length > 0) {
            req.customer = result[0].id;
            next();
          } else {
            return res.status(400).json("User does not exist!");
          }
        });
      } else {
        return res.status(400).json("Unauthorized! Invalid Token");
      }
    } catch (error) {
      return res.status(500).json({
        error: error.message,
        message: "Session expired. Sign in and try again",
      });
    }
  } else {
    return res.status(400).json({
      message: "Unauthorized, token not found. Please sign in!",
    });
  }
};

module.exports = protect;
