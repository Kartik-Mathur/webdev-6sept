const path = require("path");
const express = require("express");
const app = express();
const PORT = 4444;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  const { name } = req.query;

  if (!name) {
    let err = new Error("Name is not defined");
    next(err);
  } else {
    res.send("Welcome!!!");
  }
});

app.use((err,req, res, next) => {
  console.log(err.message);

  res.send(err.message);
});

app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});
