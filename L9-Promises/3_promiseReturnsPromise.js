let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Promise success");
  }, 2000);
});

p.then(function (msg) {
  console.log(msg);
  return "Coding";
})
  .then(function (msg) {
    console.log(msg);
    return "Blocks";
  })
  .then(function (msg) {
    console.log(msg);
  })
  .catch(function (errMessage) {
    console.log("Error", errMessage);
  });
