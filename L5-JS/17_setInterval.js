
let x = setInterval(function(){
    console.log("Hi")
}, 1000);



setTimeout(function(){
    clearInterval(x);
}, 5000);