

let  cards = document.querySelectorAll('.card');
var isFlipped = false;
var firstCard, secondCard;
var lock = false;


function flip(){
    if (lock) return;
   if (this === firstCard) return;
    this.classList.add('flip');
    if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    lock = true;
    check();
}
function check(){
    var isMatch = firstCard.dataset.image === secondCard.dataset.image;
    isMatch ? succes() : fail();
}
function succes() {
    firstCard.removeEventListener('click', flip);
    secondCard.removeEventListener('click', flip);
   reset();
}

function fail() {
    setTimeout( () => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        reset();
    }, 1500);
}
function reset() {
    [isFlipped, lock] = [false, false];
     [firstCard, secondCard] = [null, null];
}
(function shuffle() {
  cards.forEach(card => {
let ramdomPos = Math.floor(Math.random() * 16);
 card.style.order = ramdomPos;
});
})();
cards.forEach(card => card.addEventListener('click', flip));

/*function moveCounter(){    
    moves++;    
    counter.innerHTML = moves;
}*/
var moves = 0;
function onClick(){
    moves += 1;
    document.querySelector(".moves").innerHTML = moves;
}






/*const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let lockBoard = false;
  let firstCard, secondCard;

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.image === secondCard.dataset.image;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
  }

  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

 (function shuffle() {
  cards.forEach(card => {
    let ramdomPos = Math.floor(Math.random() * 12);
    card.style.order = ramdomPos;
  });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));*/