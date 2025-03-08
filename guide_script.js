const guideImages = [
    "images/placeholder1.png",
    "images/placeholder2.png",
    "images/placeholder3.png"
]

const imageElement = document.getElementsById("guide-image");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;

function updateImage() {
    imageElement.src = guideImages[currentImgIndex];
}

nextButton.addEventListener("click", function(){
    currentImgIndex =(currentImgIndex + 1) % guideImages.length
    updateImage()
});
prevButton.addEventListener("click", function(){
    currentImgIndex =(currentImgIndex - 1 + guideImages.length) % guideImages.length
    updateImage()
});

updateImage();