/*
If ek baari koi element ek closure mei aa gaya, toh same
element dobara se closure mei nhi jaega if nested functions
are involved...
*/

function createCounter(){
    let cnt = 0;

    return function (){
        console.log(cnt);
        cnt++;
    }
}

let c1 = createCounter();
let c2 = createCounter();
c1();
c1();
c1();
c1();

c2();
c2();
c2();
c2();