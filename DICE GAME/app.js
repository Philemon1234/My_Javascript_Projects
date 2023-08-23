let btnNew = document.querySelector(".btn-new");
let btnRoll = document.querySelector(".btn-roll");
let btnHold = document.querySelector(".btn-hold");

let dice = document.querySelector(".dice");

let currentPlayer = 0;

let accumulatedRandomNumber = 0;

let score = [0,0];

let gamestatus = true;


// Event

btnRoll.addEventListener("click", startGame);



    // change the player
function changePlayer(){
    currentPlayer = currentPlayer === 0 ? 1 : 0;

        // making the current score 0

        accumulatedRandomNumber = 0;
        document.querySelector(".current-0").innerText = 0;
        document.querySelector(".current-1").innerText = 0;

        // changing the active-player color 

        document.querySelector(".panel-0").classList.toggle("active-player");
        document.querySelector(".panel-1").classList.toggle("active-player");

}

// Start Game function

// floor => round down, ceil => round up;

function startGame(){

    if(gamestatus){
         // We generate random numbers
    let randomNumber = Math.floor(Math.random() *6) + 1;

    // We match the random numbers with our image source
    dice.src = `images/dice-${randomNumber}.png`;

    // We display our dice images
    dice.style.display = "block";

    

    if(randomNumber === 1){
        // change the player

        // if(currentPlayer == 0){
        //     currentPlayer = 1
        // }
        // else{
        //     currentPlayer = 0;
        // }

        // Using ternary operator

        // changing the player 

        changePlayer();

    }
    else{
        accumulatedRandomNumber += randomNumber;

        document.querySelector(`.current-${currentPlayer}`).innerText = accumulatedRandomNumber;
    }
    }
}

// Holding the score 

btnHold.addEventListener("click", function() {

    if(gamestatus){
        score[currentPlayer] += accumulatedRandomNumber;

        // console.log(score[currentPlayer]);
    
        document.querySelector(`.score-${currentPlayer}`).innerText = score[currentPlayer];
    
        // if(score[currentPlayer] >= 10){
        //     document.querySelector(".btn-abstain").style.display = "block";
    
        //     // Timer
    
        //     let counter = 7;
    
        // let intTimer = setInterval(function(){
    
        //     document.querySelector(".timer").innerText = counter;
    
    
        //     counter--;
    
        //     document.querySelector(".timer").style.display = "flex";
    
        //     if(counter == 0){
    
        //         clearInterval(intTimer);
    
        //         document.querySelector(".timer").style.display = "none";
    
        //         counter = 7;
                
    
        //         document.querySelector(".timer").innerText = "";
    
        //         // score[currentPlayer] -= accumulatedRandomNumber;
    
        //         score[currentPlayer] -= 5;
        //         document.querySelector(`score-${currentPlayer}`).innerText = score[currentPlayer];
    
        //         changePlayer();
                
        //     }
            
    
        //     // document.querySelector(`score-${currentPlayer}`).innerText = score[currentPlayer];
    
        // }, 1000);
        // }
    
    
        if(score[currentPlayer] >= 10){
             // winner script
             document.querySelector(`.panel-${currentPlayer}`).classList.add("won");
    
        gamestatus = false;
             let winnerSound = new Audio();
     
             winnerSound.src = "winner-audio/Applause.wav";
             winnerSound.play();
        } else {
            changePlayer();
        };
        //     score[currentPlayer] -= accumulatedRandomNumber;
        //     score[currentPlayer] -= 20;
        //     document.querySelector(`.score-${currentPlayer}`).innerText = score[currentPlayer];
    
        //     // change the player
        //     changePlayer();
        // }
        // else if(score[currentPlayer] < 100){
        //     changePlayer();
        // }
        // exactly === 100
    
    }
});

// abstain

// let abstainBtn = document.querySelector(".btn-abstain");

// abstainBtn.addEventListener("click", function(){
//     changePlayer();
// });


document.querySelector(".btn-new").addEventListener("click", function(){
    location.reload();
});










































































