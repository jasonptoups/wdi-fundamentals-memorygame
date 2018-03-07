console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne;

cardOne = cards[0];
cardTwo = cards [1];

cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
console.log("user flipped " + cardOne);
console.log("user flipped " + cardsInPlay);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again")
	}
}