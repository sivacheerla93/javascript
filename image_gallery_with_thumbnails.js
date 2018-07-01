var images = document.getElementById("imgDiv").getElementsByTagName("img");
for (var i = 0; i < images.length; i++) {
  images[i].onmouseover = function() {
    this.style.cursor = "hand";
    this.style.borderColor = "red";
  };
  images[i].onmouseout = function() {
    this.style.cursor = "pointer";
    this.style.borderColor = "grey";
  };
}

function changeImage(event) {
  event = event || window.event;

  var targetElement = event.target || event.srcElement;

  if (targetElement.tagName == "IMG") {
    document.getElementById("mainImage").src = targetElement.getAttribute(
      "src"
    );
  }
}
