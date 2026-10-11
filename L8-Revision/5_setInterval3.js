let id = setInterval(
  function () {
    console.log("Hello");
  },
  1000,
  setTimeout(function () {
    clearInterval(id);
  }, 5000),
);

// let id = sI(fn, 1000, sT(id));
