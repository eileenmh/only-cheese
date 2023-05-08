const router = require("express").Router();
const { Cheese } = require("../../models");

router.get("/all", async (req, res) => {
  try {
    const allCheeses = await Cheese.findAll();
    console.log(allCheeses);
    res.send(allCheeses);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
