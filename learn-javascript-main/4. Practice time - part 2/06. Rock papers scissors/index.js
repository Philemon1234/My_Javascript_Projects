let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand() {

    let num = Math.floor( Math.random() * 3)


    return hands[num]
}

console.log( getHand() )