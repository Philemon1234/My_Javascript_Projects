let roundBtns = document.querySelectorAll("#round-btn");
let submitBtn = document.querySelector("#submit");
let rateNumber = document.querySelector("#rate-number");
let thankCard = document.querySelector("#thank_card");



for (let i = 0; i < roundBtns.length; i++) {
    roundBtns[i].addEventListener("click", function(event) {
        let clicked = event.target.textContent;
        console.log(clicked);
        
        rateNumber.textContent = clicked;
    })
}

submitBtn.addEventListener("click", function() {
    thankCard.classList.toggle("hide_card");
})