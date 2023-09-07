let rangeController = document.getElementById("range-controller")
let box = document.getElementById("box")
let borderRadiusValue = document.getElementById("border-radius-value")

function updateBorderRadius() {
    let rangeValue = rangeController.value;
    console.log(rangeValue)
    borderRadiusValue.textContent = rangeValue + 'px';
    box.style.borderRadius = rangeValue + 'px';
}

rangeController.addEventListener("input", updateBorderRadius)

console.log(updateBorderRadius())