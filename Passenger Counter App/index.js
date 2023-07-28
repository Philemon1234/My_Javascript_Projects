// document.getElementById("count-el").innerText = 5;

//intialize the count as 0
//Listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

let count = 0;
let countEl = document.getElementById("count-el");
let welcomeEl = document.getElementById("welcome-el");
let saveEl = document.getElementById("save-el");
let saveBtn = document.getElementById("save-btn");

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let counter = count + " - ";
    saveEl.textContent += counter;
    count = 0;
    countEl.textContent = count;
}

//Practice
// let firstName = "Ntivuguruzwa";
// let lastName = "Philemon";

// let fullName = firstName + " " + lastName;

// console.log(fullName);


let name = "Linda";
let greeting = "Hi, there";

function greet() {
    console.log(greeting + ", " + name + "!");
}

greet()

