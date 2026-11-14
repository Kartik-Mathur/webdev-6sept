const { readFile } = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "movie.txt");
// Call back functions are always error first callback function
readFile(filePath, (err, data) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Done", data.toString());
  }
});
