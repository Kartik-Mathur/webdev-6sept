function outerFun(){
    let a = 10;

    function innerFun(){
        a++;

        function fun(){
            a++;
            console.log(a);
        }

        return fun;
    }

    return innerFun;
}

// outerFun returns innerFun, thus f is innerFun jo return hua call krke outerFun
let f = outerFun();

// f() -> means humne innerFun call kia that again returns fun
let f1 = f(); // f1 is actually fun

f1();
f1();
f1();

let f2 = f(); // f(innerFun) will again return fun
f2();
f2();
f2();

f1();