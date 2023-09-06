let numberBtn = document.getElementById("number")

let count = 0;

function changeColorDynamically() {
    if (count === 0) {
        numberBtn.style.color = "white";
        numberBtn.style.borderColor = "white";
    } else if (count < 0) {
        numberBtn.style.color = "red";
        numberBtn.style.borderColor = "red";
    } else {
        numberBtn.style.color = "green";
        numberBtn.style.borderColor = "green";
    }
}

//--------------incrementBtn
function incrementNumber() {
    count++;
    numberBtn.textContent = count;
    changeColorDynamically()
}

//--------------decrementBtn
function decrementNumber() {
    count--;
    numberBtn.textContent = count;
    changeColorDynamically()
}

//--------------resetBtn
function resetNumber() {
    count = 0;
    numberBtn.textContent = count
    changeColorDynamically()
}

