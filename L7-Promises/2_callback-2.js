// Agar error aaya toh we pass the first argument of the callback as error
// Error first callback functions
function sayHello(name, cb) {
  if (!name || name.length == 0) {
    cb(new Error("Name is not provided"));
  } else {
    setTimeout(function () {
      console.log("Hello", name);
      cb(false, "Function execution complete");
    }, 3000);
  }
}

sayHello("Mayank", function (error, msg) {
  if (error) {
    console.log(error);
  } else {
    console.log(msg);
  }
});

console.log("Let me do some other task")
