const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello world");
  /* res.send(attractionsData); */
});

router.get("/:id", (req, res) => {
  try {
    const attractionsId = parseInt(req.params.id);
    /* const selectedAttractions = attractions.findById(attractionsId);
    res.send(selectedAttractions); */
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

router.post("/", (req, res) => {
  /* const data = req.body;
  const newAttractions = attractions.create(data);
  res.status(201).send(newAttractions); */
});

router.delete("/:id", (req, res) => {
  /* const attractionsId = parseInt(req.params.id);
  const attractionsToDestroy = attractions.findById(attractionsId);
  attractionsToDestroy.destroy();
  res.status(204).send(); */
});

module.exports = router;
