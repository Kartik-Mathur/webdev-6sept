const { writeFile } = require("fs/promises");
const path = require("path");

let filePath = path.join(__dirname, "movie.txt");
// Call back functions are always error first callback function
writeFile(filePath, "aadasdad")
  .then(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.log(err);
  });
