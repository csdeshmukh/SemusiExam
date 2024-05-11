const router = require("express").Router();

const appointmentController = require("../controller/AppaintmentController");

router.post("/addAppointment", appointmentController.addAppointment);

module.exports = router;
