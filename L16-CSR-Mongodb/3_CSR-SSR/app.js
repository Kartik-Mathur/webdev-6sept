const path = require("path");
const express = require("express");
const app = express();
const PORT = 4444;

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let todos = ["Dance","Sing","Cricket"];

app.get('/',(req,res)=>{
  res.render('index');
})


app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});
