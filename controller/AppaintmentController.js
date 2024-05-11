const appointments = require("../models/Appointment");

exports.addAppointment = async (req, res) => {
  try {
    const { userId, doctorId, date, time, status, description } = req.body;
    const newAppointment = new appointments({
      userId: userId,
      doctorId: doctorId,
      date: date,
      time: time,
      status: status,
      description: description,
    });
    const result = await newAppointment.save();
    res.status(200).send(result);
  } catch (err) {
    res.status(500).send(err);
  }
};
