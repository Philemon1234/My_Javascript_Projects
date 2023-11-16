let year = document.getElementById("year");

let currentDate = new Date();

let date = currentDate.getDate();
let day = currentDate.getMonth() + 1;
let fullYear = currentDate.getFullYear();

year.innerHTML = date + ', ' + day + ' ' + fullYear;