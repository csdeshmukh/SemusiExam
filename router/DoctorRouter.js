const router = require("express").Router();
const doctorController = require("../controller/DoctorController");

router.post("/signup", doctorController.addDoctor);
router.post("/search", doctorController.getDoctor);
module.exports = router;
