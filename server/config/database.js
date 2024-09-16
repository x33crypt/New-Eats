const sql = require("mysql");

const pool = sql.createPool({
  user: process.env.USER,
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
});

pool.getConnection((err, conn) => {
  if (err) console.log("Could not connect to database: ", err);
  if (conn) {
    console.log("Database connected successfullY!");
  }
});

module.exports = pool;
