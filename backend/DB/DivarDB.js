const mysql = require("mysql");

const DivarDB = mysql.createConnection({
  host: "divarapidb",
  user: "root",
  password: "WYc8PzkfHQAhsRbE5ypkRYc9",
  database: "practical_proskuriakova",
  port: 3306,
});

module.exports = DivarDB;
