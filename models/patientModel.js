const mongoose = require("mongoose");

const patient = mongoose.Schema({
  name: "string",
  phone: "string",
});

const data = mongoose.model("patient", patient) || mongoose.model("patient");

module.exports = data;
