const express = require("express");
const mysql = require("mysql2");
const bcrypt = require('bcrypt');

const app = express();

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

const connection = mysql.createConnection({
  host: "192.168.100.4",
  user: "keyaki2022",
  password: "-KeyaKi2022%$",
  port: 3306,
  database: "keyaki2022"
});
