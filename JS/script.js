const change = document.querySelector("#switch");

change.addEventListener("click", changeTheme);

function changeTheme() {
    if (document.body.classList.contains("black-theme")) {
        document.body.classList.remove("black-theme");
        document.body.classList.add("light-mode");
        change.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.classList.remove("light-mode");
        document.body.classList.add("black-theme");
        change.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

const phrases = [
    "Certified Boomer",
    "No-life Deadass",
    "Anti-grass Machine",
];

let currentPhraseIndex = 0;
let currentCharacterIndex = 0;
let typingForward = true;
let cursor = document.getElementById("cursor");
let typewriter = document.getElementById("typewriter");

function type() {
    if (typingForward) {
        if (currentCharacterIndex < phrases[currentPhraseIndex].length) {
            typewriter.textContent += phrases[currentPhraseIndex][currentCharacterIndex];
            currentCharacterIndex++;
            cursor.style.animation = "none";
        } else {
            typingForward = false;
            setTimeout(type, 1000);
            cursor.style.animation = "blink 1s infinite";
            return;
        }
    } else {
        if (currentCharacterIndex > 0) {
            typewriter.textContent = typewriter.textContent.slice(0, -1);
            currentCharacterIndex--;
            cursor.style.animation = "none";
        } else {
            typingForward = true;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            cursor.style.animation = "blink 1s infinite";
            setTimeout(type, 1000);
            return;
        }
    }

    setTimeout(type, typingForward ? 100 : 50);
}

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

document.addEventListener('keydown', function(event) {

    if (event.keyCode == 123) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.shiftKey && event.keyCode == 74) {
        event.preventDefault();
    }

    if (event.ctrlKey && event.keyCode == 85) {
        event.preventDefault();
    }
});

setTimeout(type, 2000);