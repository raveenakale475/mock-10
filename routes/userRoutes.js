const { userModel } = require("../schema/user");

const { Router } = require("express");

const userRouter = Router();

userRouter.post("/register", async (req, res) => {
  const data = req.body;

  try {
    const user = await userModel(data);

    user.save();

    res.status(201).send("Registered successfully");
  } catch (err) {
    res.status(500).send("Registration failed");
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.find({ email });

    if (user.length > 0) {
      const passwordMatch = user[0].password === password;
      if (passwordMatch) {
        res.status(201).send("Login Successfully");
      } else {
        res.status(400).send("Wrong password");
      }
    } else {
      res.status(201).send("Email id Not Found");
    }
  } catch (err) {
    res.status(500).send("login failed");
  }
});

module.exports = {
  userRouter,
};
