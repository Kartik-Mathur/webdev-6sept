setTimeout(function(){
    console.log("5 seconds are up");
}, 5000);

console.log("Hello");

setTimeout(function(){
    console.log("4 seconds are up");
}, 4000);

function delayASec(){
    let t1 = new Date().getTime();
    while(new Date().getTime() - t1 < 1000){

    }
}

function delayNSeconds(n){
    for(let i = 0 ; i < n ; i++){
        delayASec();
    }
    console.log(n, " seconds are up now");
}

delayNSeconds(3);