// content.js
var images = document.images;

var body = document.body;
var elements = document.body.getElementsByTagName("*");

function showDownloadButton(x) {
  x.style.height = "100px";
  x.addEventListener("mouseout", () => hideDownloadButton(x));
}

function hideDownloadButton(x) {
  x.style.height = "200px";
  //x.addEventListener("mouseover", () => hideDownloadButton(x));
}

body.onload=function() {
  console.log(images.length);

  for (var i = 0; i < images.length; i++) {
    console.log("image found");

    images[i].addEventListener("mouseover", () => showDownloadButton(images[i]));
  }
}