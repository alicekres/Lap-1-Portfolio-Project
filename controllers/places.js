const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
  /* res.send(placesData); */
});

router.get("/:id", (req, res) => {
  try {
    const placesId = parseInt(req.params.id);
    /* const selectedPlaces = places.findById(placesId);
    res.send(selectedPlaces); */
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

router.post("/", (req, res) => {
  /* const data = req.body;
  const newPlaces = places.create(data);
  res.status(201).send(newPlaces); */
});

router.delete("/:id", (req, res) => {
  /* const placesId = parseInt(req.params.id);
  const placesToDestroy = places.findById(placesId);
  placesToDestroy.destroy();
  res.status(204).send(); */
});

module.exports = router;
