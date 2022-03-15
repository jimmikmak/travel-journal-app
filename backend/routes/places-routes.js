/* eslint-disable no-undef */
const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Sydney Opera House",
    description: "One of the most famous opera houses in the world!",
    location: {
      lat: -33.8567844,
      lng: 151.2152967,
    },
    address: "Bennelong Point, Sydney NSW 2000",
    creator: "u1",
  },
];

// eslint-disable-next-line no-unused-vars
router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid; // { pid: "p1" }
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  res.json({ place }); // => { place } => { place: place }
});

module.exports = router;
