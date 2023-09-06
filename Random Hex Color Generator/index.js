const body = document.querySelector("body")
let colorCode = document.getElementById("code")
const colorBtn = document.getElementById("color-btn")

colorBtn.addEventListener("click", function() {
    getRandomHexColor()
})

function getRandomHexColor() {
    const randomR = Math.floor(Math.random() * 255)
    const randomG = Math.floor(Math.random() * 255)
    const randomB = Math.floor(Math.random() * 255)

    // console.log("(" + randomR + ", " + randomG + ", " + randomB + ")")

    const hexColor = `#${randomR.toString(16).padStart(2, '0')}${randomG.toString(16).padStart(2, '0')}${randomB.toString(16).padStart(2, '0')}`

    // colorCode.style.color = hexColor;
    colorCode.textContent = hexColor;
    colorBtn.style.color = hexColor;
    body.style.backgroundColor = hexColor;
}
