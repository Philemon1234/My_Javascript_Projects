let buttons = document.querySelectorAll(".btn")
let storeImages = document.querySelectorAll(".store-item")

for (let i = 0; i < buttons.length; i++) {
    let allBtns = buttons[i]
    // console.log(allBtns)

    allBtns.addEventListener("click", function (e) {
        let filter = e.target.dataset.filter;

        for (let j = 0; j < storeImages.length; j++) {
            let allImages = storeImages[j];
            if (filter === 'all') {
                allImages.style.display = 'block'
            } else {
                if (allImages.classList.contains(filter)) {
                    allImages.style.display = 'block'
                }
                else {
                    allImages.style.display = 'none'
                }
            }
        }
    })
}