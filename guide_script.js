const guideImages = [
    "images/placeholder1.png",
    "images/placeholder2.png",
    "images/placeholder3.png"
]
const guideText = [
    "This document is a guide for installing Arch Linux using the live system booted from an installation medium made from an official installation image. The installation medium provides accessibility features which are described on the page Install Arch Linux with accessibility options. For alternative means of installation, see Category:Installation process.",
    "Before installing, it would be advised to view the FAQ. For conventions used in this document, see Help:Reading. In particular, code examples may contain placeholders that must be replaced manually.",
    "Before installing, it would be advised to view the FAQ. For conventions used in this document, see Help:Reading. In particular, code examples may contain placeholders that must be replaced manually."
]

const imageElement = document.getElementById("guide-image");
const textElement = document.getElementById("guide-content-sub");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");

let currentImgIndex = 0;
let currentTxtIndex = 0;

function updateImageTxt() {
    imageElement.src = guideImages[currentImgIndex];
    textElement.src = guideText[currentTxtIndex]
}

nextButton.addEventListener("click", function(){
    currentImgIndex =(currentImgIndex + 1) % guideImages.length
    currentTxtIndex =(currentTxtIndex + 1) % guideText.length
    updateImageTxt()
});
prevButton.addEventListener("click", function(){
    currentImgIndex =(currentImgIndex - 1 + guideImages.length) % guideImages.length
    currentTxtIndex =(currentTxtIndex - 1 + guideText.length) % guideText.length
    updateImageTxt()
});

updateImageTxt();