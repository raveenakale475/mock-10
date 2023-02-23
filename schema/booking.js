const mongoose = require("mongoose");
require("dotenv").config();

const bookingSchema = mongoose.Schema({
  user: { type: String, ref: "User" },
  flight: { type: String, ref: "Flight" },
});

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = {
  bookingModel,
};
