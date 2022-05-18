const express = require("express");
const router = express.Router();
const placesData = require("../data/placesData.json");
const DataModel = require("../models/dataModel");

router.get("/", (req, res) => {
  res.send(placesData);
});

router.get("/:id", (req, res) => {
  try {
    const placesId = req.params.id;
    const selectedPlaces = placesData.find((x) => {
      return x.id == placesId;
    });
    res.status(200).send(selectedPlaces);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

router.post("/", (req, res) => {
  const newPlacesPost = req.body;
  const newPlace = DataModel.create({ ...newPlacesPost, type: "placesData" });
  res.status(201).send(newPlace);
});

router.patch("/:id", (req, res) => {
  if (req.body.reactions) {
    const placesId = req.params.id - 1;
    let newEmojiCount = req.body.reactions - 1;
    placesData[placesId].reactions[newEmojiCount]++;
    res.send(placesData[placesId]);
  } else if (req.body.reply) {
    const placesId = req.params.id - 1;
    let newReply = req.body.reply;
    placesData[placesId].replies.unshift(newReply);
    res.send(newReply);
  }
});

router.delete("/:id", (req, res) => {
  /* const placesId = parseInt(req.params.id);
  const placesToDestroy = places.findById(placesId);
  placesToDestroy.destroy();
  res.status(204).send(); */
});

module.exports = router;
