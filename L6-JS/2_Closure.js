// Because JS supports HOF, because of it closure comes into picture....
let a = 20, b = -100;

function createFun(){
    let a = 10, b = 20;

    function sum(){
        return a + b; // a and b toh parent scope hai sum ke
    }

    return sum;
}

let f = createFun();
/*
f = function sum(){
    // SUM FUNCTION AAYA SAATH MEI PARENT KA
    // SCOPE BHI LEKAR AAEGA
    CLOSURE -> {
        a: 10,
        b: 20
    }

        return a + b;
        a and b toh yaha defined hi nahi hai kahi par
        AB YEH DHYAN NHI RAKH SKTE IN GENERAL KI a,b sum KE SCOPE MEI BANENGE
        TABHI SUM KO RETURN KAR SKTE HAI
        // we want output as 30 and not -80
        //THIS IS SOLVED WITH CLOSURE....
    }
*/

console.log(f());