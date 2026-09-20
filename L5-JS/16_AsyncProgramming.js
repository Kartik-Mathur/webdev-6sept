setTimeout(function(){
    console.log("1 second complete");
}, 1000);

function waitASecond(){
    let t = new Date().getTime(); // 1st jan 1970 se kitne milliseconds hogaye

    while(new Date().getTime() - t < 1000){

    }

    console.log("1 second is complete");
}

waitASecond();
waitASecond();
waitASecond();


console.log("Hello World");