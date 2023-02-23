const { bookingModel } = require("../schema/booking");

const express = require("express");

const BookingRouter = express.Router();

BookingRouter.post("/booking", async (req, res) => {
  const { user, flight } = req.body;

  try {
    if (user && flight) {
      let booking = new bookingModel({ user, flight });
      await booking.save();
      res.status(201).send("Booking has been done successfully");
    } else {
      res.status(401).send("All fields are required");
    }
  } catch (err) {
    res.send(err);
  }
});
BookingRouter.get("/dashboard", async (req, res) => {
  try {
    const bookings = await bookingModel.find();
    res.status(200).send(bookings);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = {
  BookingRouter,
};
