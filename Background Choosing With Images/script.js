let container = document.querySelector(".container");
let select = document.getElementById("select");

select.addEventListener("change", changeImage);

function changeImage() {
    let selected = select.value;

    if (selected === 'none') {
        container.style.backgroundImage = "none"
    } else if (selected === 'batman') {
        container.style.backgroundImage = "url('batman.jpg')";
    } else if (selected === 'superman') {
        container.style.backgroundImage = "url('superman.jpg')";
    } else if (selected === 'spiderman') {
        container.style.backgroundImage = "url('spiderman.jpg')";
    } else if (selected === 'joker') {
        container.style.backgroundImage = "url('joker.jpeg')";
    } else if (selected === 'captain-america') {
        container.style.backgroundImage = "url('captain-america.jpg')";
    } else if (selected === 'aqua-man') {
        container.style.backgroundImage = "url('aquaman.jpg')";
    }
}

