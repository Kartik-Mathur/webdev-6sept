// Because JS supports HOF, because of it closure comes into picture....
let a = 20, b = -100;
function createFun(a,b){

    function sum(){
        return a + b; // a and b toh parent scope hai sum ke
    }

    return sum;
}


let f = createFun(60, 20);
console.log(f());
/*
f = function sum(){
        return a + b;
        a and b toh yaha defined hi nahi hai kahi par
        AB YEH DHYAN NHI RAKH SKTE IN GENERAL KI a,b sum KE SCOPE MEI BANENGE
        TABHI SUM KO RETURN KAR SKTE HAI
    }
*/