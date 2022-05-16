const express = require("express");
const router = express.Router();
const attractionsData = require("../data/attractionsData.json");
const DataModel = require("../models/dataModel");

router.get("/", (req, res) => {
  res.send(attractionsData);
});

router.get("/:id", (req, res) => {
  try {
    const attractionsId = req.params.id;
    const selectedattractions = attractionsData.find((x) => {
      return x.id == attractionsId;
    });
    res.send(selectedAttractions);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

router.post("/", (req, res) => {
  const newAttractionsData = req.body;
  const newAttraction = DataModel.create({
    ...newAttractionsData,
    type: "attractionsData",
  });
  res.status(201).send(newAttraction);
});

router.delete("/:id", (req, res) => {
  /* const attractionsId = parseInt(req.params.id);
  const attractionsToDestroy = attractions.findById(attractionsId);
  attractionsToDestroy.destroy();
  res.status(204).send(); */
});

module.exports = router;
