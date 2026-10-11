/*
Ek function ke complete hone ke baad jo function call karte hai
usse callback kehte hai
*/
/*
Jab async functions ko sequential way mei run karna ho
tab we can use callback functions
*/

function wakeUp(cb){
    console.log("Uthne ki koshish start")
    setTimeout(function(){
        console.log("Uth gaya");
        cb(); // This means uthna complete hua ab mei takeBath kar sakta hoon
    }, 2000);
    
}

function takeBath(){
    console.log("Bath start")
    setTimeout(function(){
        console.log("Bath done");
    }, 2000);
}

wakeUp(takeBath); // takeBath is callback function for wakeUp
// Jab wakeUp ka kaam complete ho jaye toh jis function ko call karenge that is
// takeBath and this takeBath act as callback function for wakeUp


// wakeUp();
// takeBath();