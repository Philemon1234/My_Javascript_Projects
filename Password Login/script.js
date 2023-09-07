let input = document.getElementById("input-form")
let submitBtn = document.getElementById("submit-btn")
let parent = document.getElementById("parent")
let timeContainer = document.querySelector(".time-container")
let formContainer = document.getElementById("form-container")
let incorrectPasswordContainer = document.getElementById("incorrect-password-container")
let tryAgainBtn = document.getElementById("try-again-btn")
let welcome = document.getElementById("welcome")
let icons = document.querySelector(".icons")
let time = document.getElementById("time")
let date = document.getElementById("date")

function getCurrentDate(){
    let currentDate = new Date();

    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const meridiem = 'AM'

    if (hours >= 12) {
        meridiem = 'PM';
        if (hours > 12) {
            hours -= 12
        }
    }

    time.textContent = hours + ":" + minutes;


    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];


    // const day = currentDate.getDate();
    const monthIndex = currentDate.getMonth();
    const monthName = currentDate.monthNames[monthIndex];
    // const year = currentDate.getFullYear();

    // date.textContent = day + ", " + month + " " + year
    date.textContent = monthName;
}

console.log(getCurrentDate())

submitBtn.addEventListener("click", function () {
    getPassword()
})

parent.addEventListener("click", hideTimeContainer)

function hideTimeContainer() {
    timeContainer.style.top = "-37%"
    timeContainer.style.transition = "1s"
    timeContainer.style.opacity = "0"

    parent.style.backgroundImage = 'url("lock screen wallpaper 2.jpg")'
    parent.style.transition = ".5s 1s"

    formContainer.style.opacity = "1";
    formContainer.style.transition = ".3s 1s";

}

function getPassword() {
    let inputValue = input.value;

    if (inputValue === "2006") {

        formContainer.style.opacity = "0";
        formContainer.style.display = "none";

        showWelcomeScreen()


        inputValue = "";

    } else if (inputValue === "") {

        submitBtn.disabled = true;

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

function showWelcomeScreen() {
    welcome.style.opacity = "1";
    welcome.style.display = "block";
    
    setTimeout(hideWelcomeScreen, 5000)
}


function hideWelcomeScreen() {
    welcome.style.opacity = "0";
    welcome.style.display = "none";

    icons.style.display = "none";

    parent.style.backgroundImage = 'url("Home screen.png")';
}

