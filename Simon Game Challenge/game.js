const buttonColors = ["red", "blue", "green", "yellow"];
const pattern = [];
const userPattern = [];
const wrongAudio = new Audio("sounds/wrong.mp3");
let inProgress = false;

function checkAnswer() {
    const index = userPattern.length - 1;
    return userPattern[index] === pattern[index];
}

function playAudio(color) {
    const audio = new Audio("sounds/" + color + ".mp3");
    audio.play();
}

function clickTile(color) {
    $("#" + color).addClass("pressed");
    setTimeout(function () {
        $("#" + color).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColor = buttonColors[randomNumber];
    pattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(150).fadeIn(150);
    playAudio(randomChosenColor);
    $("#level-title").text("Level " + pattern.length);
}

function gameOver() {
    wrongAudio.play();
    $("body").addClass("game-over");
    setTimeout(() => $("body").removeClass("game-over"), 200);
    $("#level-title").text("Game Over, Press Any Key to Restart");
    pattern.length = 0;
    userPattern.length = 0;
    inProgress = false;
}

function handleClick(e) {
    if (!inProgress) {
        nextSequence();
        inProgress = true;
        return;
    }
    const userChosenColor = e.target.id;
    userPattern.push(userChosenColor);
    clickTile(userChosenColor);
    playAudio(userChosenColor);
    if (checkAnswer()) {
        if (pattern.length == userPattern.length) {
            setTimeout(nextSequence, 1000);
            userPattern.length = 0;
        }
    }
    else {
        gameOver();
    }
}

// Add click event listener to all buttons
$(".btn").click("click", handleClick);


// Add keypress to start game
$(document).keydown(function (e) {
    if (inProgress) return;
    nextSequence();
    inProgress = true;
});
