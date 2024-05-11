const ratting = require("../models/RatingModel");
const doctor = require("../models/DoctorsModel");
exports.giveRating = async (req, res) => {
  try {
    const { doctorId, patientId, rating, comment } = req.body;
    let doctorRating = await doctor.find({ id: doctorId });
    console.log(doctorRating);

    const newRating = new ratting({
      doctorId: doctorId,
      patientId: patientId,
      rating: rating,
      comment: comment,
    });
    await newRating.save();
    const allRati = await ratting.find({ doctorId: doctorId });

    let sum = 0;
    for (let rat in allRati) {
      sum += parseInt(rat.rating, 10);
    }
    console.log(sum / allRati.length);
    const newRatin = sum / allRati.length;
    const updateRating = await doctor.findOneAndUpdate(
      { _id: doctorId },
      { $set: { rating: newRating } },
      { new: true }
    );

    res.status(200).json({ message: "Rating added successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
