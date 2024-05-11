const router = require("express").Router();

const userController = require("../controller/userController");

router.post("/signup", userController.addUser);

module.exports = router;
