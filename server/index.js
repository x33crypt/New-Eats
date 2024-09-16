const express = require("express");
const cors = require("cors");
const env = require("dotenv").config();
const pool = require("./config/database");
const menuRoutes = require("./Routes/menu.routes");
const userRoutes = require("./Routes/user.route");
const adminRoutes = require("./Routes/admin.routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT;

app.use("/api/v1", menuRoutes);
app.use("/api/v1", userRoutes);
app.use("/api/v1", adminRoutes);

// console.log(port);
app.listen(port, () => console.log("server running on port", port));
