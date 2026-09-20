// JS is synchronous programming language
// JS has only 1 thread(Call Stack) in it..


// JS mei async programming ke liye we can use
// 1. setTimeOut function
// 2. setInterval function

function waitASecond(){
    let t = new Date().getTime(); // 1st jan 1970 se kitne milliseconds hogaye

    while(new Date().getTime() - t < 1000){

    }

    console.log("1 second is complete");
}

waitASecond();
waitASecond();
waitASecond();
waitASecond();
waitASecond();

console.log("Hello World");