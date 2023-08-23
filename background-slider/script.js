let sliderRow = document.getElementById("slider-row")
let slides = document.querySelectorAll(".slide");
let leftBtn = document.getElementById("left")
let rightBtn = document.getElementById("right")

let activeSlide = 0;

rightBtn.addEventListener("click", function() {
    activeSlide++

    if(activeSlide > slides.length - 1) {
        activeSlide = 0
    }
    console.log(activeSlide)
    setBgToSliderRow()
})

leftBtn.addEventListener("click", function() {
    activeSlide--

    if(activeSlide < 0) {
        activeSlide = slides.length - 1;
    }

    console.log(activeSlide)
    setBgToSliderRow()
})

function setBgToSliderRow() {
    sliderRow.style.backgroundImage = slides[activeSlide].style.backgroundImage
}
