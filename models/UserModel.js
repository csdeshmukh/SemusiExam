const mongodb = require("mongoose");

const user = new mongodb.Schema({
  name: String,
  email: String,
  password: String,
  phone: String,
  address: String,
  city: String,
  state: String,
  country: String,
});
//here we create a new model inside the database
const data = mongodb.model("users", user) || mongodb.model("users");

module.exports = data;
