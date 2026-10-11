function download(url, cb) {
  console.log("Download starts");
  setTimeout(function () {
    console.log("Download Completed");
    let movie = url.split('/').pop();
    cb(movie, upload);
  }, 2000);
}

function compress(movie, cb) {
  console.log("compress starts");
  setTimeout(function () {
    console.log("compress Completed");
    let compressedMovie = movie.split('.')[0] + '.zip';
    cb(compressedMovie);
  }, 2000);
}

function upload(compressedMovie) {
  console.log("upload starts");
  setTimeout(function () {
    console.log("upload Completed");
    let newUrl = "http://newmovie.com/"+compressedMovie;
    console.log(newUrl);
  }, 2000);
}

let url = 'http://movie.com/thor.mp4';
download(url, compress);
