import {Player} from "./player.js"
import {Card,numbers,suits,allCards,shuffle} from "./cards.js"
const start = document.getElementById("btn-start");


function divideCardsToplayers(deck,player1,player2,player3,player4) {
    for (let i = 0; i < deck.length; i++){
        if(i % 4 == 0){
            player1.cardsOnHand.push(deck[i])
        }
        else if (i % 4 == 1) {
            player2.cardsOnHand.push(deck[i])
        }
        else if (i % 4 == 2) {
            player3.cardsOnHand.push(deck[i])
        }
        else if (i % 4 == 3) {
            player4.cardsOnHand.push(deck[i])
        }
    }
}

start.addEventListener('click', () => {
    start.style.display = "none"
    numbers.forEach(value => {
        suits.forEach(suit => {
                switch (value) {
                    case '2':
                        allCards.push(new Card(value, suit,"Start Again"))
                        break;
                    case '3':
                        allCards.push(new Card(value, suit,"Reflection"))
                        break;
                    case '7':
                        allCards.push(new Card(value, suit,"7 is low"))
                        break;
                    case '10':
                        allCards.push(new Card(value, suit,"Clean Table"))
                        break;
                    default:
                        allCards.push(new Card(value, suit));
                        break;
                }            
         })
    })
    
    for (let i = 0; i <(Math.random()*15) + 7; i++){
        shuffle(allCards)
    }

    const omri = new Player("Omri");
    const maayan = new Player("maayan");
    const logas = new Player("Logas");
    const rina = new Player("Rina");

    divideCardsToplayers(allCards, omri, maayan, logas, rina)
    console.log(omri)
})










