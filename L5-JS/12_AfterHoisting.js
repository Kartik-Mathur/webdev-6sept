var y; // 30
function fun() {
    var x; // UD
    ///// --------
    console.log(x); // UD

    x = 200;
    console.log(x); // 200
}
var x; // 10
/// ------------------
x = 10;
fun();
y = 20;

if (y > 0) {
    console.log(y);  // 20
    y = 30;
    console.log(y); // 30
}

console.log(x); // 10
console.log(y); // 30