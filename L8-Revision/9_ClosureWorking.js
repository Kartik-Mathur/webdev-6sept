/*
Closure is Parent scope ka saara data ek object mei
saath le jaaega (jo function return ho raha hai) 
that is what we call closure.
*/
function createFun(){
    let a = 10;

    function fun(){
        console.log(a);
    }

    return fun;
}

let f = createFun();
/*
    Anonymous Object -> 
    {
        a : 10
    }
    f = function fun(){
        console.log(a);
    }
*/
f();