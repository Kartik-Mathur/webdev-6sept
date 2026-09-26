// Isko pyramid of doom bhi kehte hai
function download(url, cb) {
  console.log("Download Starts");
  // give async delay of 2 second
  setTimeout(function () {
    console.log("Download completed");
    let songName = url.split("/").pop();
    cb(songName);
  }, 2000);
}

function compress(songName, cb) {
  // power.zip aage jaega
  // give async delay of 2 second
  console.log("compress Starts");
  setTimeout(function () {
    console.log("compress completed");
    let compressedSong = songName.split(".")[0] + ".zip";
    cb(compressedSong);
  }, 2000);
}

function upload(compressedSong, cb) {
  // upload ke baad newurl would be https://newsongs.mp4/power.zip
  // give async delay of 2 second
  console.log("Upload Starts");
  setTimeout(function () {
    console.log("Upload Completed");
    let newUrl = "https://newsongs.mp4/" + compressedSong;
    cb(newUrl);
  }, 2000);
}

// NESTED CALLBACKS IS CALLED AS CALLBACK HELL or PYRAMID OF DOOM
download("http://songs.com/power.mp4", function (downloadedSong) {
  console.log("Downloaded Song", downloadedSong);
  compress(downloadedSong, function (compressedSong) {
    console.log("Compressed Song", compressedSong);
    upload(compressedSong, function (newUrl) {
      console.log("Upload Completed", newUrl);
    });
  });
});
