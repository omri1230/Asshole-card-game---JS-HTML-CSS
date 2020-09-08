class Card{
    constructor(value, suits,power = "") {
        this.value = value
        this.suits = suits
        this.power = power
    }
}

//Riffle Shuffle
/*
1. Split the deck approximately in half
2. One half in the left hand, the other half in the right hand
3. Riffle the edges of both sets so they intermingle
4. Push the cards together
5. Repeat the process for 6 times or more 
 */

function shuffle(deck) {
    const cutDeckVariant = deck.length / 2 + Math.floor(Math.random() * 9) - 4;
    const leftHalf = deck.splice(0, cutDeckVariant);
    let leftCount = leftHalf.length;
    let rightCount = deck.length - Math.floor(Math.random() * 4);
    while(leftCount > 0) {
        const takeAmount = Math.floor(Math.random() * 4);
        deck.splice(rightCount, 0, ...leftHalf.splice(leftCount, takeAmount));
        leftCount -= takeAmount;
        rightCount = rightCount - Math.floor(Math.random() * 4) + takeAmount;
    }
    deck.splice(rightCount, 0, ...leftHalf);
}
const numbers = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
let allCards = []

export {Card,numbers,suits,allCards,shuffle}

