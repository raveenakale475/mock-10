const express = require("express");
const { connection } = require("./config/config");
const { userRouter } = require("./routes/userRoutes");
const { flight } = require("./routes/flightRoutes");
const { BookingRouter } = require("./routes/bookingRoutes");

const app = express();

const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/api", userRouter);
app.use("/api", flight);
app.use("/api", BookingRouter);

app.get("/", (req, res) => {
  res.send("welcome to airticket booking");
});

app.listen(port, async () => {
  try {
    await connection.then(() => {
      console.log("Database connected");
      console.log(`Server started on ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
});
