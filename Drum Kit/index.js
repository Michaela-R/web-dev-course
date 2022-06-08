const getAudio = (letter) => {
    switch (letter) {
        case "w": 
            return new Audio("sounds/tom-1.mp3");
        case "a":
            return new Audio("sounds/tom-2.mp3");
        case "s":
            return new Audio("sounds/tom-3.mp3");
        case "d":
            return new Audio("sounds/tom-4.mp3");
        case "j":
            return new Audio("sounds/snare.mp3");
        case "k":
            return new Audio("sounds/crash.mp3");
        case "l":
            return new Audio("sounds/kick-bass.mp3");
        default:
            return null;
    }
}

const animateDrum = (letter) => {
    const drum = document.querySelector(`.${letter}`);
    drum.classList.add("pressed");
    setTimeout(() => {
        drum.classList.remove("pressed");
    }, 100);
}

const playSound = (letter) => {
    const audio = getAudio(letter);
    if (!audio) 
        return;
    animateDrum(letter);
    audio.play();
}

const handleClick = (e) => {
    const drum = e.target;
    const letter = drum.innerHTML;

    playSound(letter);
};

const handleKeyDown = (e) => {
    const letter = e.key;
    playSound(letter);
}

// Add click listener to all drum buttons
document.querySelectorAll(".drum").forEach(button => {
    button.addEventListener("click", (e) => handleClick(e));
});

document.addEventListener("keydown", (e) => handleKeyDown(e));