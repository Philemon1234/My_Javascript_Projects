let icon = document.getElementById("icon");
let body = document.querySelector("body");

icon.addEventListener("click", function() {
    body.classList.toggle("theme")
    
    if (body.classList.contains("theme")) {
        icon.setAttribute('src', 'sun.png');
    } else {
        icon.setAttribute('src', 'moon.png');
    }
})