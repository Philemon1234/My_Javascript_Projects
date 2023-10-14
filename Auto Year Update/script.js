let year = document.getElementById("year");

let currentDate = new Date();

let date = currentDate.getDate();
let day = currentDate.getMonth() + 1;
let fullYear = currentDate.getFullYear();

console.log(day)

console.log(fullYear);

year.innerHTML = date + ', ' + day + ' ' + fullYear;