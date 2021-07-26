const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "liverpool",
  database: "master",
  port: 3306
});

connection.connect((error) => {
  if (error) console.log(error);
  console.log("You are connected to the database");
});

module.connection = connection;