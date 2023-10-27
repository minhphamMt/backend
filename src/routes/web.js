const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getABC,
  getXYZ,
  postCreateUser,
} = require("../controller/homecontroler");
router.get("/", getHomePage);
router.get("/abc", getABC);
router.get("/xyz", getXYZ);
router.post("/create-user", postCreateUser);
module.exports = router;
