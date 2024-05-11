const mongoose = require("mongoose");
const doctor = require("./DoctorsModel");
const patient = require("./patientModel");
const rating = mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
  },
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  rating: "string",
  comment: "string",
});

const data = mongoose.model("rating", rating) || mongoose.model("rating");

module.exports = data;
