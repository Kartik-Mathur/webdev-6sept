// Agar error aaya toh we pass the first argument of the callback as error
// Error first callback functions
function sayHello(name, cb) {
  if (!name || name.length == 0) {
    cb(new Error("Name is not provided"));
  } else {
    console.log("Hello", name);
    cb(false, "Function execution complete");
  }
}

sayHello("", function (error, msg) {
  if (error) {
    console.log(error);
  } else {
    console.log(msg);
  }
});
