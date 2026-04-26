const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "nursery"
});

module.exports = pool.promise();