let input = document.getElementById("input-form")
let submitBtn = document.getElementById("submit-btn")
let parent = document.getElementById("parent")
let timeContainer = document.querySelector(".time-container")
let formContainer = document.getElementById("form-container")
let incorrectPasswordContainer = document.getElementById("incorrect-password-container")
let tryAgainBtn = document.getElementById("try-again-btn")
let welcome = document.getElementById("welcome")
// let icons = document.querySelector(".icons")

submitBtn.addEventListener("click", function () {
    getPassword()
})

parent.addEventListener("click", hideTimeContainer)
// icons.addEventListener("click", hideTimeContainer)

function hideTimeContainer() {
    timeContainer.style.top = "-37%"
    timeContainer.style.transition = "2s"
    timeContainer.style.opacity = "0"

    formContainer.style.opacity = "1";
    formContainer.style.transition = ".3s 1s";
    // formContainer.style.display = "block";


    // incorrectPasswordContainer.style.opacity = "0";
    // incorrectPasswordContainer.style.display = "none";


    // parent.style.filter = "blur(5px)";
    // parent.style.zIndex = - 2
}

function getPassword() {
    let inputValue = input.value;

    if (inputValue === "2006") {

        formContainer.style.opacity = "0";
        formContainer.style.display = "none";

        welcome.style.opacity = "1";
        welcome.style.display = "block";

        input.value = "";

    } else {

        formContainer.style.opacity = "0";
        formContainer.style.display = "none";


        incorrectPasswordContainer.style.opacity = "1";
        incorrectPasswordContainer.style.display = "block";
    }
}

tryAgainBtn.addEventListener("click", function () {

    formContainer.style.opacity = "1";
    formContainer.style.display = "block";

    incorrectPasswordContainer.style.opacity = "0";
    incorrectPasswordContainer.style.display = "none";

    input.value = "";

})