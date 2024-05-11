const user = require("../models/UserModel");
exports.addUser = async (req, res) => {
  try {
    //   "email": "johndoe@example.com",
    // "password": "password123",
    // "phone": "+1234567890",
    // "city": "New York",
    // "state": "NY",
    // "country": "USA"
    const { name, email, password, phone, city, state, country } = req.body;

    const newUser = new user({
      name: name,
      email: email,
      password: password,
      phone: phone,
      city: city,
      state: state,
      country: country,
    });
    await newUser.save();
    res.status(200).send({ message: "User added successfully" });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
