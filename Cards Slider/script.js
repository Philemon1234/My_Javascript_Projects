let cards = document.querySelectorAll(".card");
let rightArrow = document.getElementById("arrow-right");
let leftArrow = document.getElementById("arrow-left");

let activeSlide = 0;

rightArrow.addEventListener("click", function() {
    activeSlide++

    if(activeSlide > cards.length - 1) {
        activeSlide = 0
    }

    console.log(activeSlide)
    setActiveCardToSlider()
})

leftArrow.addEventListener("click", function() {
   activeSlide--

   if(activeSlide < 0) {
    activeSlide = cards.length - 1
   }
   console.log(activeSlide)
   setActiveCardToSlider()
})


function setActiveCardToSlider() {

    for(let i = 0; i < cards.length; i++) {
        if(i === activeSlide) {
            cards[i].style.display = 'block'
        } else {
            cards[i].style.display = 'none'
        }
    }

}