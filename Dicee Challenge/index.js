function randomDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

// Select elements from the DOM
const $dice1 = document.querySelector('.img1');
const $dice2 = document.querySelector('.img2');
const $title = document.querySelector('h1');

// Create 2 random numbers
const dice1Number = randomDiceNumber();
const dice2Number = randomDiceNumber();

// Update the DOM with the images of the dice with the random numbers
$dice1.setAttribute('src', 'images/dice' + dice1Number + '.png');
$dice2.setAttribute('src', 'images/dice' + dice2Number + '.png');

// Display winner or draw
if (dice1Number > dice2Number) {
    $title.textContent = 'Player 1 Wins!';
} else if (dice1Number < dice2Number) {
    $title.textContent = 'Player 2 Wins!';
} else {
    $title.textContent = 'Draw!';
}
