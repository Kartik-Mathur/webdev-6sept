let p = new Promise(function (res, rej) {
  res("Promise success");
});

p.then(function (msg) {
  console.log(msg);
}).catch(function (err) {
  console.log(err);
});


console.log("Running random");