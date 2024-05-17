const btnFoward = document.getElementById('btn-foward');
const btnBack = document.getElementById('btn-back');
const cards = document.querySelectorAll('.card');
let cardInit = 0;

function hideSelectedCard(){
    const cardSelected = document.querySelector('.selected');
    cardSelected.classList.remove('selected');
}

function showCard(cardIndex) {
    cards[cardIndex].classList.add('selected');
}

btnFoward.addEventListener('click', function () {
    hideSelectedCard();

    cardInit = (cardInit + 1) % cards.length;
    showCard(cardInit);
});

btnBack.addEventListener('click', function () {
    hideSelectedCard();

    cardInit = (cardInit - 1 + cards.length) % cards.length;
    showCard(cardInit);
});
