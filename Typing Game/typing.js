const Container = document.querySelector(".main-container");
const Btn = document.querySelector(".difficulty-popup");

const domDifficulty = document.querySelector("#difficulty");
const domTimer = document.querySelector(".timer");
const domscore = document.querySelector(".score");
const domWord = document.querySelector(".word");
const textInput = document.querySelector(".text-input");
const gameOver = document.querySelector(".game-over-container");
const finalScore = document.querySelector(".final-score");
const playBtn = document.querySelector(".play-btn");


let score = 0;
let timer = 10;

let difficulty = localStorage.getItem("level");

domDifficulty.value = localStorage.getItem("level");

Btn.addEventListener("click", function(){
    document.getElementById("main-container").classList.toggle("show");
})


// The words Array

const word = [
    "History",
    "Characteristics",
    "Geography",
    "Anatomy",
    "Photosynthesis",
    "Javascript",
    "Programming",
    "Heaven",
    "Planet",
    "Philemon",
]



function randonWord(){
    let randNumber = Math.floor(Math.random() * word.length);
    return word[randNumber];
}

function wordToDom(){
    domWord.textContent = randonWord();
}

wordToDom();


function updateScore(){
    score++;

    domscore.innerText = `Score: ${score}`;
}

function timeFunction() {
   let setTime = setInterval(function(){
    timer--;
    domTimer.textContent = `Time Left: ${timer}`;

    if (timer == 0){
        clearInterval(setTime);

        timer = 10;
        // domTimer.textContent = "";

        // gameOver.style.display = "block";

        gameOver.classList.toggle("show");

        finalScore.textContent = `Your Score is: ${score}`;
    }

   
    }, 1000);
}

timeFunction();

playBtn.addEventListener("click", function(){
    location.reload();
});

// Event Listeners

textInput.addEventListener("input", function(){
    let typeText = textInput.value;

    if(typeText === domWord.textContent){
        wordToDom();
        textInput.value = "";

        updateScore();
        // timer += 5;

        if(difficulty == "easy"){
            timer += 7;
        }

        
        if(difficulty == "medium"){
            timer += 4;
        }
        
        if(difficulty == "hard"){
            timer += 2;
        }
    }
});


// difficulty

domDifficulty.addEventListener("input", function(){
    localStorage.setItem("level", domDifficulty.value);

    location.reload();
})




















































































































































































































































































