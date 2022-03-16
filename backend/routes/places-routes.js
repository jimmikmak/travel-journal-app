/* eslint-disable no-unused-vars */
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

router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid; // { pid: "p1" }
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });

  if (!place) {
    const error = new Error("Could not find a place for the provided id.");
    error.code = 404;
    throw error;
  }

  res.json({ place }); // => { place } => { place: place }
});

router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });

  if (!place) {
    const error = new Error("Could not find a place for the user id.");
    error.code = 404;
    return next(error);
  }

  res.json({ place });
});

module.exports = router;
