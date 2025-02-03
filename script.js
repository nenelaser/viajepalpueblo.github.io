document.getElementById('card').addEventListener('click', function() {
    this.classList.toggle('flipped');
});

function flipCard(card) {
    card.classList.toggle('flipped');
}