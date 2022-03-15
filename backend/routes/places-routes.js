/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

// eslint-disable-next-line no-unused-vars
router.get("/", (req, res, next) => {
  console.log("GET Request in Places");
  res.json({ message: "It works!" });
});

module.exports = router;
