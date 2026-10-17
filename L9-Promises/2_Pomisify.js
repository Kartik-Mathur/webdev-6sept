function getMaggi() {
  return new Promise(function (resolve, reject) {
    let shopStatus = "open";
    setTimeout(function () {
      if (shopStatus == "closed") {
        reject("Shop is closed, no maggi");
      } else {
        resolve("Maggi aa gai");
      }
    }, 2000);
  });
}

getMaggi()
  .then(function (msg) {
    console.log("Success message:", msg);
  })
  .catch(function (err) {
    console.log("Error", err);
  });

console.log("Running other code");
