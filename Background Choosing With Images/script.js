let body = document.querySelector("body")
let selectDropdown = document.querySelector("#select")

selectDropdown.addEventListener("change", changeImage);

function changeImage() {

    let selected = selectDropdown.value;

    if (selected === "batman") {
        body.style.backgroundImage = "url('https://wallpapercave.com/dwp1x/vD2vB1p.jpg')"
    }
     else if (selected === "superman") {
        body.style.backgroundImage = "url('https://wallpapercave.com/uwp/uwp3890541.jpeg')"
    }
    if (selected === "spiderman") {
        body.style.backgroundImage = "url('https://wallpapercave.com/dwp1x/wp12363024.png')"
    }
    if (selected === "joker") {
        body.style.backgroundImage = "url('https://wallpapercave.com/uwp/uwp3670974.jpeg')"
    }
    if (selected === "captain-america") {
        body.style.backgroundImage = "url('https://wallpapercave.com/dwp1x/wp4657881.jpg')"
    }
    if (selected === "aqua-man") {
        body.style.backgroundImage = "url('https://wallpapercave.com/dwp1x/wp3869426.jpg')"
    }
}