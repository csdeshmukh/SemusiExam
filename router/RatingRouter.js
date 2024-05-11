const router = require("express").Router();

const ratingController = require("../controller/RatingController");

router.post("/addRating", ratingController.giveRating);

module.exports = router;
