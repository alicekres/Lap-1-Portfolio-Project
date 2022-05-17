const express = require("express");
const router = express.Router();
const generalData = require("../data/generalData.json");
const DataModel = require("../models/dataModel");

router.get("/", (req, res) => {
  res.send(generalData);
});

router.get("/:id", (req, res) => {
  try {
    const generalId = req.params.id;
    const selectedGeneral = generalData.find((x) => {
      return x.id == generalId;
    });
    res.status(200).send(selectedGeneral);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
});

router.post("/", (req, res) => {
  const newGeneralPost = req.body;
  const newGeneral = DataModel.create({
    ...newGeneralPost,
    type: "generalData",
  });
  res.status(201).send(newGeneral);
});

router.post("/reply", (req, res) => {
  const newGeneralReply = req.body;
  const newGeneral = DataModel.create({
    ...newGeneralPost,
    type: "generalData",
  });
  res.status(201).send(newGeneral);
});

router.delete("/:id", (req, res) => {
  /* const generalId = parseInt(req.params.id);
  const generalToDestroy = general.findById(generalId);
  generalToDestroy.destroy();
  res.status(204).send(); */
});

module.exports = router;
