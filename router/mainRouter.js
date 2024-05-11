const router = require("express").Router();

const patient = require("./PactientRouter");
const appointment = require("./AppointmentRouter");
const rating = require("./RatingRouter");
// const doctor = require("./DoctorRouter");
const doctor = require("./DoctorRouter");

router.use("/doctor", doctor);

router.use("/patient", patient);

router.use("/appointment", appointment);

router.use("/rating", rating);

module.exports = router;
