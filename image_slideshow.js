var intervalId;

function startSlideShow(params) {
    intervalId = setInterval(changeImage, 1500);
}

function stopSlideShow(params) {
    clearInterval(intervalId);
}

function changeImage(params) {
    var imageSrc = document.getElementById("image").getAttribute("src");
    var currentImageNumber = imageSrc.substring(imageSrc.lastIndexOf("/") + 1, imageSrc.lastIndexOf("/") + 2);
    if (currentImageNumber == 6) {
        currentImageNumber = 0;
    }
    var newImage = "images/" + (Number(currentImageNumber) + 1) + ".jpg";
    document.getElementById("image").setAttribute("src", newImage);
}