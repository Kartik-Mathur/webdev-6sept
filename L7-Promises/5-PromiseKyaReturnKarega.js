let p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Done");
  }, 2000);
});

p.then(function (msg) {
  console.log(msg);
  return "Hello"; 
})
  .then((msg) => {
    console.log(msg);
    return "World";
  })
  .then((msg) => {
    console.log(msg);
    return "Welcome To CB";
  })
  .then((msg) => {
    console.log(msg);
  });
