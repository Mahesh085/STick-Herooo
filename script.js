let stick, hero, platform, nextPlatform, score = 0;
const gameContainer = document.getElementById("game-container");

function startGame() {
    stick = document.getElementById("stick");
    hero = document.getElementById("hero");
    platform = document.getElementById("platform");
    nextPlatform = document.getElementById("next-platform");

    score = 0;
    updateScore();
    stick.style.height = "0px";
    growStick();
}

function growStick() {
    let height = 0;
    const growInterval = setInterval(() => {
        if (height < 200) {
            height += 5;
            stick.style.height = `${height}px`;
        } else {
            clearInterval(growInterval);
            dropStick();
        }
    }, 100);
}

function dropStick() {
    stick.style.transition = "transform 0.5s";
    stick.style.transform = "rotate(90deg)";
    setTimeout(checkIfHeroCanCross, 500);
}

function checkIfHeroCanCross() {
    const stickEnd = stick.getBoundingClientRect().right;
    const nextPlatformStart = nextPlatform.getBoundingClientRect().left;
    const nextPlatformEnd = nextPlatform.getBoundingClientRect().right;

    if (stickEnd >= nextPlatformStart && stickEnd <= nextPlatformEnd) {
        score++;
        updateScore();
        moveHero();
    } else {
        alert("Game Over! Final Score: " + score);
        resetGame();
    }
}

function moveHero() {
    hero.style.transition = "left 1s";
    hero.style.left = `${parseInt(hero.style.left) + 250}px`;

    setTimeout(() => {
        resetStick();
        repositionPlatforms();
    }, 1000);
}

function resetStick() {
    stick.style.transition = "none";
    stick.style.transform = "rotate(0deg)";
    stick.style.height = "0px";
}

function repositionPlatforms() {
    platform.style.left = `${parseInt(platform.style.left) + 250}px`;
    nextPlatform.style.left = `${Math.random() * 500 + 300}px`;
    startGame();
}

function resetGame() {
    hero.style.left = "50px";
    platform.style.left = "50px";
    nextPlatform.style.left = "300px";
    score = 0;
    updateScore();
}

function updateScore() {
    document.getElementById("score").innerText = `Score: ${score}`;
}
