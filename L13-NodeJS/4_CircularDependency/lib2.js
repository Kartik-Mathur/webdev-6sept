let lib1 = require('./lib1');
console.log("Running lib2");
function sub(a, b) {
  return a - b;
}

module.exports.sub = sub;
module.exports.lib1 = lib1;