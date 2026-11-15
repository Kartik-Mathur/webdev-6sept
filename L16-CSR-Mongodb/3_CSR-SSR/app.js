const path = require("path");
const express = require("express");
const app = express();
const PORT = 4444;

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let todos = ["Dance", "Sing", "Cricket","Volleyball"];

app.get("/", (req, res) => {
  res.render("index", {
    title: "My Todo application",
    todos,
  });
});

app.get('/increase/:name',(req,res)=>{
  const {name} = req.params;
  let i = todos.findIndex(item => item == name);

  if(i > 0){
    [todos[i], todos[i-1]] = [todos[i-1], todos[i]];
  }
  res.redirect('/');
})

app.get('/decrease/:name',(req,res)=>{
  const {name} = req.params;
  let i = todos.findIndex(item => item == name);

  if(i < todos.length-1){
    [todos[i], todos[i+1]] = [todos[i+1], todos[i]];
  }
  res.redirect('/');
})

app.get('/delete-todo/:name',(req,res)=>{
  const {name} = req.params;
  todos = todos.filter(item => item!==name);
  res.redirect('/');
})

app.post("/todos", (req, res) => {
  const { name } = req.body;
  todos.push(name);
  // redirect will make a GET request
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`http://localhost:` + PORT);
});
