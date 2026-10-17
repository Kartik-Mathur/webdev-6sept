function download(url) {
  return new Promise(function (resolve, reject) {
    console.log("Download starts");
    setTimeout(function () {
      console.log("Download Completed");
      let movie = url.split("/").pop();
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

let url = "http://movie.com/thor.mp4";
download(url)
  .then(function (movie) {
    console.log("Downloaded Movie", movie);
    compress(movie)
    .then(function (compressedMovie) {
      console.log("Compressed Movie", compressedMovie);
        upload(compressedMovie)
            .then(function(newUrl){
                console.log("Uploaded Url",newUrl);
            })
    });
  })
  .catch(function (err) {
    console.log(err);
  });
