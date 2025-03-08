const guideImages = [
    "images/placeholder1.png",
    "images/placeholder2.png",
    "images/placeholder3.png"
]

const imageElement = document.getElementById("guide-images");
const prevButton = document.getElementById("pre-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;

function updateImage() {
    imageElement.src = guideImages[currentImgIndex];
}

nextButton.addEventListener

updateImage();