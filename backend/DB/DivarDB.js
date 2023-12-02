const mysql = require("mysql");

const DivarDB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "divar",
});

module.exports = DivarDB;
