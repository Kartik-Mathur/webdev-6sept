const path = require("path");
const express = require("express");
const app = express();
const PORT = 4444;

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let todos = ["Dance", "Sing", "Cricket"];

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Todo application",
    todos,
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});
