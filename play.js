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

    //create div the warpper the input names of players 
    const names = document.createElement("div")
    names.className = "div-of-players-names"
    document.querySelector('.warpper-start-btn').appendChild(names);
    names.style.display = "flex";
    names.style.flexDirection = "column";
    names.style.rowGap = "20px"

    //orderd the input names 
    const arrnames = ["player1", "player2", "player3", "player4"];
    arrnames.forEach(player => {
        const man = document.createElement("input")
        man.className = player
        man.placeholder = "  Name player " + String(arrnames.indexOf(player) + 1)
        man.style.borderRadius = "20px"
        document.querySelector('.div-of-players-names').appendChild(man);
    })


    const toGame = document.createElement("button");
    toGame.style.marginTop = "50px"
    toGame.style.borderRadius = "10px"
    toGame.style.height = "45px"
    toGame.innerHTML = "Play"
    document.querySelector('.div-of-players-names').appendChild(toGame);


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

    
    toGame.addEventListener('click', () => {
        names.style.display = "none"
        let i = 0;
        const players = []
        arrnames.forEach(name => {
            players.push(new Player(document.querySelector('.' + String(name)).value));
        })
        divideCardsToplayers(allCards, players[0], players[1], players[2], players[3]);
        players.forEach(player => {
            player.mergesort()
        })
        console.log(players[0])
    })
})











