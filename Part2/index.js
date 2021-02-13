const cardId = document.getElementById('card-id');
const cardStyle = document.getElementById('card-style');

function setCard() {
    const suit = cardId.value;
    const card = document.getElementById(suit);
    const color = cardStyle.value;
   card.style.color = color;
   console.log(suit, card, color)
}

function reset() {
    const allCards = document.querySelectorAll('section')
    allCards.forEach(val => val.style.color = 'grey')
}