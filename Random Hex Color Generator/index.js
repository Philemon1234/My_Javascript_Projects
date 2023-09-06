const body = document.querySelector("body")
let colorCode = document.getElementById("code")
const colorBtn = document.getElementById("color-btn")

colorBtn.addEventListener("click", function() {
    colorCode.style.color = getRandomHexColor()
    colorBtn.style.color = getRandomHexColor()
    body.style.backgroundColor = getRandomHexColor()
})

function getRandomHexColor() {
    const randomR = Math.floor(Math.random() * 255)
    const randomG = Math.floor(Math.random() * 255)
    const randomB = Math.floor(Math.random() * 255)

    // console.log("(" + randomR + ", " + randomG + ", " + randomB + ")")

    const hexColor = `#${randomR.toString(16).padStart(2, '0')}${randomG.toString(16).padStart(2, '0')}${randomB.toString(16).padStart(2, '0')}`

    return hexColor;
}

// let randomColor = getRandomHexColor();