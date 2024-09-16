const pool = require("../config/database");
const cloudinary = require("../utils/cloudinary");

const signinAdmin = (req, res) => {
  const { ID, password } = req.body;
  if (!ID || !password)
    return res.status(500).json({ message: "Please fill all required fields" });

  try {
    const query = "SELECT * FROM admin WHERE adminId = ?";
    pool.query(query, [ID], async (err, result) => {
      if (err)
        return res
          .status(500)
          .json({ message: "Admin cannot be found", err: err.message });
      //if customer with username exist
      console.log(result);
      if (result.length >= 1) {
        console.log(result);
        const user = result[0];
        return res.status(200).json({ message: `Welcome back Admin` });
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

const postMenu = (req, res) => {
  // console.log(req.file)
  const image = req.file.path;
  const { category, menu, description, oldprice, newprice, rating } =
    JSON.parse(req.body.json);
  // console.log(typeof req.body.json);
  // console.log(category);
  if (!category || !menu || !description || !newprice || !rating) {
    return res.status(500).json({ message: "Please fill all required fields" });
  } else {
    // upload image to cloudinary
    cloudinary.uploader.upload(image, (err, result) => {
      if (err) {
        return res.status(500).json(err.message);
      }
      if (result) {
        console.log(result);
        const imageUrl = result.secure_url;
        // upload to database
        try {
          const checkQuery =
            "insert into menu(menuItem, menuPrice, menuImage, menuInfo, menuCategory, menuOldPrice, menuRating) values (?, ?, ?, ?, ?, ?, ?)";
          pool.query(
            checkQuery,
            [menu, newprice, imageUrl, description, category, oldprice, rating],
            (error, result) => {
              if (error)
                return res.status(500).json({
                  message: "An error occured while updating menu",
                  error: error.message,
                });
              if (result) {
                console.log(result);
                res.status(201).json({
                  message: "Menu has been added",
                });
              }
            }
          );
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            message: "An internal error occurred",
            error: error.message,
          });
        }
      }
    });
  }
};

const postBlog = (req, res) => {
  console.log(req.file);
  const image = req.file.path;
  const { title, body } = JSON.parse(req.body.json);
  console.log(req.body);
  if (!title || !body) {
    return res.status(500).json({ message: "Please fill all required fields" });
  } else {
    // upload image to cloudinary
    cloudinary.uploader.upload(image, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json(err.message);
      }
      if (result) {
        console.log(result);
        const imageUrl = result.secure_url;
        // upload to database
        try {
          const checkQuery =
            "insert into blog(blogTitle, blogBody, blogImagePath) values (?, ?, ?)";
          pool.query(
            checkQuery,
            [title, body, imageUrl],
            async (error, result) => {
              if (error)
                return res.status(500).json({
                  message: "An error occured while updating blog",
                  error: error.message,
                });
              if (result) {
                console.log(result);
                res.status(201).json({
                  message: "Blog has been updated",
                });
              }
            }
          );
        } catch (error) {
          console.log(error);
          return res.status(500).json({
            message: "An internal error occurred",
            error: error.message,
          });
        }
      }
    });
  }
};

module.exports = { postMenu, postBlog, signinAdmin };
