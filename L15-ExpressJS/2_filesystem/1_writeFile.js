const { writeFile } = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "movie.txt");
// Call back functions are always error first callback function
writeFile(filePath, "ironman",{
    flag: 'a'
}, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Done");
  }
});
