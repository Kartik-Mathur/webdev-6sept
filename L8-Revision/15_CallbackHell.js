function workA(cb) {
  console.log("WorkA starts");
  setTimeout(function () {
    cb("WorkA Done");
  }, 2000);
}

function workB(cb) {
  console.log("WorkB starts");
  setTimeout(function () {
    cb("WorkB Done");
  }, 2000);
}

function workC(cb) {
  console.log("WorkC starts");
  setTimeout(function () {
    cb("WorkC Done");
  }, 2000);
}

// CALLBACK HELL or PYRAMID OF DOOM
workA(function (msg) {
  console.log("MSG : ", msg);
  workB(function (msg1) {
    console.log("MSG : ", msg1);
    workC(function (msg2) {
      console.log("MSG : ", msg2);
    });
  });
});
