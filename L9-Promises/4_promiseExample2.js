function download(url) {
  return new Promise(function (resolve, reject) {
    console.log("Download starts");
    setTimeout(function () {
      console.log("Download Completed");
      let movie = url.split("/").pop();
      if (movie.split(".").pop() != "mp4") {
        return reject("Invalid format of movie to download");
      }
      resolve(movie, upload);
    }, 2000);
  });
}

function compress(movie) {
  return new Promise(function (resolve, reject) {
    console.log("compress starts");
    setTimeout(function () {
      console.log("compress Completed");
      let compressedMovie = movie.split(".")[0] + ".zip";
      resolve(compressedMovie);
    }, 2000);
  });
}

function upload(compressedMovie) {
  return new Promise(function (resolve, reject) {
    console.log("upload starts");
    setTimeout(function () {
      console.log("upload Completed");
      let newUrl = "http://newmovie.com/" + compressedMovie;
      resolve(newUrl);
    }, 2000);
  });
}

let url = "http://movie.com/thor.mp3";
download(url)
  .then(compress)
  .then(upload)
  .then(function (newUrl) {
    console.log("Naya Url", newUrl);
  })
  .catch(function (err) {
    console.log(err);
  });
