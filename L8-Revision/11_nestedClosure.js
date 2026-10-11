function outerFun() {
    let a = 1;

    function innerFun() {
        a++;

        function fun() {
            a++;
            console.log(a);
        }

        return fun;
    }

    return innerFun;
}


let genFun = outerFun();
let f1 = genFun();
let f2 = genFun();

f1(); // 3 3 3  5  2
f1(); // 5 3 4  7  3
f1(); // 7 4 5  9  4
f2(); // 3 5 7  5  6
f2(); // 5 6 8  7  7 
f2(); // 7 4 9  9  8
f1(); // 9 5 10 11 9

