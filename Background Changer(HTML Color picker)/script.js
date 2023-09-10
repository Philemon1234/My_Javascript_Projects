let color = document.getElementById("color")
let body = document.querySelector("body")

color.addEventListener("input", function () {

    let selected = color.value

    body.style.backgroundColor = selected;
    
})
