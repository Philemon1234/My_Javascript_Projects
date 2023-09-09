let navButtons = document.querySelectorAll(".btn-link");
let cards = document.querySelectorAll(".image-box");

for (let i = 0; i < navButtons.length; i++) {
    let allBtns = navButtons[i];
    allBtns.addEventListener("click", function(e) {
        let filter = e.target.dataset.filter;
        
        // console.log(filter)

        for (let j = 0; j < cards.length; j++) {
            let allCards = cards[j];
            if (filter === 'all') {
                allCards.style.display = 'block';
            } else {
                if (allCards.classList.contains(filter)) {
                    allCards.style.display = 'block';
                } else {
                    allCards.style.display = 'none';
                }
            }
        }
    })
}