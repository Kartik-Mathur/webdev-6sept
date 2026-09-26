// Jab ek kaam poora ho jaaye uske baad next kaam karna is callback
// Jis function ko hum ek kaam complete ho jaane ke baad call karte hai
// that is called as Callback Function.....

// Async functions ko (jo java script ka thread block nhi krte)
// Unhe sequential banane mei help karta hai.....

function getMaggi(cb) {
  setTimeout(function () {
    console.log("Maggi aa gai");
    cb()
  }, 3000);
}

function makeMaggi() {
  setTimeout(function () {
    console.log("Maggi bann gai");
  }, 2000);
}

getMaggi(makeMaggi);

console.log("Running some other function");
