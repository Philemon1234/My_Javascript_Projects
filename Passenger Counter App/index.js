// document.getElementById("count-el").innerText = 5;

//intialize the count as 0
//Listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

let count = 0;
let countEl = document.getElementById("count-el");
function increment() {
    countEl.innerText = count;
    count = count + 1;
}

