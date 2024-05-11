const patient = require("../models/patientModel");
exports.addPatient = async (req, res) => {
  try {
    const { name, phone } = req.body;

    const newPatient = new patient({
      name,
      phone,
    });

    await newPatient.save();

    res.status(200).json({
      message: "patient added successfully",
    });
  } catch (err) {}
};
