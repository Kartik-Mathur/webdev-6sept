const { readFile } = require("fs/promises");
const path = require("path");

let filePath = path.join(__dirname, "movie.txt");
// Call back functions are always error first callback function
readFile(filePath,{
  encoding:'utf-8'
})
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
