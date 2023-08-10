// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let btn = document.getElementById("btn");
let errorMessage = document.getElementById("error");

btn.addEventListener("click", function(){
    errorMessage.textContent = "Something went wrong, please try again";
})

// "Onlick Event Method"
// function clickBtn() {
//     errorMessage.textContent = "Something went wrong, please try again";
// }