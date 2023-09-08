const box = document.querySelector(".box")
const x = document.querySelector(".offset-x")
const y = document.querySelector(".offset-y")
const radius = document.querySelector(".blur-radius")
const spread = document.querySelector(".blur-spread")
const color = document.querySelector(".color")
const cssValue = document.querySelector(".css-value")

function UpdateBoxShadow() {
    let v = `${x.value}px ${y.value}px ${radius.value}px ${spread.value}px ${color.value}`;

    cssValue.value = v
    box.style.boxShadow = v;
}

// [x, y, radius, spread, color].forEach(element => {
//     element.oninput = UpdateBoxShadow;
// })

let arr = [x, y, radius, spread, color]


for(let i = 0; i < arr.length; i++) {
    arr[i].addEventListener("input", function() {
        UpdateBoxShadow()
    })
}