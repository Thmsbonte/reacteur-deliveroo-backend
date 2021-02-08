const express = require("express");
const router = express.Router();
const restaurants = require("../restaurants.json");

// MODELS IMPORT

// ROUTES
router.get("/restaurant/get", (req, res) => {
  return res.status(200).json(restaurants);
});

module.exports = router;
