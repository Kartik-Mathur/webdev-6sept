const path = require('path');
const express = require('express');
const app = express();
const PORT = 4444;

app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'public')));

app.use(function(req,res,next){
    console.log("Running middleware-1");
    // next(); // Toh yeh agle function par aage chala jaega...
    const {name} = req.query;
    if(!name){
        return res.send("Please provide name");
    }
    next();
})

app.get('/',(req,res)=>{
    const {name} = req.query;
    res.send(`Hello ${name}`);
})


app.listen(PORT,()=>{
    console.log(`http://localhost:`+PORT);
});