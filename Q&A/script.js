let questionTitle = document.getElementById("question-title");
let answerContainer = document.querySelector(".answer-container");

questionTitle.addEventListener("click", function() {
    answerContainer.classList.toggle("show");
})