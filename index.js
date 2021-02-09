const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");
const dotenv = require('dotenv');


require("dotenv").config();
app = express();
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.use(express.static(path.join(__dirname, "public"))); //linking stylesheet
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  message = "";
  res.sendFile("views/index.html", {
    root: path.join(__dirname, "./"),
  });
});


app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});