/*
Promise has three states
1. Fulfilled
2. Rejected
3. Pending

When we create promise goes into Pending state
Ab ya toh promise poora hoga and fulfilled state mei jaega
Ya promise poora nhi hoga and rejected state mei chala jaega
*/

let p = new Promise(function (resolve, reject) {
  // Promise poora hone par we call resolve function
  setTimeout(function () {
    resolve("Promise resolved successfully");
  }, 2000);
  // Promise fail hone par we call reject function
});

// Where to define resolve and reject function?
// resolve and reject functions kaunse hai ye merko hi batane h
p.then(function (msg) {
  console.log(msg);
}).catch(function (errorMsg) {
  console.log(errorMsg);
});

console.log("Hello we are doing some other task");
