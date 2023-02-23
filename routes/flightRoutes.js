const { Router } = require("express");
const { flightModel } = require("../schema/flight");

const flight = Router();

flight.post("/flights", async (req, res) => {
  try {
    const newflight = new flightModel(req.body);
    await newflight.save();
    res.status(201).send({
      message: "New Flight Added successfully",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

flight.get("/flights", async (req, res) => {
  try {
    const flights = await flightModel.find();
    res.status(200).send(flights);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

flight.get("/flights/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const flights = await flightModel.findOne({ _id: id });
    res.status(200).send(flights);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

flight.patch("/flights/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await flightModel.findByIdAndUpdate(id, req.body);
    res.status(204).send({
      message: "flight details updated successfully",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

flight.delete("/flights/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await flightModel.findByIdAndDelete(id, req.body);
    res.status(202).send({
      message: "flight deleted successfully",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

module.exports = {
  flight,
};

// {
//   "airline": "ind",
//   "flightNo": "3424",
//   "departure": "dfgdfg",
//   "arrival": "rtytety",
//   "departureTime": 11,
//   "arrivalTime": 3,
//   "seats": 45,
//   "price": 1111
// }
