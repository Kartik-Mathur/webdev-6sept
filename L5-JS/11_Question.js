var x = 10;

function fun() {
    console.log(x);// 10 | UD | 200

    var x = 200;
    console.log(x);  // 200
}
fun();
var y = 20;

if (y > 0) {
    console.log(y);  // 20 | 30 | UD
    var y = 30;
    console.log(y);  // 30
}

console.log(x); // 10 | 200 | UD
console.log(y);  // 20 | 30 | UD