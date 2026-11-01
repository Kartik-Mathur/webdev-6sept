const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.send("<div style='color:red'>Hello</div>");
});

app.get("/file", (req, res) => {
  let fileDes = path.join(__dirname, "todo.html");
  res.sendFile(fileDes); // sendFile takes absolute path
});

app.get("/style.css", (req, res) => {
  let fileDes = path.join(__dirname, "style.css");
  res.sendFile(fileDes); // sendFile takes absolute path
});

app.get("/script.js", (req, res) => {
  let fileDes = path.join(__dirname, "script.js");
  res.sendFile(fileDes); // sendFile takes absolute path
});

app.listen(4444, () => {
  console.log("Running Port 4444");
});
