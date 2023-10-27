require("dotenv").config();
const express = require("express");
// const path = require("path");
const app = express();
const port = process.env.PORT || 8082;
const hostname = process.env.HOST_NAME;
const configViewEngine = require("./config/viewEngine");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
configViewEngine(app);
const webRouter = require("./routes/web");
const connection = require("./config/database");
app.use("/", webRouter);
connection.query("select * from Users", function (err, results, fields) {
  console.log(">>>check result:", results); // results contains rows returned by server
});

app.listen(port, hostname, () => {
  console.log(`Example app listening on port ${port}`);
});
