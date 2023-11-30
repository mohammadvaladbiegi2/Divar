const DivarDB = require("./DB/DivarDB");
const express = require("express");
const cors = require("cors");
const bodyparrser = require("body-parser");

const app = express();
app.use(bodyparrser.json());
app.use(cors());

app.get("/product/all", (req, res) => {
  let allproductquery = "SELECT * FROM product";

  DivarDB.query(allproductquery, (error, result) => {
    if (error) {
      res.send(null);
      console.log(error);
    } else {
      res.send(JSON.stringify(result));
      res.end();
    }
  });
});
app.get("/product/:shortname", (req, res) => {
  let shortname = req.params.shortname;

  let mainproductquery = `SELECT * FROM product WHERE shortname = '${shortname}'`;

  DivarDB.query(mainproductquery, (error, result) => {
    if (error) {
      res.send(null);
      console.log(error);
    } else {
      res.send(JSON.stringify(result));
      res.end();
    }
  });
});

app.listen(2501, () => {
  console.log("server run on port 2501");
});
