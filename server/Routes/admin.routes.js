const express = require("express");
const {
  postMenu,
  postBlog,
  signinAdmin,
} = require("../controllers/admin.controller");

const multer = require("multer");
const storage = multer.diskStorage({
  filename: (req, file, cb) => cb(null, file.originalname),
});
const upload = multer({ storage });

const adminRoutes = express.Router();

adminRoutes.post("/signinadmin", signinAdmin);
adminRoutes.post("/postmenu", upload.single("image"), postMenu);
adminRoutes.post("/postblog", upload.single("image"), postBlog);

module.exports = adminRoutes;
