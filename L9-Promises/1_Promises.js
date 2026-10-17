let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // resolve("Promise success");
    reject("Promise failed");
  }, 2000);
});

p.then(function (msg) {
  console.log(msg);
}).catch(function (errMessage) {
  console.log("Error",errMessage);
});
