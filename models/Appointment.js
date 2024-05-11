const mongoose = require("mongoose");
const doctor = require("./DoctorsModel");
const patient = require("./patientModel");
const appointment = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
  },
  date: "date",
  time: Date,
  status: "Boolean",
  description: "String",
});

// module.exports = mongoose.model("appointment", appointment);;
const data =
  mongoose.model("appointment", appointment) || mongoose.model("appointment");

module.exports = data;
