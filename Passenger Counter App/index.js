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


// let name = "Linda";
// let greeting = "Hi, there";

// function greet() {
//     console.log(greeting + ", " + name + "!");
// }

// greet()


// Increment & Decrement
// let myPoints = 3;

// function add3Pionts() {
//     myPoints += 3;
// }

// function remove1Point() {
//     myPoints -= 1;
// }


// add3Pionts();
// add3Pionts();
// add3Pionts();
// remove1Point()
// remove1Point()


// console.log(myPoints);


// console.log("2" + 2) // "22"
// console.log(11 + 7) //  18 
// console.log(6 + "5") // "65"   
// console.log("My points: " + 5 + 9) // "My points: 59"
// console.log(2 + 2) //   4
// console.log("11" + "14") //  "1114"