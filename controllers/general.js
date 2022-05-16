const express = require("express");
const router = express.Router();
const generalData = require("../data/generalData.json");

router.get("/", (req, res) => {
  res.send(generalData);
  /* res.send(generalData); */
});

router.get("/:id", (req, res) => {
  try {
    const generalId = parseInt(req.params.id);
    /* const selectedGeneral = general.findById(generalId);
    res.send(selectedGeneral); */
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

router.post("/", (req, res) => {
  /* const data = req.body;
  const newGeneral = general.create(data);
  res.status(201).send(newGeneral); */
});

router.delete("/:id", (req, res) => {
  /* const generalId = parseInt(req.params.id);
  const generalToDestroy = general.findById(generalId);
  generalToDestroy.destroy();
  res.status(204).send(); */
});

module.exports = router;
