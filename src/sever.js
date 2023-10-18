const express = require("express");
const path = require("path");
require("dotenv").config();
// import express from "express";
console.log(">>check env:", process.env);
const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOST_NAME;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("sample.ejs");
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
