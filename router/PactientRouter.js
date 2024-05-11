const router = require("express").Router();
const patient = require("../controller/PatiantController");

router.post("/signup", patient.addPatient);

module.exports = router;
