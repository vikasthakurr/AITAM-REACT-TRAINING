import express from "express";
import mongoose from "mongoose";

const server = express();
server.use(express.json());

const PORT = 3000;

server.get("/", (req, res) => {
  res.send("Hello World");
});

//mongodb connection...

mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:vikas1234@aitam.ymor7qe.mongodb.net/connection"
  )
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

//schema

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: Number,
});

const User = mongoose.model("aitam", userSchema);

//post route to send the data.....

server.post("/login", async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  await user.save();
  res.send("data has saved successfully");
});
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
