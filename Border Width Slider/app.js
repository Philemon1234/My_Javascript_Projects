let slider = document.getElementById("borderWidthSlider")
let box = document.getElementById("box")

slider.addEventListener("input", function() {
    let sliderValue = slider.value;
    
    box.style.borderWidth = sliderValue + 'px';
    box.style.borderRadius = sliderValue + 'px';
})