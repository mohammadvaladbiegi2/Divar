const DivarDB = require("./DB/DivarDB");
const express = require("express");
const cors = require("cors");
const bodyparrser = require("body-parser");

const app = express();
app.use(bodyparrser.json());
app.use(cors());

DivarDB.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connect to db");
  }
});

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

app.post("/newproduct", (req, res) => {
  let body = req.body;
  let time = new Date().toLocaleDateString("fa-IR");
  let shortnamecrator = crypto.randomUUID().slice(0, 6);
  let imag = `/images/${body.img.slice(12)}`;
  let addproductquery = `INSERT INTO product VALUES (NULL,"${body.title}", "${body.price}", "${body.description}", "${time}", "${body.phone}", "${body.category}", "${body.city}", "${imag}", "${shortnamecrator}", "${body.function}", "${body.condition}", "${body.meterage}")`;

  DivarDB.query(addproductquery, (error, result) => {
    if (error) {
      res.send(null);
      console.log(error);
    } else {
      res.send(true);
      res.end();
    }
  });
});

app.listen(2501, () => {
  console.log("server run on port 2501");
});
