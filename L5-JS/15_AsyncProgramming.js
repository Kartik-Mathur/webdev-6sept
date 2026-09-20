/*
JS can support Async programming using Browser or using NODEJS
Both of them are written in C++
And C++ has multiple threads in it..... 
*/

setTimeout(function(){
    console.log("10 second complete");
}, 10000); // 10000 milliseconds

console.log("Hello World");

setTimeout(function(){
    console.log("2000 second complete");
}, 2000); 

/*
1. Event Loop
2. Web API/ NodeJS API
3. Callback Queue (FIFO: First In First Out)
*/










