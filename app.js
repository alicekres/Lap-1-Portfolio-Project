const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.status(405).send("Not allowed!");
});

const generalRoutes = require("./controllers/general");
app.use("/general", generalRoutes);
const attractionsRoutes = require("./controllers/attractions");
app.use("/attractions", attractionsRoutes);
const placesRoutes = require("./controllers/places");
app.use("/places", placesRoutes);

module.exports = app;
