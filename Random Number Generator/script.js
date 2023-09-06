let number = document.getElementById("number")
const btn = document.getElementById("btn")

btn.addEventListener("click", function() {
    getRandomNumber();
})

function getRandomNumber() {
    let randomNumber = Math.floor( Math.random() * 1000) + 1

    number.textContent = randomNumber;
}
