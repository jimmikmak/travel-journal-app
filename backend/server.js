/* eslint-disable no-undef */
const express = require("express");
// eslint-disable-next-line no-unused-vars
const bodyParser = require("body-parser");

const placesRoutes = require("./routes/places-routes");

const app = express();

app.use(placesRoutes);

app.listen(5555);
