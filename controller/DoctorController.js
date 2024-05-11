const doctor = require("../models/DoctorsModel");

exports.addDoctor = async (req, res) => {
  try {
    const { name, specialist, availables, rating } = req.body;
    console.log(name, specialist, availables, rating);
    const newDoctor = new doctor({
      name: name,
      specialist: specialist,
      rating: rating,
      availables: availables,
    });
    const savedDoctor = await newDoctor.save();
    res.status(201).send(savedDoctor);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};
exports.getDoctor = async (req, res) => {
  try {
    const { specialist, rating } = req.body;
    const doctors = await doctor.find({
      specialist: specialist,
      rating: rating,
    });
    const allDoctor = [];

    for (const docs in doctors) {
      //   doctor = doctor.availables.filter((dc = dc.status == "false"));
      console.log("Doctor", docs);
      allDoctor.push(doctor);
    }
    // res.status(200).send(doctor);

    res.status(200).send(doctors);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};
