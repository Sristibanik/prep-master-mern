const express = require("express");
const router = express.Router();

let users = []; // temporary (for now)

// SIGNUP
router.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const userExists = users.find((u) => u.email === email);
  if (userExists) {
    return res.status(400).send("User already exists");
  }

  const newUser = { name, email, password };
  users.push(newUser);

  res.send("Signup successful");
});

// LOGIN
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    return res.status(400).send("Invalid credentials");
  }

  res.json(user);
});

module.exports = router;