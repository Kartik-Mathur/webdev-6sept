function download(cb) {
  console.log("Download starts");
  setTimeout(function () {
    console.log("Download Completed");
    cb(upload);
  }, 2000);
}

function compress(cb) {
  console.log("compress starts");
  setTimeout(function () {
    console.log("compress Completed");
    cb();
  }, 2000);
}

function upload() {
  console.log("upload starts");
  setTimeout(function () {
    console.log("upload Completed");
  }, 2000);
}

download(compress);
// compress();
// upload();
