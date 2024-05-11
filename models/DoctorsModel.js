const mongoose = require("mongoose");

const doctor = mongoose.Schema({
  name: "string",
  specialist: "string",
  availables: [
    {
      day: Date,
      time: "string",
      status: {
        type: Boolean,
        default: false,
      },
    },
  ],
  rating: "string",
});

const data = mongoose.model("doctor", doctor) || mongoose.model("doctor");

module.exports = data;
